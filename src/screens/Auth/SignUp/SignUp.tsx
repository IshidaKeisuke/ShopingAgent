import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './Styles';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log(name, email, password);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
        isRequired={true}
      />
      <Input
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        isRequired={true}
      />
      <Input
        label="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        textContentType="password"
        isRequired={true}
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};


export default SignUpScreen;
