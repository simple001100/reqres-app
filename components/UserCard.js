import * as React from 'react';
import {useSelector} from 'react-redux';

import {View, Image, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  const profileId = useSelector(state => state.profileReducer.id);

  const isYou = (itemId, profileId) => {
    return itemId === profileId ? 'your profile' : null;
  };

  return (
    <View style={{padding: 5}}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: props.data.avatar}} />

        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{props.data.first_name} </Text>
            <Text style={styles.name}>{props.data.last_name}</Text>
            <Text style={styles.description}>
              {isYou(props.data.id, profileId)}
            </Text>
          </View>

          <Text style={styles.email}>{props.data.email}</Text>
        </View>
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
    width: 375,
    height: 120,
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
    paddingLeft: 10,
  },
  name: {
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#090919',
  },
  email: {
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 18,
    color: 'blue',
  },
  description: {
    marginLeft: 15,
    paddingTop: 2,
    fontSize: 16,
    color: '#0F75A8',
  },
});

export default UserCard;
