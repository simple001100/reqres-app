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
import {signinUser} from '../src/store/clientReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const SignInScreen = ({navigation}) => {
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
          <TextInput style={styles.loginInput} placeholder="Email" />

          <Text style={styles.titles}>Password</Text>
          <TextInput style={styles.passInput} placeholder="Password" />

          <View style="styles.signinContainer">
            <TouchableOpacity style={styles.signin} onPress={() => navigation.navigate('DrawerContent')}>
              <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style="styles.signupContainer">
            <TouchableOpacity style={styles.signup}>
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
  signin: {
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
  signinText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FAFAFC',
  },
  signup: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5359D1',
    backgroundColor: '#FAFAFC',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#5359D1',
  },
  signinContainer: {
    alignItems: 'center',
  },
});

export default SignInScreen;
