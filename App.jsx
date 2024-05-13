import {View, Text, StatusBar, Linking, Image, PermissionsAndroid, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen'
import MasterPlayerScreen from './screens/MasterPlayerScreen'
import {colors} from './utils/Colors'
import LoginScreen from './screens/auth/LoginScreen'
import SignupScreen from './screens/auth/SignupScreen'
import ConfirmSignUpScreen from './screens/auth/ConfirmSignUpScreen'
import OnBoardingScreen from './screens/onboarding/OnBoardingScreen'
import {Amplify} from 'aws-amplify'

import awsExports from './aws-exports'
import BigPlayer from './screens/BigPlayer'
import RNFS from 'react-native-fs'
import imageCacheHoc from './react-native-image-cache-hoc'
import NetInfoComp from './utils/NetInfoComp'
import MyDatastore from './utils/MyDatastore'

const serviceAccount = require('./assets/storageurlicd2795e29b08.json')

const SCOPES = ['https://www.googleapis.com/auth/firebase.messaging']

const requestPermissions = async () => {
  try {
    const grantedES = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Hepi Music Read External Storage Permission',
        message:
          'Hepi Music needs to read files on your device storage.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (grantedES === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use read external storage');
    } else {
      console.log('External storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
var path = RNFS.DocumentDirectoryPath + '/test.txt';

// write the file
RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!');
  })
  .catch((err) => {
    console.log(err.message);
  });

RNFS.readDir(RNFS.DocumentDirectoryPath)
.then((result) => {
  console.log("GOT RESULT: "+JSON.stringify(result))
})
const CacheableImage = imageCacheHoc(Image, {
  
});
CacheableImage.cacheFile('https://dn1i8z7909ivj.cloudfront.net/public/images/Adogo%20SY%20FT%20Virusi%20Mbaya-%20BLOCK.jpeg')
  .then( localFileInfo => {
    console.log(localFileInfo);
    // The https://i.redd.it/17ymhqwgbswz.jpg remote file is now saved to local fs. 
    // Since permanent was not set, this file is subject to cache pruning.
  });

Amplify.configure(awsExports)

const Stack = createNativeStackNavigator()

const App = () => {
  requestPermissions()
  const originalLink = async () => console.log('Original Link: ' + (await Linking.getInitialURL()))
  useEffect(() => {
    originalLink()
    console.log("Initial count: "+MyDatastore.getCount());
    MyDatastore.updateCount();
    console.log("Updated count: "+MyDatastore.getCount());

    return () => {
      MyDatastore.unsubscribeAll()
    }
  }, [])

  const config = {
    screens: {
      MasterPlayerScreen: {
        initialRouteName: 'HomeScreen',
        path: '',
        screens: {
          AlbumsScreen: {
            path: 'albums',
          },
        },
      },
      NoMatch: '*',
    },
  }

  const linking = {
    prefixes: ['https://hepimusic.com'],
    config,
  }

  return (
    <NavigationContainer linking={linking}>
      <StatusBar backgroundColor={colors.primaryColorDark} />
      <NetInfoComp />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='SplashScreen'>
        <Stack.Group>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignupScreen' component={SignupScreen} />
          <Stack.Screen
            name='ConfirmSignUpScreen'
            component={ConfirmSignUpScreen}
          />
          <Stack.Screen
            name='MasterPlayerScreen'
            component={MasterPlayerScreen}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name='BigPlayer' component={BigPlayer} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
