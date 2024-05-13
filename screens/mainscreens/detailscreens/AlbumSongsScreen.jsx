import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors} from '../../../utils/Colors'
import {DataStore, Predicates, SortDirection} from 'aws-amplify/datastore'
import {Song} from '../../../models'
import usePullToRefresh from '../../../utils/hooks/usePullToRefresh'
import usePagination from '../../../utils/hooks/usePagination'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FastImage from 'react-native-fast-image'
import Utils, {
  convertSongsToTracks,
  convertItemToTrack,
} from '../../../utils/Utils'
import TrackPlayer, {Event, useTrackPlayerEvents} from 'react-native-track-player'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CollapsingToolBarView from '../../CollapsingToolBarView'

Utils()

const {width, height} = Dimensions.get('window')

const Item = ({item, onPlay}) => {
  return (
    <TouchableOpacity onPress={onPlay} style={styles.albumSongItemContainer}>
      <FastImage
        source={{
          uri:
            'https://dn1i8z7909ivj.cloudfront.net/public/' + item?.thumbnailKey,
        }}
        style={styles.albumSongsImage}
        defaultSource={require('../../../assets/images/album_art.jpeg')}
      />
      <View style={styles.albumSongsItemTextContainer}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>
          {item?.name}
        </Text>
        {item?.listens && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons name='play' size={15} color={colors.primaryColor} />
            <Text style={[styles.text, {marginLeft: 0}]}>
              {item?.listens
                ? Number(item?.listens?.length).formatNumber()
                : ''}
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.moreOptions}>
        <Ionicons name='ellipsis-horizontal' size={30} color={colors.white} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const INITIAL_PAGE = 0

const AlbumSongsScreen = ({navigation, route}) => {
  const {album} = route.params
  const [albumSongs, setAlbumSongs] = useState([])
  const [isLoadingAlbumSongs, setIsLoadingAlbumSongs] = useState(false)
  const [attributes, setAttributes] = useState()

  const fetchSongs = async page => {
    let data = []
    setIsLoadingAlbumSongs(true) // Start loading indicator
    try {
      const fetchedPosts = await DataStore.query(
        Song,
        p => p.partOf.eq(album.key),
        {
          page: page,
          limit: 20,
          sort: s => s.listens(SortDirection.ASCENDING), // (a, b) => b.listens?.length - a.listens?.length,
        },
      )
      const subscription = DataStore.observe(
        Song,
        p => p.partOf.eq(album.key),
        {
          page: page,
          limit: 10,
          sort: s => s.listens(SortDirection.ASCENDING), // (a, b) => b.listens?.length - a.listens?.length,
        },
      ).subscribe(async msg => {
        // console.log(msg.model, msg.opType, msg.element)
        if (trendingSongs.length < 1) {
          await fetchSongs(0)
          return
        } else {
          if (msg.opType === 'UPDATE') {
            console.log('An update operation occured')
            const elem = msg.element
            console.log(elem.name + ' - ' + elem.listens.length)
          }
        }
      })
      fetchedPosts.sort((a, b) => b.listens?.length - a.listens?.length)
      let startIdx = 0
      let endIdx = 10
      if (page > 0) {
        startIdx = endIdx * page
        endIdx = startIdx + 5
      }
      setAlbumSongs(prevSongs => {
        const newSongs = fetchedPosts.slice(startIdx, endIdx)
        // Filter out items that are already present in the state
        const filteredNewSongs = newSongs.filter(newSong => {
          return !prevSongs.some(prevSong => prevSong.key === newSong.key) // Adjust key comparison based on your object structure
        })
        return [...prevSongs, ...filteredNewSongs]
      })
      data = fetchedPosts
      //   console.log(JSON.stringify(data))
      let currentQueue = await AsyncStorage.getItem('current-queue')
      let tracks = await TrackPlayer.getQueue()
      if (tracks.length > 0 && currentQueue === 'album-songs') {
        await TrackPlayer.add(
          convertSongsToTracks(fetchedPosts.slice(startIdx, endIdx)),
        )
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    } finally {
      setIsLoadingAlbumSongs(false) // Stop loading indicator
      return data
    }
  }

  useEffect(() => {
    fetchSongs(0)
  }, [])

  const {
    refreshing: refreshingAlbumSongs,
    onRefreshHandler: onRefreshHandlerAlbumSongs,
  } = usePullToRefresh({
    async onRefreshFunction () {
      await fetchSongs(INITIAL_PAGE)
    },
  })

  const {
    currentPage: currentPageAlbumSongs,
    handleEndReached: handleEndReachedAlbumSongs,
  } = usePagination({
    fetchFunction: () => {
      return fetchSongs(currentPageAlbumSongs + 1)
    },
    initialPage: INITIAL_PAGE,
  })

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
              await TrackPlayer.add(convertSongsToTracks(albumSongs))
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

          await TrackPlayer.skip(index)
          await TrackPlayer.play()
          await AsyncStorage.setItem('current-queue', 'album-songs')
          await AsyncStorage.setItem('current-queue-album-key', album.key)
        }}
      />
    )
  }

  const AlbumSongs = () => {
    attributes
      ? console.log('Attributes: ' + attributes.scrollEventThrottle)
      : console.log('No attributes')
    return (
      <FlatList
        data={albumSongs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        style={{width: '100%', height: '100%'}}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshingAlbumSongs}
            onRefresh={onRefreshHandlerAlbumSongs}
          />
        }
        onEndReached={handleEndReachedAlbumSongs}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoadingAlbumSongs ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <ActivityIndicator size={'large'} color={colors.primaryColor} />
            </View>
          ) : null
        }
      />
    )
  }

  //   changing the track on complete
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    console.log('Small Player Event: ' + JSON.stringify(event.track))
    if (
      event.type === Event.PlaybackActiveTrackChanged &&
      event.track !== null
    ) {
      const queue = await TrackPlayer.getQueue()
      const track = queue.find(trck => trck.url === event.track.url)
      const {title, artwork, artist} = track
      if (queue.indexOf(track) > track.length-2) {
        handleEndReachedAlbumSongs()
      }
    }
  })

  const playAll = async () => {
    let currentQueue = await AsyncStorage.getItem('current-queue')

    if (currentQueue == 'album-songs') {
      Alert.alert(
        'Already Playing Album',
        'This will start the playback from the first song. Do you wish to continue?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: async () => {
              try {
                await TrackPlayer.skip(0)
                await TrackPlayer.play()
              } catch (error) {
                console.log(error)
              }
            },
            style: 'default',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            console.log()(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      )
    } else {
      try {
        await TrackPlayer.add(convertSongsToTracks(albumSongs))
        await TrackPlayer.play()
        await AsyncStorage.setItem('current-queue', 'album-songs')
        await AsyncStorage.setItem('current-queue-album-key', album.key)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <CollapsingToolBarView
      setAttributes={setAttributes}
      attributes={attributes}
      params={{
        content: <AlbumSongs />,
        navigation: navigation,
        album: album,
        headerTitle: album.name,
        playAll: playAll,
        numberOfSongs: albumSongs.length,
        headerImage:
          'https://dn1i8z7909ivj.cloudfront.net/public/' + album.thumbnailKey,
      }}
    />
  )
}

export default AlbumSongsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
  },
  text: {
    color: colors.white,
  },
  albumSongItemContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  albumSongsImage: {
    width: (15 / 100) * width,
    height: (15 / 100) * width,
    borderRadius: 10,
  },
  albumSongsItemTextContainer: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  moreOptions: {
    width: (15 / 100) * width,
    height: (15 / 100) * width,
    marginLeft: 10,
  },
})
