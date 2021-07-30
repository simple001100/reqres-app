import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import DrawerContentScreen from './screens/DrawerContentScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  const Stack = createStackNavigator();

  let isSignedIn = useSelector(state => state.signinReducer.signin);
  let isSignedUp = useSelector(state => state.signupReducer.signup);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="DrawerContent"
              component={DrawerContentScreen}
              options={options}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={options}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={options}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const options = {
  headerTitleAlign: 'center',
  headerShown: false,
};

export default App;
