import {DataStore} from 'aws-amplify/datastore'
import {Song} from '../models'
import {v4 as uuidv4} from 'uuid'
import {ToastAndroid} from 'react-native'
import { getCurrentUser } from 'aws-amplify/auth'
import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player'

export default function () {
  Number.prototype.formatNumber = function () {
    const num = this.valueOf()
    if (num >= 1000000) {
      const result = (num / 1000000).toFixed(1)
      return result.endsWith('.0') ? result.slice(0, -2) + 'm' : result + 'm'
    } else if (num >= 1000) {
      const result = (num / 1000).toFixed(1)
      return result.endsWith('.0') ? result.slice(0, -2) + 'k' : result + 'k'
    } else {
      return num + ''
    }
  }
}

const currentAuthenticatedUser = async () => {
  try {
    const {username, userId, signInDetails} = await getCurrentUser()
    console.log(`The username: ${username}`)
    console.log(`The userId: ${userId}`)
    console.log(`The signInDetails: ${signInDetails}`)
    return {
      username: username,
      userId: userId,
      signInDetails: signInDetails,
    }
  } catch (err) {
    console.log('Util Error: ', err)
    return null
  }
}

export const addListen = async key => {
  const userInfo = await currentAuthenticatedUser()
  const original = await DataStore.query(Song, key)
  const updatedSong = await DataStore.save(
    Song.copyOf(original, updated => {
      updated.listens = [
        ...original.listens,
        userInfo ? userInfo?.userId : `Anonymous${uuidv4().slice(0, 4)}`,
      ],
      updated._version = original._version - 2
    }),
  )
  if (updatedSong) {
    console.log('DataStore Update Song Listen Success')
    ToastAndroid.showWithGravity(
      'DataStore Update Song Listen Success',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )
  } else {
    console.log('DataStore Update Song Listen Failed')
    ToastAndroid.showWithGravity(
      'DataStore Update Song Listen Failed',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )
  }
}

export function convertSongsToTracks (list) {
  return list.map(item => ({
    id: item.key,
    url: 'https://dn1i8z7909ivj.cloudfront.net/public/' + item.fileKey,
    title: item.name,
    artist: item.selectedCreator || 'Unknown Artist',
    album: item.partOf || 'Unknown Album',
    genre: item.selectedCategory || 'Unknown Genre',
    date: item.createdAt,
    artwork: 'https://dn1i8z7909ivj.cloudfront.net/public/' + item.thumbnailKey,
    duration: item.durationInSeconds || 0, // Assuming durationInSeconds is a property in the original object
  }))
}

export function convertItemToTrack (item) {
  return {
    id: item.key,
    url: 'https://dn1i8z7909ivj.cloudfront.net/public/' + item.fileKey,
    title: item.name,
    artist: item.selectedCreator || 'Unknown Artist',
    album: item.partOf || 'Unknown Album',
    genre: item.selectedCategory || 'Unknown Genre',
    date: item.createdAt,
    artwork: 'https://dn1i8z7909ivj.cloudfront.net/public/' + item.thumbnailKey,
    duration: item.durationInSeconds || 0, // Assuming durationInSeconds is a property in the original object
  }
}

export const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer()
  } catch (err) {
    console.log(err)
  }
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    android: {
      // This is the default behavior
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
    },
    // Media controls capabilities
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],

    // Capabilities that will show up when the notification is in the compact form on Android
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
    ],

    notificationCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],

    // Icons for the notification on Android (if you don't like the default ones)
    // playIcon: require('./play-icon.png'),
    // pauseIcon: require('./pause-icon.png'),
    // stopIcon: require('./stop-icon.png'),
    // previousIcon: require('./previous-icon.png'),
    // nextIcon: require('./next-icon.png'),
    // icon: require('./notification-icon.png')
  })
}
