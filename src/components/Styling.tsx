import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function StylingDemo(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text style={{color: 'white'}}>Inline Styling</Text>
        <View
          style={[
            styles.combinedStyle,
            {borderWidth: 2, borderColor: 'purple'},
          ]}>
          <Text>Combined Styles</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default StylingDemo;
