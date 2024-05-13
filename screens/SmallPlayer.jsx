import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import {colors} from '../utils/Colors'
import FastImage from 'react-native-fast-image'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
  useIsPlaying,
} from 'react-native-track-player'

const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex()
  console.log(currentTrack, playBackState, State.Playing)
  if (currentTrack != null) {
    if (playBackState == State.Paused || playBackState == State.Ready) {
      await TrackPlayer.play()
    } else {
      await TrackPlayer.pause()
    }
  }
}

const SmallPlayer = ({navigation}) => {
  const playBackState = usePlaybackState().state
  const isPlaying = useIsPlaying()
  const progress = useProgress()
  //   custom states
  const [songIndex, setsongIndex] = useState(0)
  const [trackTitle, setTrackTitle] = useState()
  const [trackArtist, setTrackArtist] = useState()
  const [trackArtwork, setTrackArtwork] = useState()

  //   changing the track on complete
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    console.log('Small Player Event: ' + JSON.stringify(event.track))
    if (
      event.type === Event.PlaybackActiveTrackChanged &&
      event.track !== null
    ) {
      const queue = await TrackPlayer.getQueue()
      const track = queue.find(trck => trck.url === event.track.url) // await TrackPlayer.getTrack(event.track)
      const {title, artwork, artist} = track
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
  })

  useEffect(() => {
    console.log('SmallPlayer PlayBackState: ' + playBackState)
    const restartPlayback = async () => {
      let ps = await TrackPlayer.getPlaybackState()
      console.log('----' + ps.state)

      const track = await TrackPlayer.getActiveTrack()
      const {title, artwork, artist} = track
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
    restartPlayback()
    setTimeout(() => {
      console.log('SmallPlayer PlayBackState: ' + playBackState)
    }, 2000)
  }, [])

  const skipToNext = async () => {
    const currentIndex = await TrackPlayer.getActiveTrackIndex()
    const next = await TrackPlayer.getTrack(currentIndex+1)
    if (next) {
      await TrackPlayer.skipToNext()
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container,]}
      onPress={() => navigation.navigate('BigPlayer')}>
      <View>
        <FastImage
          style={styles.fastImage}
          source={{
            uri: trackArtwork,
            priority: FastImage.priority.normal,
          }}
          defaultSource={require('../assets/images/album_art.jpeg')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.titleTextContainer]}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>
              {trackTitle}
            </Text>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>
              {trackArtist}
            </Text>
          </View>
          <View style={styles.playerControlsContainer}>
            <TouchableOpacity style={{marginRight: 10}} onPress={() => skipToNext()}>
              <Ionicons
                name='play-skip-forward-circle-outline'
                size={35}
                color={colors.primaryColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => togglePlayBack(playBackState)}>
              {isPlaying.bufferingDuringPlay ? (
                <ActivityIndicator
                  color={colors.primaryColor}
                  style={{justifyContent: 'center', alignItems: 'center'}}
                />
              ) : (
                <Ionicons
                  name={
                    playBackState === State.Playing
                      ? 'pause-circle'
                      : 'play-circle'
                  }
                  size={35}
                  color={colors.primaryColor}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 10}}>
              <Ionicons
                name='heart-outline'
                size={30}
                color={colors.primaryColor}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Slider
            style={{flex: 1, height: 40, marginTop: 1}}
            value={progress.buffered}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor={'#FFFFFF'}
            maximumTrackTintColor={colors.white}
            thumbTintColor={'#000000'}
            thumbImage={null}
          />
          <Slider
            style={{flex: 1, height: 40, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor={colors.primaryColor}
            maximumTrackTintColor={colors.white}
            thumbTintColor={colors.primaryColor}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value)
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SmallPlayer

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderWidth: 1,
    backgroundColor: colors.black,
    flexDirection: 'row',
    padding: 3,
  },
  text: {
    color: colors.white,
    overflow: 'hidden',
  },
  fastImage: {
    height: '100%',
    width: 70,
    borderRadius: 15,
    borderColor: colors.black,
    borderWidth: 2,
    marginHorizontal: 10,
  },
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleTextContainer: {
    flex: 1,
    height: 45,
    marginTop: 5,
    overflow: 'hidden',
  },
  playerControlsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
})
