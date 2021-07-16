import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import UserViewScreen from './UsersViewScreen';

const Drawer = createDrawerNavigator();

const DrawerContentScreen = props => {
  
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="UserView" component={UserViewScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerContentScreen;
