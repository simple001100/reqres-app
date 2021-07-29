import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = props => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.backgroundColor}]} onPress={props.action}>
      <Text style={[styles.buttonText, {color: props.textColor}]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 0.8,
        borderColor: '#5359D1',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 24,
        fontWeight: '800',
      },
  });
