import * as React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const Input = props => {
  return (
    <TextInput
      style={[
        styles.loginInput,
        {borderColor: props.error ? 'red' : '#5359D1'},
      ]}
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
  },
});
