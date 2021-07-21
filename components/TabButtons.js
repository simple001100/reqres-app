import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export const TabButtons = (currentTab, setCurrentTab, title, image, setShowProfile, navigation) => {
    return (
      <TouchableOpacity onPress={() => {
        if (title === "LogOut") {
          navigation.navigate('SignIn')
        } else if (title === "Users"){
          setCurrentTab(title);
          setShowProfile(false);
        } else {
          setCurrentTab(title);
          setShowProfile(true);
        }
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15
        }}>
  
          <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    );
  }