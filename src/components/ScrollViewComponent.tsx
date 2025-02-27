import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function ScrollViewComponent(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scroll View Component</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={true}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
    marginBottom: 30,
  },
  scrollViewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignContent: 'center',
  },

  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ScrollViewComponent;
