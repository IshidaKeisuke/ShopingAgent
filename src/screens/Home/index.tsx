import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { ScreenProps } from '../../types/interface'

const HomeScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Shopping Assistant App!</Text>
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HomeScreen;
