import * as React from 'react';
import {View, Text, Image, StyleSheet, Modal} from 'react-native';
import { useDispatch } from 'react-redux';

import {Button} from '../components/Button';
import EditProfileModal from '../components/EditProfileModal';

import { deleteUsers } from '../src/store/usersReducer';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => dispatch(deleteUsers()), []);

  const actionButton = () => {
    setVisible(true);
  };

  return (
    <View style={StyleSheet.container}>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <EditProfileModal
          visible={visible}
          setVisible={setVisible}
          firstName={props.firstName}
          lastName={props.lastName}
          avatar={props.avatar}
        />
      </Modal>
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
      <View style={styles.buttonContainer}>
        <Button
          name="Edit"
          textColor="white"
          backgroundColor="#5359D1"
          action={actionButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 70,
    width: 200,
    height: 200,
    borderRadius: 120,
  },
  dataContainer: {
    backgroundColor: '#B4CFEA',
    width: 340,
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
  buttonContainer: {
    marginTop: 10,
    width: 340,
    marginHorizontal: 10,
  },
});

export default ProfileScreen;
