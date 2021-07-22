import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../src/store/profileReducer';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(getProfile(), []));
  const personalData = useSelector(state => state.profileReducer.personalData);

  return (
    <View style={StyleSheet.container}>
      <Image source={props.avatar} style={styles.avatar} />

      <View style={styles.dataContainer}>
        <Text style={styles.contentName}>Personal data</Text>

        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.info}>Name:</Text>
            <Text style={styles.name}>{personalData.firstName}</Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.info}>Surname:</Text>
            <Text style={styles.name}>{personalData.lastName}</Text>
          </View>

          <Text style={styles.email}>{personalData.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  avatar: {
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  dataContainer: {
    backgroundColor: '#B4CFEA',
    borderRadius: 30,
    height: '60%',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  contentName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#110C66',
    marginTop: 20,
  },
  infoContainer: {
    paddingTop: 10,
  },
  nameContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#110C66',
    marginTop: 20,
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#110C66',
    marginTop: 20,
  },
  email: {},
});

export default ProfileScreen;
