import * as React from 'react';
import {View, FlatList, StyleSheet, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../src/store/usersReducer';
import UserCard from '../components/UserCard';

const UserViewScreen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(fetchUsers()), []);
  const usersCards = useSelector(state => state.usersReducer.users);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={usersCards}
          renderItem={item => <UserCard data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* <View>
        <TouchableOpacity>
          <FontAwesome name="plus" size={16} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="plus" size={16} color={colors.white} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserViewScreen;
