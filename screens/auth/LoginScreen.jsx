import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors} from '../../utils/Colors'
import SocialButtons from '../../utils/SocialButtons'
import {signIn} from 'aws-amplify/auth'

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  console.log('Login Screen Called')

  const signin = async ({username, password}) => {
    setLoading(true)
    try {
      const {isSignedIn, nextStep} = await signIn({username, password})
      if (isSignedIn) {
        console.log(isSignedIn)
        navigation.replace('MasterPlayerScreen')
      }
      console.log(nextStep)
      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        navigation.navigate('ConfirmSignUpScreen', {username: username})
      }
    } catch (error) {
      setLoading(false)
      ToastAndroid.showWithGravity(
        'Error: ' + error,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      )
      console.log('error signing in', error)
    }
  }

  const enableLoginButton = () => {
    if (username.length > 3 && password.length > 6) {
      setDisabled(false)
      console.log('Username', username)
      console.log('Password', password)
    } else {
      setDisabled(true)
    }
  }

  useEffect(() => {
    enableLoginButton()
  }, [username, password])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={styles.header}>Hepi Music Login</Text>
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
      <View style={styles.loginButtonContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} color={colors.primaryColor} />
        ) : (
          <Button
            title='Login'
            disabled={disabled}
            color={colors.primaryColor}
            onPress={() => signin({username, password})}
          />
        )}
      </View>
      <View style={styles.registerTextContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
          <Text style={styles.linkText}>&nbsp;Register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <SocialButtons
          message={'Login Using'}
          nextScreen={'MasterPlayerScreen'}
          navigation={navigation}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

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
  loginButtonContainer: {
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
