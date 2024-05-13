import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import {colors} from '../../utils/Colors'
import {signOut} from 'aws-amplify/auth'
import TitleBlock from '../TitleBlock'
import {DataStore, Predicates, SortDirection} from 'aws-amplify/datastore'
import {Album, Song} from '../../models'
import usePullToRefresh from '../../utils/hooks/usePullToRefresh'
import usePagination from '../../utils/hooks/usePagination'
import FastImage from 'react-native-fast-image'
import imageCacheHoc from '../../react-native-image-cache-hoc'
import {fonts} from '../../utils/Fonts'
import TrackPlayer, {State} from 'react-native-track-player'
import EventEmitter from '../../utils/EventEmitter'
import AsyncStorageManager from '../../utils/storage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Utils, { convertItemToTrack, convertSongsToTracks, setupPlayer } from '../../utils/Utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MyDatastore from '../../utils/MyDatastore'

Utils()

const {width, height} = Dimensions.get('window')

const CacheableImage = imageCacheHoc(Image, {
  fileHostWhitelist: ['dn1i8z7909ivj.cloudfront.net'],
  defaultPlaceholder: {
    component: Image,
    props: {
      source: require('../../assets/images/album_art.jpeg'),
      style: {
        width: (39 / 100) * width,
        height: (39 / 100) * width,
        borderRadius: 10,
      }
    }
  }
});

const Item = ({item, onPlay, onAlbumClick}) => (
  <TouchableOpacity
    style={styles.albumContainer}
    onPress={item?.fileKey ? onPlay : onAlbumClick}>
    {/* <FastImage
      source={{
        uri: 'https://dn1i8z7909ivj.cloudfront.net/public/' + item?.thumbnailKey,
      }}
      style={styles.albumImage}
      defaultSource={require('../../assets/images/album_art.jpeg')}
    /> */}
    <CacheableImage style={styles.albumImage} source={{uri: encodeURI('https://dn1i8z7909ivj.cloudfront.net/public/' + item?.thumbnailKey)}} permanent={false} />
    <Text numberOfLines={2} style={styles.itemText}>
      {item?.name}
    </Text>
    {item?.listens && (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons name='play' size={15} color={colors.primaryColor} />
        <Text style={[styles.text, {marginLeft: 0}]}>{item?.listens ? Number(item?.listens?.length).formatNumber() : ''}</Text>
      </View>
    )}
  </TouchableOpacity>
)

