import React, { useState } from 'react';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { signIn } from '../../../services/AuthService';
import { ScreenProps } from '../../../types/interface'
import styles from './Styles';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const SignInScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      setError('');
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  const isValidEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  const isFormValid = isValidEmail() && password !== '';

  return (
    <View style={styles.container}>
      <Input
        label="メールアドレス"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        textContentType="emailAddress"
        isRequired={true}
      />
      {!isValidEmail() && email !== '' && 
        <HelperText type="error" style={{ fontSize: 20 }}>
          メールアドレス形式にしてください
        </HelperText>
      }
      <Input
        label="パスワード"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        isRequired={true}
      />
      <Button
        title='ログイン'
        onPress={isFormValid ? handleSignIn : undefined}
        buttonStyle={isFormValid ? styles.button : styles.buttonDisabled}
        textStyle={styles.buttonText}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </View>
  );
};

export default SignInScreen;
