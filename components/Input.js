import * as React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export const Input = props => {
  return (
    <TextInput
      style={styles.loginInput}
      onChangeText={value => props.onChange(value)}
      value={props.value}
      placeholder={props.name}
      secureTextEntry={props.secureEntry}
    />
  );
};

const styles = StyleSheet.create({
  loginInput: {
    height: 50,
    borderRadius: 6,
    marginBottom: 5,
    fontSize: 18,
    borderWidth: 0.8,
    borderColor: '#5359D1',
  },
});
