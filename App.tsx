/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello Everyone!</Text>
        <Text style={styles.text}>What's the problem?</Text>
      <Button title="Push me" onPress={() => Linking.openURL('https://www.idokep.hu/idojaras/Budapest')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eeee00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
  text: {
    fontSize: 32,
    backgroundColor: '#ff0000',
    color: 'white',
    borderRadius: 20,
    padding: 10,
    margin: 15,
  },
  scrolltext: {
    height: 500,
    backgroundColor: 'pink',
  }
});

export default App;
