import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Please Enter Alarm Configurations</Text>
      <TextInput placeholder='Alarm Name' style={styles.textBox}/>
      <TextInput placeholder='Alarm Time' style={styles.textBox}/>
      <Button title="Add an Image" 
        onPress={uploadImage} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    display: 'flex',
    borderColor: 'black',
    borderWidth: 'thin',
  },
});

function uploadImage() {
  alert('I clicked it!')
}