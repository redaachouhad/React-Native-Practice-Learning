import {StyleSheet, Text, View} from 'react-native';

function FlexLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layout using Text</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>
      <Text>Cross Axis (Column)</Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>
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
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  box: {
    width: 50,
    height: 50,
  },
  redBox: {
    backgroundColor: 'red',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 50,
    height: 200,
  },
});

export default FlexLayout;
