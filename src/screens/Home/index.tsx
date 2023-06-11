import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styles from './styles';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Shopping Assistant App!</Text>
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate('OrderList')}
      />
    </View>
  );
};

export default HomeScreen;
