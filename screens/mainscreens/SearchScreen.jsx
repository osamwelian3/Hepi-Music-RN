import {
  ActivityIndicator,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors} from '../../utils/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DataStore, Predicates } from 'aws-amplify/datastore'
import { Song } from '../../models'
import { generateClient } from 'aws-amplify/api'
import * as queries from '../../graphql/queries'

const {width, height} = Dimensions.get('window')
const client = generateClient()

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [songSearchResults, setSongSearchresults] = useState([]);
  const [albumSearchResults, setAlbumSearchresults] = useState([]);
  const [artistSearchResults, setArtistSearchresults] = useState([]);
  const [genreSearchResults, setGenreSearchresults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchSongs = async() => {
    // const songs = await DataStore.query(Song, (p) => p.name.toLowerCase().contains(searchText.toLowerCase()))
    // console.log(songs.length)
    // songs.forEach((song => console.log(song.name)))
    const variables = {
      filter: {
        or: [
          { name: { contains: searchText } },
          { name: { contains: searchText.toLowerCase() } }, 
          { name: { contains: searchText.toUpperCase() } },
          { name: { contains: searchText.substring(0, 1).toUpperCase() + searchText.substring(1) } },
          { name: { contains: searchText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') } },
        ]
      }
    };
    
    const songs = await client.graphql({
      query: queries.listSongs,
      variables: variables
    });

    console.log(songs)
    songs.data.listSongs.items.forEach(element => {
      console.log(element.name)
    });
    setLoading(false)
  }

  useEffect(()=>{
    if (searchText.length > 2) {
      setLoading(true)
      console.log(searchText)
      searchSongs()
    } else {
      setLoading(false)
    }
  }, [searchText])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={false} style={styles.container}>
        <KeyboardAvoidingView accessible={false} style={styles.container}>
          <View style={styles.searchBarContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.canGoBack()
                  ? navigation.goBack()
                  : navigation.navigate('HomeScreen')
              }>
              <Ionicons
                name='chevron-back-outline'
                size={30}
                color={colors.gray}
              />
            </TouchableOpacity>
            <TextInput
              placeholder='Search'
              mode='outlined'
              autoCapitalize='none'
              autoCorrect={false}
              enterKeyHint='search'
              returnKeyLabel='SEARCH'
              returnKeyType='search'
              textContentType='none'
              cursorColor={colors.white}
              inputMode='text'
              style={styles.searchTextInput}
              onChangeText={newText => setSearchText(newText)}
              placeholderTextColor={colors.white}
            />
            {
              loading &&
            <ActivityIndicator size={'large'} color={colors.primaryColor} style={{marginHorizontal: 10}} />
            }
          </View>

          {
            searchText.length < 1 && 
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: (80 / 100)*height}}>
              <Ionicons name='search' size={180} color={colors.gray} />
              <Text style={styles.text}>Search title, album, artist, genre or playlist.</Text>
            </View>
          }

          {
            searchText.length > 0 &&
            <View>

            </View>
          }
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
  },
  text: {
    color: colors.white,
  },
  searchTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
    color: colors.white,
    flex: 1,
    marginRight: 10,
    fontSize: 18,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
