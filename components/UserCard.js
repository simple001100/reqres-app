import * as React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Image src={{uri: props.data.avatar}} />
      <Text>{props.data.first_name}</Text>
      <Text>{props.data.last_name}</Text>
      <Text>{props.data.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserCard;
