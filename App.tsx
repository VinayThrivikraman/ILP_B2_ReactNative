import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from './src/component/Button';

const LoginPage = () => {

  const [text, onChangeText] = React.useState('');

  const bodyText = 'Forgot Password?';

  return (
    <View >
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="email"
          onChangeText={onChangeText}
        />
        <TextInput
          style={styles.input}
          value={text}
          placeholder="password"
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
        <Text style={styles.forgotPassword}>{bodyText}</Text>
        <ButtonComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 300,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default LoginPage;
