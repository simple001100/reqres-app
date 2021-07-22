import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContentScreen from './screens/DrawerContentScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={options}
        />
        <Stack.Screen
          name="DrawerContent"
          component={DrawerContentScreen}
          options={options}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const options = {
  headerTitleAlign: 'center',
  headerShown: false,
};

export default App;
