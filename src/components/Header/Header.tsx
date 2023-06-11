import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type HeaderProps = {
  title: string;
  onBack?: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
