import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Basics from './src/components/Basics';
import FlexLayout from './src/components/FlexLayout';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import StylingDemo from './src/components/Styling';
import TextInputComponent from './src/components/TextInput';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollViewContent}>
        <SafeAreaView style={styles.safeAreaView}>
          <Basics />
          <TextInputComponent />
          <ScrollViewComponent />
          <StylingDemo />
          <FlexLayout />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
  },
  safeAreaView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // padding: 20,
  },
});

export default App;
