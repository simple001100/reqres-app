import * as React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: props.data.avatar}} />

      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.data.first_name} </Text>
          <Text style={styles.name}>{props.data.last_name}</Text>
        </View>

        <Text style={styles.email}>{props.data.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#B4CFEA',
    paddingHorizontal: 10,
    paddingTop: 10,
    width: 380,
    height: 120
  },
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'column',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  name: {
    fontSize: 20,
    color: '#090919',
  },
  email: {
    fontSize: 20,
    color: '#090919',
  }
});

export default UserCard;
