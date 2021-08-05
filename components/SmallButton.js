import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export const SmallButton = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.action}>
      <Image style={styles.icon} source={props.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
});
