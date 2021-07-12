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

const SignUp = ({navigation}) => {
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
            placeholder="Password"></TextInput>

          <Text style={styles.titles}>Repeat your password</Text>
          <TextInput
            style={styles.passInput}
            placeholder="Password"></TextInput>

          <View style="styles.signupContainer">
            <TouchableOpacity
              style={styles.signup}
              onPress={() => navigation.navigate('SignIn')}>
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
    color: '#5C2FE8',
    fontSize: 18,
  },
  loginInput: {
    height: 50,
    borderRadius: 6,
    marginBottom: 5,
    fontSize: 18,
    borderWidth: 0.8,
    borderColor: '#5C2FE8',
  },
  passInput: {
    borderWidth: 0.8,
    borderColor: '#5C2FE8',
    borderRadius: 6,
    height: 50,
    marginBottom: 10,
    fontSize: 18,
  },
  signup: {
    borderColor: '#5C2FE8',
    backgroundColor: '#FAFAFC',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5C2FE8',
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

export default SignUp;
