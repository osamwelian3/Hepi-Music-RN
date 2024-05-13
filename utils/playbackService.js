import TrackPlayer, {Event} from "react-native-track-player";
import AsyncStorageManager from "./storage";
import EventEmitter from "./EventEmitter";
import { DataStore, Predicates } from "aws-amplify/datastore";
import { Song } from "../models";
import Utils, { addListen } from "./Utils";

export default async function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());
    
    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());

    TrackPlayer.addEventListener([Event.PlaybackActiveTrackChanged], async event => {
        console.log("Event: "+JSON.stringify(event))
        if (event.track) {
            try{
                console.log("key: "+event.track.url.split('/')[event.track.url.split('/').length-1])
                const key = event.track.url.split('/')[event.track.url.split('/').length-1]
                const song = await DataStore.query(Song, event.track.id)
                console.log('after datastore query')
                console.log("SONG: "+JSON.stringify(song))
                await AsyncStorageManager.prependToList('recently-played', song);
                await AsyncStorageManager.trimList('recently-played', 10);
                EventEmitter.emit('new-track', JSON.stringify(song))
                await addListen(song.key)
            } catch(err) {
                console.log("PlaybackService Error: "+err)
            }
            
        }
    })

    TrackPlayer.addEventListener([Event.PlaybackError], async event => {
        console.log("Event: "+JSON.stringify(event))
    })

    TrackPlayer.addEventListener([Event.PlayerError], async event => {
        console.log("Event: "+JSON.stringify(event))
    })

    TrackPlayer.addEventListener([Event.PlaybackState], async event => {
        console.log("Event: "+JSON.stringify(event))
    })
}