import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { colors } from "../utils/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCurrentUser } from 'aws-amplify/auth';

const SplashScreen = ({ navigation }) => {

  const currentAuthenticatedUser = async () => {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
      navigation.replace('MasterPlayerScreen');
    } catch (err) {
      console.log("SplashScreen Error: ", err);
      try {
        await AsyncStorage.getItem('CurrentUser').then((value) => {
          if (value != null) {
            const {username, userId, signInDetails} = JSON.parse(value);
            console.log(`The username: ${username}`);
            console.log(`The userId: ${userId}`);
            console.log(`The signInDetails: ${signInDetails}`);
            navigation.replace('MasterPlayerScreen');
          } else {
            navigation.replace('LoginScreen');
          }
        })
      } catch (error) {
        console.log(error)
        navigation.replace('LoginScreen');
      }
      
    }
  }

  const hasUserOnBoarded = async () => {
    let dataBool = null;
    await AsyncStorage.getItem('Boarded').then(async (data) => {
      console.log(data)
      if (data === 'true') {
        dataBool = true
        await currentAuthenticatedUser()
      } else {
        navigation.replace('OnBoardingScreen')
      }
    }).catch((err)=> {
      ToastAndroid.showWithGravity("Error: "+err, ToastAndroid.LONG, ToastAndroid.BOTTOM);
      navigation.replace('OnBoardingScreen')
    })
  }

  setTimeout(async () => {
    await hasUserOnBoarded()
  }, 1000);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/ic_launcher_web_theme.png')} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColorDark
    },
    image: {
        width: 350,
        height: 350
    }
})