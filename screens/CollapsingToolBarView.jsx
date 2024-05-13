import React, {useState, useCallback, useMemo, useRef} from 'react'
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {colors} from '../utils/Colors'
import FastImage from 'react-native-fast-image'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import CustomBackdrop from '../utils/CustomBackdrop'

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

const {width: SCREEN_WIDTH} = Dimensions.get('screen')

const CollapsingToolBarView = ({setAttributes, attributes, params}) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  // ref
  const bottomSheetModalRef = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '25%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index)
  }, [])

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  })
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })
  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  const headerTitle = params.headerTitle
  const headerImage = params.headerImage

  //   if (attributes == null) {
  //     console.log('Setting attributes')
  //     setAttributes({
  //       contentContainerStyle: styles.scrollContainer,
  //       onScroll: Animated.event([
  //         {
  //           nativeEvent: {
  //             contentOffset: {
  //               y: scrollY,
  //             },
  //           },
  //         },
  //       ]),
  //       scrollEventThrottle: 16,
  //     })
  //   }
  // renders
  const renderBackdrop = useCallback(
    props => (
      <CustomBackdrop
        {...props}
        onPress={() => {
          handleCloseModalPress()
        }}
      />
    ),
    [],
  )

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          params.album.name +
          ' Album on Hepi Music. \n' +
          '\nhttps://hepimusic.com/albums?a=' +
          params.album.key,
        url: 'https://hepimusic.com/albums?a=' + params.album.key,
        title: params.album.name,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <TouchableOpacity style={{top: 15, left: 10, position: 'absolute', padding: 10, zIndex: 999999}} onPress={() => 
        params.navigation.canGoBack()
              ? params.navigation.goBack()
              : params.navigation.replace('HomeScreen')}>
          <Ionicons name='arrow-back' size={30} color={colors.primaryColor} />
        </TouchableOpacity>
        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: colors.white,
            marginTop: 28,
            opacity: headerTitleOpacity,
          }}>
          {headerTitle}
        </Animated.Text>

        <Animated.View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            opacity: heroTitleOpacity,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <FastImage
              source={{uri: headerImage}}
              style={{
                width: (40 / 100) * SCREEN_WIDTH,
                height: (40 / 100) * SCREEN_WIDTH,
                borderRadius: 20,
              }}
              defaultSource={require('../assets/images/album_art.jpeg')}
            />
            <Text style={{color: colors.white, marginVertical: 10}}>
              {params.numberOfSongs}{' '}
              {params.numberOfSongs == 1 ? 'song' : 'songs'}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              overflow: 'hidden',
              width: (45 / 100) * SCREEN_WIDTH,
              height: (70 / 100) * SCREEN_WIDTH,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 22,
                color: colors.white,
                marginTop: 35,
              }}
              numberOfLines={1}
              ellipsizeMode='tail'>
              {headerTitle}
            </Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 18,
                color: colors.white,
              }}
              numberOfLines={1}
              ellipsizeMode='tail'>
              {headerTitle}
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => handlePresentModalPress()}>
                <Ionicons
                  name='ellipsis-horizontal-circle-sharp'
                  size={30}
                  color={colors.primaryColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            opacity: heroTitleOpacity,
          }}>
          {console.log('Header Image ' + headerImage)}
        </Animated.View>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        nestedScrollEnabled={true}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        {params.content}
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.bottomSheetButtons}
            onPress={() => {
              params.playAll()
              handleCloseModalPress()
            }}>
            <Ionicons name='play' size={30} color={colors.primaryColorDark} />
            <Text style={styles.bottomSheetText}>Play All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomSheetButtons}
            onPress={() => {
              onShare()
              handleCloseModalPress()
            }}>
            <Ionicons name='share' size={30} color={colors.primaryColorDark} />
            <Text style={styles.bottomSheetText}>Share Album</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  )
}

export default CollapsingToolBarView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT + 15,
  },
  header: {
    backgroundColor: colors.black,
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  title: {
    marginVertical: 16,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomSheetButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: colors.primaryColor,
    borderBottomColor: colors.primaryColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 10,
    width: SCREEN_WIDTH,
  },
  bottomSheetText: {
    color: colors.primaryColorDark,
    fontWeight: 'bold',
  },
})