const INITIAL_PAGE = 0

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [trendingSongs, setTrendingSongs] = useState([])
  const [isLoadingSongs, setIsLoadingSongs] = useState(false)
  const [recentlyPlayed, setRecentlyPlayed] = useState([])
  const [trendingPlayed, setTrendingPlayed] = useState(false)
  const trendingListRef = useRef()

  const fetchData = async page => {
    let data = []
    setIsLoading(true) // Start loading indicator
    try {
      const fetchedPostsTest = await MyDatastore.getAllSongs(1, 3, null, (res) => {
        console.log("Custom Get All Songs"+res)
        console.log("Custom Get All Songs"+JSON.stringify(res))
        console.log("Custom Get All Songs first item"+res[0])
      });
      MyDatastore.subscribeToSongs((data) => {
        console.log("Subscription Data: "+JSON.stringify(data))
      })
      console.log("fetchedPostsTest: "+JSON.stringify(fetchedPostsTest));
      const fetchedPosts = await DataStore.query(Album, Predicates.ALL, {
        page: page,
        limit: 3,
      })
      const subscription = DataStore.observe(Album).subscribe(async msg => {
        // console.log(msg.model, msg.opType, msg.element)
        if (posts.length < 1) {
          await fetchData(0);
          return
        }
      })
      setPosts([...posts, ...fetchedPosts]) // Append new posts to the existing ones
      data = fetchedPosts
    } catch (error) {
      console.error('Error fetching data:', error)
      if (str(error).contains('The player is not initialized')) {
        setupPlayer()
      }
      return []
    } finally {
      setIsLoading(false) // Stop loading indicator
      return data
    }
  }

  const fetchSongs = async page => {
    let data = []
    setIsLoadingSongs(true) // Start loading indicator
    try {
      const fetchedPosts = await DataStore.query(Song, Predicates.ALL, {
        sort: s => s.listens(SortDirection.ASCENDING),
      })
      const subscription = DataStore.observe(Song).subscribe(async msg => {
        // console.log(msg.model, msg.opType, msg.element)
        if (trendingSongs.length < 1) {
          await fetchSongs(0)
          return
        } else {
          if (msg.opType === 'UPDATE') {
            console.log('An update operation occured')
            const elem = msg.element
            console.log(elem.name+" - "+elem.listens.length);
          }
        }
      })
      fetchedPosts.sort((a, b) => b.listens?.length - a.listens?.length)
      let startIdx = 0
      let endIdx = 5
      if (page > 0) {
        startIdx = endIdx * page
        endIdx = startIdx + 5
      }
      setTrendingSongs(prevSongs => {
        const newSongs = fetchedPosts.slice(startIdx, endIdx)
        // Filter out items that are already present in the state
        const filteredNewSongs = newSongs.filter(newSong => {
          return !prevSongs.some(prevSong => prevSong.key === newSong.key) // Adjust key comparison based on your object structure
        })
        return [...prevSongs, ...filteredNewSongs]
      })
      data = fetchedPosts
      let currentQueue = await AsyncStorage.getItem('current-queue');
      let tracks = await TrackPlayer.getQueue()
      if (tracks.length > 0 && currentQueue === 'trending') {
        await TrackPlayer.add(
          convertSongsToTracks(fetchedPosts.slice(startIdx, endIdx)),
        )
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    } finally {
      setIsLoadingSongs(false) // Stop loading indicator
      return data
    }
  }

  const fetchRecentlyPlayed = async () => {
    const trcks = await AsyncStorageManager.getObject('recently-played')
    setRecentlyPlayed([...trcks])
  }

  useEffect(() => {
    fetchData(0)
    fetchSongs(0)
    fetchRecentlyPlayed()
    // Subscribe to the 'customEvent' event
    const listener = async data => {
      console.log('Data Received: ', data)
      const trcks = await AsyncStorageManager.getObject('recently-played')
      setRecentlyPlayed([...trcks])
    }
    EventEmitter.on('new-track', listener)
    
    console.log("Final count: "+MyDatastore.getCount());

    // Cleanup function
    return () => {
      // Unsubscribe from the event when component unmounts
      EventEmitter.off('customEvent', listener)
    }
  }, [])

  const {
    refreshing: refreshingAlbums,
    onRefreshHandler: onRefreshHandlerAlbums,
  } = usePullToRefresh({
    async onRefreshFunction () {
      await fetchData(INITIAL_PAGE)
    },
  })

  const {
    currentPage: currentPageAlbums,
    handleEndReached: handleEndReachedAlbums,
  } = usePagination({
    fetchFunction: () => {
      return fetchData(currentPageAlbums + 1)
    },
    initialPage: INITIAL_PAGE,
  })

  const {
    refreshing: refreshingTrending,
    onRefreshHandler: onRefreshHandlerTrending,
  } = usePullToRefresh({
    async onRefreshFunction () {
      await fetchSongs(INITIAL_PAGE)
    },
  })

  const {
    currentPage: currentPageTrending,
    handleEndReached: handleEndReachedTrending,
  } = usePagination({
    fetchFunction: () => {
      return fetchSongs(currentPageTrending + 1)
    },
    initialPage: INITIAL_PAGE,
  })

  const handleSignOut = async () => {
    try {
      await signOut()
      await AsyncStorage.removeItem('CurrentUser')
      navigation.replace('LoginScreen')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <Item
        item={item}
        onPlay={async () => {
          try {
            let trcks = await TrackPlayer.getQueue()
            if (
              trcks.length < 1 &&
              trcks.indexOf(convertItemToTrack(item)) === -1
            ) {
              await TrackPlayer.add(convertSongsToTracks(trendingSongs))
            } else {
              // console.log("Old trcks: "+JSON.stringify(trcks))
            }
          } catch (error) {
            console.log(error)
          }

          let tracks = await TrackPlayer.getQueue()
          let track = tracks.find(
            track => track.url === convertItemToTrack(item).url,
          )
          let index = tracks.indexOf(track)

          setTrendingPlayed(true)
          await TrackPlayer.skip(index)
          await TrackPlayer.play()
          await AsyncStorage.setItem('current-queue', 'trending')
        }}

        onAlbumClick={async ()=> {
          navigation.navigate('AlbumSongsScreen', {album: item})
        }}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 0}}>
          <TitleBlock title={'Explore'} />
        </View>
        <View style={{width: width}}>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshingAlbums}
                onRefresh={onRefreshHandlerAlbums}
              />
            }
            onEndReached={handleEndReachedAlbums}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              isLoading ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <ActivityIndicator
                    size={'large'}
                    color={colors.primaryColor}
                  />
                </View>
              ) : null
            }
            onScroll={() => {}}
          />
        </View>

        <Text style={styles.titleText}>Recently Played</Text>
        {recentlyPlayed.length < 1 ? (
          <Text style={styles.text}>You havent played any songs yet.</Text>
        ) : (
          <View style={{width: width}}>
            <FlatList
              data={recentlyPlayed}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.9}
              onScroll={() => {}}
            />
          </View>
        )}

        {trendingSongs.length > 0 && (
          <>
            <Text style={styles.titleText}>Trending on Hepi Music</Text>
            <View style={{width: width}}>
              <FlatList
                data={trendingSongs}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshingTrending}
                    onRefresh={onRefreshHandlerTrending}
                  />
                }
                onEndReached={handleEndReachedTrending}
                onEndReachedThreshold={0.9}
                ref={trendingListRef}
                ListFooterComponent={
                  isLoadingSongs ? (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <ActivityIndicator
                        size={'large'}
                        color={colors.primaryColor}
                      />
                    </View>
                  ) : null
                }
                onScroll={() => {}}
              />
            </View>
          </>
        )}

        <View>
          <Button title='Logout' onPress={async () => await handleSignOut()} />
        </View>
        <View>
          <Button
            title='SearchScreen'
            onPress={async () => navigation.push('SearchScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
  },
  text: {
    color: colors.white,
    overflow: 'scroll',
    margin: 10,
  },
  itemText: {
    color: colors.white,
    overflow: 'scroll',
    width: (39 / 100) * width,
    textAlign: 'center',
  },
  albumContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  albumImage: {
    width: (39 / 100) * width,
    height: (39 / 100) * width,
    borderRadius: 10,
  },
  titleText: {
    color: colors.primaryColor,
    fontWeight: '900',
    fontSize: 25,
    margin: 10,
    fontFamily: fonts.roboto,
  },
})
