import {
    KeyboardAvoidingView,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ToastAndroid,
    TouchableOpacity,
  } from 'react-native'
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import React, {useState, useEffect} from 'react'
  import {colors} from '../../utils/Colors'
  import {confirmSignUp, autoSignIn, resendSignUp } from 'aws-amplify/auth'
  
  const ConfirmSignUpScreen = ({navigation, route}) => {
    const [confirmationCode, setConfirmationCode] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [username, setUsername] = useState('')
    const [showResend, setShowResend] = useState(false)
    const [resendTimeout, setResendTimeout] = useState(30000)
    const [resendTime, setResendTime] = useState(30000)
  
    useEffect(() => {
      // const { username } = route.params;
      // setUsername(username);
      // console.log(username);
      enableVerifyButton()
    }, [confirmationCode])
  
    useEffect(() => {
      // Update the countdown timer every second
      const intervalId = setInterval(() => {
        setResendTime(prevTime => prevTime - 1000)
      }, 1000)
  
      // Clear the interval when component unmounts or countdown finishes
      return () => clearInterval(intervalId)
    }, [])
  
    useEffect(() => {
      // Show resend button when countdown finishes
      if (resendTime <= 0) {
        setShowResend(true)
      }
    }, [resendTime])

    const resendSignUpCode = async () => {
        await resendSignUp(username)
        .then(() => console.log('Confirmation code resent successfully'))
        .catch(err => {
          if (! err.message) {
            console.log('Error requesting new confirmation code: ', err)
            Alert.alert('Error requesting new confirmation code: ', err)
          } else {
            console.log('Error requesting new confirmation code: ', err.message)
            Alert.alert('Error requesting new confirmation code: ', err.message)
          }
        })
      }
  
    const handleAutoSignIn = async () => {
      try {
        const signInOutput = await autoSignIn()
        // handle sign-in steps
        console.log(signInOutput)
        if (signInOutput.isSignedIn) {
          navigation.replace('MasterPlayerScreen')
        } else {
          ToastAndroid.showWithGravity(
            'SignUp Success. You can now Login.',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          )
          setTimeout(() => {
            navigation.replace('LoginScreen')
          }, 2000)
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    const handleSignUpConfirmation = async ({username, confirmationCode}) => {
      console.log(confirmationCode)
      try {
        const {isSignUpComplete, nextStep} = await confirmSignUp({
          username,
          confirmationCode,
        })
        console.log(nextStep)
        if (isSignUpComplete) {
          await handleAutoSignIn()
        }
      } catch (error) {
        console.log('error confirming sign up', error)
      }
    }
  
    const enableVerifyButton = () => {
      setDisabled(confirmationCode.length < 4)
    }
  
    const convertMillisecondsToTime = milliseconds => {
      // Convert milliseconds to seconds
      let totalSeconds = Math.floor(milliseconds / 1000)
  
      // Calculate hours, minutes, and seconds
      const hours = Math.floor(totalSeconds / 3600)
      totalSeconds %= 3600
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
  
      // Format the time string
      let timeString = ''
      if (hours > 0) {
        timeString += `${String(hours).padStart(2, '0')}:`
      }
      timeString += `${String(minutes).padStart(2, '0')}:${String(
        seconds,
      ).padStart(2, '0')}`
  
      return timeString
    }
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.replace('SignupScreen')
          }>
          <Ionicons
            name='arrow-back-circle-outline'
            size={40}
            color={colors.white}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.header}>Confirm SignUp</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Sign Up Code'
            mode='outlined'
            autoCapitalize='none'
            autoCorrect={false}
            enterKeyHint='done'
            returnKeyLabel='DONE'
            returnKeyType='done'
            textContentType='oneTimeCode'
            cursorColor={colors.white}
            inputMode='text'
            style={styles.textInput}
            onChangeText={newText => setConfirmationCode(newText)}
            placeholderTextColor={colors.white}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <Button
            title='Verify'
            disabled={disabled}
            color={colors.primaryColor}
            onPress={() => handleSignUpConfirmation({username, confirmationCode})}
          />
        </View>
        {/* {!showResend && (
          <View style={styles.registerTextContainer}>
            <Text style={styles.text}>Resend in </Text>
            <Text style={styles.linkText}>
              {convertMillisecondsToTime(resendTime)}
            </Text>
          </View>
        )}
        {showResend && (
          <View style={styles.registerTextContainer}>
            <Text style={styles.text}>Didn't receive any code?</Text>
            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
              <Text style={styles.linkText} onPress={() => resendSignUpCode()}>&nbsp;Resend</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </KeyboardAvoidingView>
    )
  }
  
  export default ConfirmSignUpScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryColorDark,
      justifyContent: 'center',
    },
    header: {
      color: colors.primaryColor,
      fontWeight: '900',
      fontSize: 30,
      textAlign: 'center',
    },
    textInput: {
      color: colors.white,
      backgroundColor: colors.gray,
      alignSelf: 'stretch',
      textAlign: 'center',
    },
    inputContainer: {
      borderLeftWidth: 4,
      borderRightWidth: 4,
      height: 50,
      borderColor: colors.white,
      borderRadius: 5,
      borderWidth: 5,
      margin: 15,
    },
    loginButtonContainer: {
      marginVertical: 15,
      marginHorizontal: 35,
    },
    backIconContainer: {
      position: 'absolute',
      zIndex: 3,
      top: 10,
      left: 10,
    },
    text: {
      color: colors.white,
    },
    linkText: {
      color: colors.primaryColor,
      textAlign: 'center',
    },
    registerTextContainer: {
      flex: 0,
      flexDirection: 'row',
      marginHorizontal: 35,
      marginVertical: 1,
      justifyContent: 'center',
    },
  })
  