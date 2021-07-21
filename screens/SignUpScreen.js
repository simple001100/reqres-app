import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {registerUser} from '../src/store/clientReducer';
import {showMessage, hideMessage} from 'react-native-flash-message';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(registerUser({email, password}));
    useSelector(state => state.clientReducer.state)
      ? () => navigation.navigate('SignIn')
      : () => {
          showMessage({
            message: 'Simple message',
            type: 'info',
          });
        };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.titles}>Login</Text>
          <TextInput style={styles.loginInput} placeholder="Email"></TextInput>

          <Text style={styles.titles}>Password</Text>
          <TextInput
            style={styles.passInput}
            placeholder="Password"
            onChange={text => setEmail(text)}></TextInput>

          <Text style={styles.titles}>Repeat your password</Text>
          <TextInput
            style={styles.passInput}
            placeholder="Password"
            onChange={text => setPassword(text)}></TextInput>

          <View style="styles.signupContainer">
            <TouchableOpacity style={styles.signup} onPress={signUp()}>
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#957DC8',
  },
  contentContainer: {
    height: '60%',
    backgroundColor: '#FAFAFC',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  titles: {
    color: '#5359D1',
    fontSize: 18,
  },
  loginInput: {
    height: 50,
    borderRadius: 6,
    marginBottom: 5,
    fontSize: 18,
    borderWidth: 0.8,
    borderColor: '#5359D1',
  },
  passInput: {
    borderWidth: 0.8,
    borderColor: '#5359D1',
    borderRadius: 6,
    height: 50,
    marginBottom: 10,
    fontSize: 18,
  },
  signup: {
    borderColor: '#5359D1',
    backgroundColor: '#FAFAFC',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5359D1',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FAFAFC',
  },
  signinContainer: {
    alignItems: 'center',
  },
});

export default SignUpScreen;
