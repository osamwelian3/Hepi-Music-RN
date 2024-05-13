//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React, {useState, useEffect} from 'react'

//import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import {colors} from './Colors'
import {getCurrentUser, signInWithRedirect} from 'aws-amplify/auth'
import {Hub} from '@aws-amplify/core'

const SocialButtons = ({message, navigation, nextScreen}) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [customState, setCustomState] = useState(null)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [loadingFacebook, setLoadingFacebook] = useState(false)

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({payload}) => {
      switch (payload.event) {
        case 'signInWithRedirect':
          getUser()
          console.log(user)
          setLoadingGoogle(false)
          setLoadingFacebook(false)
          break
        case 'signInWithRedirect_failure':
          setLoadingGoogle(false)
          setLoadingFacebook(false)
          setError('An error has occurred during the OAuth flow.')
          console.log(JSON.stringify(payload))
          ToastAndroid.showWithGravity(
            'An error occured while trying to sign you in.',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          )
          break
        case 'customOAuthState':
          setCustomState(payload.data)
          console.log(payload.data)
          navigation.replace(payload.data + '')
          break
      }
    })

    getUser()

    return unsubscribe
  }, [])

  const getUser = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      console.error(error)
      console.log('Not signed in')
    }
  }

  return (
    <View style={styles.container}>
      {loadingGoogle ? (
        <ActivityIndicator size={'large'} color={colors.primaryColor} style={{margin: 25}} />
      ) : (
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => {
            setLoadingGoogle(true)
            signInWithRedirect({provider: 'Google', customState: nextScreen})
          }}>
          <Ionicons name='logo-google' size={30} color={colors.white} />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>{message} Google</Text>
        </TouchableOpacity>
      )}
      {loadingFacebook ? (
        <ActivityIndicator size={'large'} color={colors.primaryColor} style={{margin: 25}} />
      ) : (
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => {
            setLoadingFacebook(true)
            signInWithRedirect({provider: 'Facebook', customState: nextScreen})
          }}>
          <Ionicons name='logo-facebook' size={30} color={colors.white} />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>{message} Facebook</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 5,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
})

export default SocialButtons
