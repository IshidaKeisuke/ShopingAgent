import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { signIn } from '../../../services/AuthService';
import { ScreenProps } from '../../../../types/interface'
import styles from './Styles';
import Input from '../../../components/Input/Input';


const SignInScreen : React.FC<ScreenProps> = ({ navigation }) => {
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
	

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign In
      </Button>
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </View>
  );
};

export default SignInScreen;
