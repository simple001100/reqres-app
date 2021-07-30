import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {Input} from '../components/Input';
import {Button} from '../components/Button';

import {signinUser} from '../src/store/client/signinReducer';

const schema = yup.object().shape({
  login: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(4, 'Password must be between 4 and 8 characters')
    .max(16, 'Password must be between 4 and 8 characters')
    .required('Password is required'),
});

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmitSignIn = data => {
    dispatch(signinUser(data));
  };

  const onSubmitSignUp = () => {
    navigation.navigate('SignUp');
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.titles}>Login</Text>

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <Input onChange={onChange} value={value} name="Email" />
            )}
            name="login"
          />
          <Text style={styles.error}>{errors.login?.message}</Text>

          <Text style={styles.titles}>Password</Text>

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <Input onChange={onChange} value={value} name="Password" secureEntry={true} />
            )}
            name="password"
          />
          <Text style={styles.error}>{errors.password?.message}</Text>

          <View style="styles.buttonContainer">
            <Button
              name="Sign in"
              action={handleSubmit(onSubmitSignIn)}
              backgroundColor="#5359D1"
              textColor="#FAFAFC"
            />
          </View>

          <View style="styles.buttonContainer">
            <Button
              name="Sign up"
              action={onSubmitSignUp}
              backgroundColor="#FAFAFC"
              textColor="#5359D1"
            />
          </View>
        </KeyboardAvoidingView>
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
  buttonContainer: {
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default SignInScreen;
