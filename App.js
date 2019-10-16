import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './src/config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.tron.log('Hello World');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste!!</Text>
    </View>
  );
}
