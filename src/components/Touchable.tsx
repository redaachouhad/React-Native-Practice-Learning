import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

function TouchableComponent() {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Component</Text>
      <TouchableOpacity
        onPress={() => setOpacityCount(opacityCount + 0.1)} // Reduce opacity
        style={styles.button} //
      >
        <Text style={styles.buttonText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button} //
        underlayColor={'#dddddd'} //
        onPress={() => setHighlightCount(highlightCount + 0.1)} //
      >
        <Text style={styles.buttonText}>Touchable High Light</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TouchableComponent;
