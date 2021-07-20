import * as React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../src/store/usersReducer';
import UserCard from '../components/UserCard';
import Icon from 'react-native-vector-icons/AntDesign';
import { showMessage, hideMessage } from "react-native-flash-message";

const UserViewScreen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(fetchUsers()), []);
  const usersCards = useSelector(state => state.usersReducer.users);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={usersCards}
          renderItem={({item}) => <UserCard data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.slider}>
        <Icon name="left" size={21} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.slider}>
          <Icon name="right" size={21} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  slider: {
    paddingHorizontal: 10,
  },
});

export default UserViewScreen;
