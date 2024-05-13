import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect} from 'react'
import {colors} from '../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNav = ({navigation, activeScreen}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
    })

    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('HomeScreen')}>
        <MaterialCommunityIcons
          name='music-box-multiple'
          size={30}
          color={activeScreen === 'HomeScreen' ? colors.primaryColor : colors.white}
        />
        <Text style={activeScreen === 'HomeScreen' ? styles.activeText : styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('SearchScreen')}>
        <MaterialIcons name='search' size={30} color={activeScreen === 'SearchScreen' ? colors.primaryColor : colors.white} />
        <Text style={activeScreen === 'SearchScreen' ? styles.activeText : styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('AlbumsScreen')}>
        <Ionicons name='albums' size={30} color={activeScreen === 'AlbumsScreen' ? colors.primaryColor : colors.white} />
        <Text style={activeScreen === 'AlbumsScreen' ? styles.activeText : styles.text}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('PlaylistsScreen')}>
        <MaterialCommunityIcons
          name='playlist-play'
          size={30}
          color={activeScreen === 'PlaylistsScreen' ? colors.primaryColor : colors.white}
        />
        <Text style={activeScreen === 'PlaylistsScreen' ? styles.activeText : styles.text}>Playlists</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
  activeText: {
    color: colors.primaryColor,
  },
})
