import * as React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getProfile} from '../src/store/profileReducer';

import ProfileScreen from './ProfileScreen';
import UsersViewScreen from './UsersViewScreen';
import {TabButtons} from '../components/TabButtons';

import home from '../assets/home.png';
import search from '../assets/search.png';
import logout from '../assets/logout.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

const DrawerContentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  let id = useSelector(state => state.signinReducer.id)
  React.useEffect(() => dispatch(getProfile({number: id})), []);

  let {firstName, lastName, email, avatar} = useSelector(
    state => state.profileReducer,
  );

  const [currentTab, setCurrentTab] = useState('Profile');

  const [showMenu, setShowMenu] = useState(false);

  const [showProfile, setShowProfile] = useState(true);

  const offsetValue = useRef(new Animated.Value(0)).current;

  const viewPage = state => {
    switch (state) {
      case true:
        return (
          <ProfileScreen
            firstName={firstName}
            lastName={lastName}
            email={email}
            avatar={avatar}
          />
        );
      case false:
        return <UsersViewScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sidebarContainer}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.profileImage}></Image>

        <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>

        <View style={styles.buttonsContainer}>
          {TabButtons(
            currentTab,
            setCurrentTab,
            'Profile',
            home,
            setShowProfile,
          )}
          {TabButtons(
            currentTab,
            setCurrentTab,
            'Users',
            search,
            setShowProfile,
          )}
        </View>

        <View>
          {TabButtons(
            currentTab,
            setCurrentTab,
            'LogOut',
            logout,
            setShowProfile,
          )}
        </View>
      </View>

      <Animated.View
        style={[
          styles.contentContainer,
          {
            borderRadius: showMenu ? 15 : 0,
            transform: [{translateX: offsetValue}],
          },
        ]}>
        <Animated.View>
          <TouchableOpacity
            style={{width: 30}}
            onPress={() => {
              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Image
              source={showMenu ? close : menu}
              style={styles.burgerContainer}></Image>
          </TouchableOpacity>

          <View style={styles.componentContainer}>{viewPage(showProfile)}</View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sidebarContainer: {
    justifyContent: 'flex-start',
    padding: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 8,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  buttonsContainer: {
    flexGrow: 1,
    marginTop: 50,
  },
  contentContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 0,
  },
  burgerContainer: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginTop: 15,
    marginHorizontal: 10,
  },
  componentContainer: {
    alignItems: 'center'
  },
});

export default DrawerContentScreen;
