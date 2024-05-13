import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors} from '../../utils/Colors'
import SocialButtons from '../../utils/SocialButtons'
import {signUp} from 'aws-amplify/auth'

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const cleanPhone = phone_number => {
    // Remove all non-digit characters from the phone number
    const cleanedNumber = phone_number.replace(/\D/g, '')

    // Check if the number starts with '0' (for country codes)
    if (cleanedNumber.startsWith('0')) {
      // Remove leading '0' and prepend the country code '254' for Kenya
      return '+254' + cleanedNumber.substring(1)
    } else {
      // Otherwise, return the cleaned number as it is
      return '+' + cleanedNumber
    }
  }

  const handleSignUp = async ({username, password, email, phone}) => {
    setLoading(true)
    let phone_number = cleanPhone(phone)
    console.log(phone_number)
    try {
      const {isSignUpComplete, userId, nextStep} = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            phone_number, // E.164 number convention
          },
          // optional
          autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        },
      })

      console.log(nextStep.signUpStep)

      console.log(userId)
      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        navigation.navigate('ConfirmSignUpScreen', {username: username})
      }
    } catch (error) {
      setLoading(false)
      console.log('error signing up:', error)
      ToastAndroid.showWithGravity(
        'ERR: ' + error,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      )
    }
  }

  const enableSignupButton = () => {
    if (
      username.length > 3 &&
      password.length > 7 &&
      email.length > 3 &&
      phone.length > 9
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  useEffect(() => {
    enableSignupButton()
  }, [username, password])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={styles.header}>Hepi Music Signup</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Username'
          mode='outlined'
          autoCapitalize='none'
          autoCorrect={false}
          enterKeyHint='next'
          returnKeyLabel='NEXT'
          returnKeyType='next'
          textContentType='username'
          cursorColor={colors.white}
          inputMode='text'
          style={styles.textInput}
          onChangeText={newText => setUsername(newText)}
          placeholderTextColor={colors.white}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          mode='outlined'
          autoCapitalize='none'
          autoCorrect={false}
          enterKeyHint='next'
          returnKeyLabel='NEXT'
          returnKeyType='next'
          textContentType='emailAddress'
          keyboardType='email-address'
          cursorColor={colors.white}
          inputMode='text'
          style={styles.textInput}
          onChangeText={newText => setEmail(newText)}
          placeholderTextColor={colors.white}
        />
      </View>
      {console.log(password)}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Phone'
          mode='outlined'
          autoCapitalize='none'
          autoCorrect={false}
          enterKeyHint='next'
          returnKeyLabel='NEXT'
          returnKeyType='next'
          textContentType='telephoneNumber'
          keyboardType='phone-pad'
          cursorColor={colors.white}
          inputMode='text'
          style={styles.textInput}
          onChangeText={newText => setPhone(newText)}
          placeholderTextColor={colors.white}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          mode='outlined'
          autoCapitalize='none'
          autoCorrect={false}
          enterKeyHint='done'
          returnKeyLabel='DONE'
          returnKeyType='done'
          textContentType='password'
          cursorColor={colors.white}
          inputMode='text'
          style={styles.textInput}
          onChangeText={newText => setPassword(newText)}
          placeholderTextColor={colors.white}
        />
      </View>
      <View style={styles.SignupButtonContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} color={colors.primaryColor} />
        ) : (
          <Button
            title='Signup'
            disabled={disabled}
            color={colors.primaryColor}
            onPress={() => handleSignUp({username, password, email, phone})}
          />
        )}
      </View>
      <View style={styles.registerTextContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.replace('LoginScreen')
          }}>
          <Text style={styles.linkText}>&nbsp;Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <SocialButtons
          message={'Sign-up with'}
          nextScreen={'MasterPlayerScreen'}
          navigation={navigation}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorDark,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
  linkText: {
    color: colors.primaryColor,
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
  header: {
    color: colors.primaryColor,
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'center',
  },
  SignupButtonContainer: {
    marginVertical: 15,
    marginHorizontal: 35,
  },
  registerTextContainer: {
    flex: 0,
    flexDirection: 'row',
    marginHorizontal: 35,
    marginVertical: 1,
    justifyContent: 'center',
  },
})
