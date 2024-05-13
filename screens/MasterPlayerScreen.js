import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native'
import React, {useState, useEffect} from 'react'
import {colors} from '../utils/Colors'
import SmallPlayer from './SmallPlayer'
import BottomNav from './BottomNav'
import MainScreensRouter from './mainscreens/MainScreensRouter'
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  useIsPlaying,
} from 'react-native-track-player'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import { getCurrentUser } from 'aws-amplify/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const {width, height} = Dimensions.get('window')

const setupPlayer = async () => {
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

const MasterPlayerScreen = ({navigation}) => {
  const [mounted, setMounted] = useState(false)
  const [activeScreen, setActiveScreen] = useState('HomeScreen')
  const [smallPlayer, setSmallPlayer] = useState()
  const isPlaying = useIsPlaying()

  if (!mounted) {
    const getCurrentAuthUser = async () => {
      try {
        const currentUser = await getCurrentUser()
        await AsyncStorage.setItem("CurrentUser", JSON.stringify({username: currentUser.username, userId: currentUser.userId, signInDetails: currentUser.signInDetails}))
        console.log("MasterPlayerScreen Auth Success")
      } catch (err) {
        console.log("MasterPlayerScreen Auth Error: "+err)
        navigation.replace('LoginScreen');
      }
    }
    getCurrentAuthUser();
  }

  const getCurrentTrack = async () => {
    const currentTrack = await TrackPlayer.getActiveTrack()
    if (currentTrack) {
      setSmallPlayer(true)
    }
  }
  useEffect(() => {
    setMounted(true)
    setupPlayer()
    getCurrentTrack()
  }, [])

  useEffect(() => {
    if (isPlaying.playing) {
      setSmallPlayer(true)
    }
  }, [isPlaying])
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={{width: width, height: height}}>
            <View
              style={
                smallPlayer
                  ? {height: (85 / 100) * height}
                  : {height: (97 / 100) * height}
              }>
              <MainScreensRouter setActiveScreen={setActiveScreen} />
            </View>
            {smallPlayer && (
              <View style={styles.smallPlayerContainer}>
                <SmallPlayer navigation={navigation} />
              </View>
            )}
            <View style={styles.bottomNavContainer}>
              <BottomNav navigation={navigation} activeScreen={activeScreen} />
            </View>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default MasterPlayerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: colors.primaryColorDark,
  },
  text: {
    color: colors.white,
  },
  smallPlayerContainer: {
    height: (12 / 100) * height,
    width: width,
    overflow: 'hidden',
  },
  bottomNavContainer: {
    height: (10 / 100) * height,
    width: width,
    overflow: 'hidden',
    marginTop: 10,
  },
})
