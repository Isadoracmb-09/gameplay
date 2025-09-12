import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function siglnin() {

  const [text, SetText] = useState("")
  return (
    <View style={styles.container}>
      <Text>Testando a componentização</Text>
      <TextInput style={{width:200, height:50, borderWidth:2}}/>
      <Text>
        Esse componente é show: {text}</Text>
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