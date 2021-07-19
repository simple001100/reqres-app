import * as React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: props.data.avatar}} />
      <View style={styles.infoContainer}>
        <Text>{props.data.first_name}</Text>
        <Text>{props.data.last_name}</Text>
        <Text>{props.data.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'column'
  }
});

export default UserCard;
