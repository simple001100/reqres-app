import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

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
        ) : isSignedUp ? (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={options}
          />
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
      <FlashMessage
        position="top"
        style={styles.flashMessage}
        textStyle={styles.textStyle}
      />
    </NavigationContainer>
  );
};

const options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  flashMessage: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default App;
