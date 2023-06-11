import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    color: '#007BFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
