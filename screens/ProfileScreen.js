import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileScreen = props => {
  return (
    <View style={StyleSheet.container}>
      <Image
        source={{
          uri: props.avatar,
        }}
        style={styles.avatar}
      />

      <View style={styles.dataContainer}>
        <Text style={styles.contentName}>Personal data</Text>

        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.info}>Name:</Text>
            <Text style={styles.name}>{props.firstName}</Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.info}>Surname:</Text>
            <Text style={styles.name}>{props.lastName}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.info}>Email:</Text>
            <Text style={styles.name}>{props.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  avatar: {
    marginLeft: 30,
    width: 240,
    height: 240,
    borderRadius: 120,
  },
  dataContainer: {
    backgroundColor: '#B4CFEA',
    borderRadius: 30,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#110C66',
  },
  infoContainer: {},
  nameContainer: {
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
});

export default ProfileScreen;
