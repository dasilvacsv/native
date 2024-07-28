import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
const icon = require('./assets/icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 200, height: 100, resizeMode: 'contain'}} />
      <Text>Tenemos aquí la configuración</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
