import NetInfo from '@react-native-community/netinfo';
import { generateClient } from "aws-amplify/api";
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';

class MyDatastore {
    #client;
    #subscriptions = [];
    count = 0;

    constructor() {
        // Amplify.configure(awsExports)
        this.#client = generateClient()
    }

    updateCount() {
        this.count += 1;
    }

    getCount() {
        return this.count;
    }


    async getAllSongs(page = 1, pageLimit = 900000000, nextToken = null, retry = false, callback = () => {}) {
        return new Promise(async (resolve, reject) => {
            try {
                let variables = {
                    limit: pageLimit
                };
    
                if (nextToken) {
                    variables.nextToken = nextToken;
                }
    
                try {
                    await AsyncStorage.getItem('AllSongs').then(async (list) => {
                        // console.log('AsyncStorage List Songs' + list)
                        if (list != null) {
                            const listSongs = JSON.parse(list)
                            const result = {
                                items: listSongs.items.slice(((variables.limit * page) - variables.limit), (variables.limit * page)),
                                nextToken: listSongs.nextToken,
                                startedAt: listSongs.startedAt,
                                __typename: listSongs.__typename,
                                nextPage: page + 1,
                                fetchedAt: Date.now(),
                                fromCloud: false
                            }
                            callback(result)
                            resolve(result)
                        } else {
                            const res = await this.#client.graphql({
                                query: queries.listSongs,
                                variables
                            });
                
                            await AsyncStorage.setItem('AllSongs', JSON.stringify(res.data.listSongs)).then(async () => {
                                await AsyncStorage.getItem('AllSongs').then((list) => {
                                    // console.log('AsyncStorage List Songs' + list)
                                    if (list != null) {
                                        const listSongs = JSON.parse(list)
                                        const result = {
                                            items: listSongs.items.slice(((variables.limit * page) - variables.limit), (variables.limit * page)),
                                            nextToken: listSongs.nextToken,
                                            startedAt: listSongs.startedAt,
                                            __typename: listSongs.__typename,
                                            nextPage: page + 1,
                                            fetchedAt: Date.now(),
                                            fromCloud: true
                                        }
                                        callback(result)
                                        resolve(result)
                                    } else {
                                        setTimeout(async () => {
                                            await AsyncStorage.getItem('AllSongs').then((list) => {
                                                // console.log('AsyncStorage List Songs' + list)
                                                if (list != null) {
                                                    const listSongs = JSON.parse(listSongs)
                                                    const result = {
                                                        items: listSongs.items.slice(((variables.limit * page) - variables.limit), (variables.limit * page)),
                                                        nextToken: listSongs.nextToken,
                                                        startedAt: listSongs.startedAt,
                                                        __typename: listSongs.__typename,
                                                        nextPage: page + 1,
                                                        fetchedAt: Date.now(),
                                                        fromCloud: true
                                                    }
                                                    callback(result)
                                                    resolve(result)
                                                }
                                            })
                                        }, 5000);
                                    }
                                })
                            });
                        }
                    })
                } catch (err) {
                    callback({ err: err })
                    reject(err)
                }
            } catch (error) {
                console.log("CATCH ERROR: "+error.toString())
                console.log("CATCH ERROR: "+error.toString().includes('Network error'))
                if (error.toString().includes("Network error")) {
                    console.log("Network error: "+error)
                    ToastAndroid.showWithGravity('Network error encountered while fetching songs. Set to try automatically when connection state changes.', ToastAndroid.LONG, ToastAndroid.BOTTOM)
                    const networkStateSubscription = NetInfo.addEventListener((state) => {
                        if (state.isConnected && state.isInternetReachable) {
                            console.log("Get all songs recalled after network restoration")
                            ToastAndroid.showWithGravity('Connection restored. Retrying to fetch songs from cloud', ToastAndroid.LONG, ToastAndroid.BOTTOM)
                            this.getAllSongs(pageLimit, nextToken, callback);
                        }
    
                    })
                    networkStateSubscription()
                    return;
                } else {
                    callback({error: error})
                    reject(error)
                }
    
            }
        });
    }

    observeOnCreateSong(callback = () => {}) {
        // Subscribe to creation of Song
        const createSub = this.#client
            .graphql({ query: subscriptions.onCreateSong })
            .subscribe({
                next: async ({ data }) => {
                    await AsyncStorage.getItem('AllSongs').then(async (value) => {
                        let songData = JSON.parse(value)
                        let songList = [...songData.items];
                        songList.push(data.onCreateSong);
                        songData.items = songList;
                        await AsyncStorage.setItem('AllSongs', JSON.stringify(songData)).then(() => {
                            console.log(data);
                            callback(data)
                        })
                    })
                },
                error: (error) => {
                    console.warn(error)
                    if (error.toString().includes('Network')) {
                        createSub.unsubscribe();
                        this.observeOnCreateSong(callback);
                    }
                }
            });
        return createSub;
    }

    observeOnUpdateSong(callback = () => {}) {
        // Subscribe to update of Song
        const updateSub = this.#client
            .graphql({ query: subscriptions.onUpdateSong })
            .subscribe({
                next: async ({ data }) => {
                    console.log('Song update started')
                    try {
                        await AsyncStorage.getItem('AllSongs').then(async (value) => {
                            let songData = JSON.parse(value)
                            let songList = [...songData.items];
                            const updatedSongList = songList.map(song => (song.key === data.onUpdateSong.key ? data.onUpdateSong : song));
                            songData.items = updatedSongList;
                            await AsyncStorage.setItem('AllSongs', JSON.stringify(songData)).then(() => {
                                console.log(data);
                                callback(data)
                            })
                        })
                    } catch(error) {
                        console.log("Update song error: "+error)
                    }
                    
                },
                error: (error) => {
                    console.warn(error)
                    if (error.toString().includes('Network')) {
                        updateSub.unsubscribe();
                        this.observeOnUpdateSong(callback);
                    }
                }
            });
        return updateSub;
    }

    observeOnDeleteSong(callback = () => {}) {
        // Subscribe to deletion of Song
        const deleteSub = this.#client
            .graphql({ query: subscriptions.onDeleteSong })
            .subscribe({
                next: async ({ data }) => {
                    await AsyncStorage.getItem('AllSongs').then(async (value) => {
                        let songData = JSON.parse(value)
                        let songList = [...songData.items];
                        const updatedSongList = songList.filter(song => song.key !== data.onDeleteSong.key);
                        songData.items = updatedSongList;
                        await AsyncStorage.setItem('AllSongs', JSON.stringify(songData)).then(() => {
                            console.log(data);
                            callback(data);
                        })
                    })
                },
                error: (error) => {
                    console.warn(error)
                    if (error.toString().includes('Network')) {
                        deleteSub.unsubscribe();
                        this.observeOnDeleteSong(callback);
                    }
                }
            });
        return deleteSub;
    }

    subscribeToSongs(callback = () => {}) {
        const createSongSub = this.observeOnCreateSong(callback);
        const updateSongSub = this.observeOnUpdateSong(callback);
        const deleteSongSub = this.observeOnDeleteSong(callback);

        this.#subscriptions.push(...[createSongSub, updateSongSub, deleteSongSub]);
    }

    async unsubscribeAll() {
        this.#subscriptions.forEach((sub) => {
            try{
                sub.unsubscribe()
            } catch(error){
                console.log(error)
            }
        });
    }
}

export default new MyDatastore();