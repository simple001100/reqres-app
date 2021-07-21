import * as React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import UsersViewScreen from './UsersViewScreen';
import {TabButtons} from '../components/TabButtons';
import profile from '../assets/home.png';

import home from '../assets/home.png';
import search from '../assets/search.png';
import logout from '../assets/logout.png';

import menu from '../assets/menu.png';
import close from '../assets/close.png';

const DrawerContentScreen = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState('Home');

  const [showMenu, setShowMenu] = useState(false);

  const [showProfile, setShowProfile] = useState(true);

  const offsetValue = useRef(new Animated.Value(0)).current;

  const viewPage = state => {
    switch (state) {
      case true:
        return <ProfileScreen />;
      case false:
        return <UsersViewScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          User
        </Text>

        <View style={{flexGrow: 1, marginTop: 50}}>
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
          {TabButtons(currentTab, setCurrentTab, 'LogOut', logout, setShowProfile, navigation)}
        </View>
      </View>

      <Animated.View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 10,
          borderRadius: showMenu ? 15 : 0,
          transform: [{translateX: offsetValue}],
        }}>
        <Animated.View>
          <TouchableOpacity
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
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 15,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {currentTab}
          </Text>

          {viewPage(showProfile)}

        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default DrawerContentScreen;
