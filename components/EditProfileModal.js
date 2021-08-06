import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {SmallButton} from './SmallButton';
import {Input} from './Input';

import {changePersonalData} from '../src/store/profileReducer';

import close from '../assets/close.png';
import aprove from '../assets/aprove.png';
import {useDispatch} from 'react-redux';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const EditProfileModal = props => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: props.firstName,
      lastName: props.lastName,
    },
  });

  const onSubmitProfileChange = data => {
    dispatch(changePersonalData(data));
    props.setVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.conatiner}>
        <SmallButton
          style={styles.buttonClose}
          icon={close}
          action={() => props.setVisible(false)}
        />
        <SmallButton
          style={styles.buttonAprove}
          icon={aprove}
          action={handleSubmit(onSubmitProfileChange)}
        />

        <Image
          source={{
            uri: props.avatar,
          }}
          style={styles.avatar}
        />

        <ScrollView style={styles.inputsContainer}>
          <Text style={styles.titles}>First name</Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                onChange={onChange}
                value={value}
                name="firstName"
                secureEntry={false}
                error={errors.firstName}
              />
            )}
            name="firstName"
          />
          <Text style={styles.error}>{errors.firstName?.message}</Text>

          <Text style={styles.titles}>Last name</Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                onChange={onChange}
                value={value}
                name="lastName"
                secureEntry={false}
                error={errors.firstName}
              />
            )}
            name="lastName"
          />
          <Text style={styles.error}>{errors.lastName?.message}</Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
  },
  buttonClose: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  buttonAprove: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  avatar: {
    marginTop: 90,
    width: 200,
    height: 200,
    borderRadius: 120,
  },
  inputsContainer: {
    marginTop: 30,
    width: 200,
  },
  titles: {
    color: '#5359D1',
    fontSize: 18,
  },
  error: {
    marginBottom: 10,
    color: 'red',
    fontSize: 12,
  },
});

export default EditProfileModal;
