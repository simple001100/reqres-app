import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchUsers} from '../src/store/usersReducer';

import UserCard from '../components/UserCard';

const UsersViewScreen = props => {
  const dispatch = useDispatch();

  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  const usersCards = useSelector(state => state.usersReducer.users);
  let loading = useSelector(state => state.usersReducer.loading);
  const totalPages = useSelector(state => state.usersReducer.totalPages);

  const isLoading = React.useCallback(() => {
    return loading ? true : false;
  }, [loading]);

  const getUsers = () => {
    dispatch(fetchUsers({number: currentPage}));
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyles}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  React.useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <FlatList
        data={usersCards}
        renderItem={({item}) => <UserCard data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
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
  loaderStyles: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default UsersViewScreen;
