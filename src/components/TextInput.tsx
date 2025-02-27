import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

function TextInputComponent(): React.JSX.Element {
  const [message, setMessage] = useState<string>('');
  const onChangeText = (e: string) => {
    setMessage(e);
  };
  const handleSubmit = () => {
    Alert.alert('Submit', `You entered: ${message}`);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Text Input Component</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={message}
        placeholder="Type Something Here..."
      />
      <Button title="Submit" color={'green'} onPress={handleSubmit} />
      <Text>{'\n'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  textLabel: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  textInput: {
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default TextInputComponent;
