import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Calculadora from './components/Calculadora'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Oi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
