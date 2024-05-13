import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { BounceIn, SlideInDown, SlideInUp } from 'react-native-reanimated';

const NetInfoComp = () => {
  const [hasInternet, setHasInternet] = useState(true);
  const [restored, setRestored] = useState(null)
  useFocusEffect(
    useCallback(() => {
      const netInfoSubscription = NetInfo.addEventListener((state) => {
        console.log("Internet State: "+JSON.stringify(state))
        setHasInternet(state.isConnected && state.isInternetReachable);
      });
      return () => {
        netInfoSubscription();
      };
    }, [])
  );
  // return !hasInternet ? (
  //   <Animated.View entering={BounceIn.delay(400)} style={styles.container}>
  //     <Text style={styles.text1}>No Internet</Text>
  //     <Text numberOfLines={1} style={styles.text2}>
  //       Please check your internet connection.
  //     </Text>
  //   </Animated.View>
  // ) : null;
  return !hasInternet ? (
    <Animated.Text entering={SlideInUp.delay(400).duration(3000)} style={{color: 'red', backgroundColor: 'white', textAlign: 'center'}}>No Internet Connection</Animated.Text>
  ) : () => {
    setRestored(() => (
      <Text style={{color: 'green', backgroundColor: 'white', textAlign: 'center'}}>Internet Connection Restored</Text>
    ))
    setTimeout(() => {
      setRestored(null);
    }, 2000);
    return restored;
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 15,
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS == 'android' ? StatusBar.currentHeight : 60,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderStartWidth: 5,
    borderColor: 'red',
  },
  text1: { textAlign: 'left', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  text2: { textAlign: 'left', fontWeight: '500' },
});

export default NetInfoComp;