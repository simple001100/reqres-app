import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContentScreen from './screens/DrawerContentScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {Provider} from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
import UserViewScreen from './screens/UsersViewScreen';
import { TabButtons } from './components/TabButtons';
import { store } from './src/store';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} options={options}/>
          <Stack.Screen name="DrawerContent" component={DrawerContentScreen} options={options}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={options}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const options = {
  headerTitleAlign: 'center',
  headerShown: false
}

export default App;
