import React from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';
import ButtonComponent from '../component/Button';

const LoginPage = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <SafeAreaView style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-Mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
      </SafeAreaView>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <ButtonComponent />
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
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: 'purple'
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default LoginPage;
