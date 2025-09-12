import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function siglnin() {
  return (
    <View style={styles.container}>
      <Text>Testando a componentização</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});