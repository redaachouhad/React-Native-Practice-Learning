import React, {useState} from 'react';
import {Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';

function Basics(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);
  const onPress = () => {
    // Alert.alert('You have pressed the button');
    setCount(count + 1);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <View style={styles.redBox} />
            <View style={styles.blueBox} />
            <View style={styles.greenBox} />
          </View>
        </View>
        <Text style={styles.myFirstText}>My First React Native Course</Text>
        <Text style={styles.nestedStyle}>
          Text components can be <Text style={styles.bold}>nested</Text>
        </Text>
        {/* Image Component */}
        <Image
          source={require('../../assets/chessImage.jpg')}
          style={styles.chessImage}
        />
        <Text> Hmjhygt kjjghhjh</Text>
        {/* Image Component */}
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={styles.chessImage}
        />
        {/* Button Component */}
        <Button color={'red'} onPress={onPress} title="Click Me" />
        <Text style={styles.countText}>Count is {count.toString()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
  container: {
    marginBottom: 0,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  myFirstText: {
    fontSize: 30,
  },
  nestedStyle: {
    fontSize: 18,
  },
  bold: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  chessImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Basics;
