import * as React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../src/store/usersReducer';
import UserCard from '../components/UserCard';

const UsersViewScreen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(fetchUsers({number: 1})), []);
  const usersCards = useSelector(state => state.usersReducer.users);
  

  return (
    <View style={styles.container}>
      <FlatList
        data={usersCards}
        renderItem={({item}) => <UserCard data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 70,
    paddingHorizontal: 10,
    width: 400,
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

export default UsersViewScreen;
