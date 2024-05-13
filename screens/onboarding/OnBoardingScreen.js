import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  ToastAndroid,
} from 'react-native'
import React, {useRef, useEffect} from 'react'
import {colors} from '../../utils/Colors'
import {boards} from '../../utils/OnBoardingData'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCurrentUser } from 'aws-amplify/auth';
import FastImage from 'react-native-fast-image'

const {width, height} = Dimensions.get('window')

const Item = ({item, onPress, onNext, onDone}) => (
  <View style={styles.renderItemContainer}>
    {item.id < 1 && (
      <TouchableOpacity style={styles.skipIconContainer} onPress={onPress}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons
          name='keyboard-double-arrow-right'
          color={colors.white}
          size={30}
        />
      </TouchableOpacity>
    )}
    <View style={styles.innerRenderItemContainer}>
      <FastImage source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.nextButtonContainer}>
        {item.id < 2 ? (
          <Button title='Next' color={colors.primaryColor} onPress={onNext} />
        ) : (
          <Button title='Got It' color={colors.primaryColor} onPress={onDone} />
        )}
      </View>
    </View>
  </View>
)

const OnBoardingScreen = ({ navigation }) => {
  const boardsListRef = useRef()

  useEffect(() => {
    const storeData = async () => {
      await AsyncStorage.getItem('Boarded').then((data) => {
        if (data === 'true') {
          navigation.replace('HomeScreen')
        }
      }).catch((err)=> {
        ToastAndroid.showWithGravity("Error: "+err, ToastAndroid.LONG, ToastAndroid.BOTTOM);
      })
    }
    storeData()
  }, [])

  console.log('OnBoarding Screen Called')

  const currentAuthenticatedUser = async () => {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
      navigation.replace('HomeScreen');
    } catch (err) {
      console.log("OnBoardingScreen Error: ", err);
      navigation.replace('LoginScreen');
    }
  }

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => boardsListRef.current.scrollToIndex({index: 2})}
        onNext={() => boardsListRef.current.scrollToIndex({index: (item.id+1)})}
        onDone={async () => {
          await AsyncStorage.setItem('Boarded', 'true')
          .catch((err)=> {
            ToastAndroid.showWithGravity("Error: "+err, ToastAndroid.LONG, ToastAndroid.BOTTOM);
          })
          await currentAuthenticatedUser();
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={() => {}}
        ref={boardsListRef}
      />
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
  },
  text: {
    color: colors.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  renderItemContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRenderItemContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: (80 / 100) * width,
    height: (70 / 100) * height,
    marginBottom: 20,
    borderRadius: 40
  },
  skipIconContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: colors.white,
  },
  nextButtonContainer: {
    marginVertical: 15,
    width: (20/100)*width,
    borderRadius: 40,
    borderCurve: 40
  },
})
