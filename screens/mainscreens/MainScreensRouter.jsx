import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import AlbumsScreen from './AlbumsScreen'
import PlaylistsScreen from './PlaylistsScreen'
import AlbumSongsScreen from './detailscreens/AlbumSongsScreen'

const Stack = createNativeStackNavigator()

const MainScreensRouter = ({setActiveScreen}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName='HomeScreen'
      screenListeners={{
        state: (e) => {
          // Do something with the state
          setActiveScreen(e.data.state.routes[e.data.state.index].name+"");
        },
      }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='AlbumsScreen' component={AlbumsScreen} />
      <Stack.Screen name='PlaylistsScreen' component={PlaylistsScreen} />
      <Stack.Screen name='AlbumSongsScreen' component={AlbumSongsScreen} />
    </Stack.Navigator>
  )
}

export default MainScreensRouter

const styles = StyleSheet.create({})
