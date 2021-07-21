import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export const TabButtons = (
  currentTab,
  setCurrentTab,
  title,
  image,
  setShowProfile,
  navigation,
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === 'LogOut') {
          navigation.navigate('SignIn');
        } else if (title === 'Users') {
          setCurrentTab(title);
          setShowProfile(false);
        } else {
          setCurrentTab(title);
          setShowProfile(true);
        }
      }}>
      <View
        style={[
          styles.container,
          {backgroundColor: currentTab == title ? 'white' : 'transparent'},
        ]}>
        <Image
          source={image}
          style={[
            styles.buttonIcon,
            {tintColor: currentTab == title ? '#5359D1' : 'white'},
          ]}
        />

        <Text
          style={[
            styles.buttonName,
            {
              color: currentTab == title ? '#5359D1' : 'white',
            },
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,

    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  buttonName: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
