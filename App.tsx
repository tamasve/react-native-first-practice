/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Pressable,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  const [name, setName] = useState<string>('Tamas');
  const [session, setSession] = useState<object>({number: 1, title: "state"});

  const buttonClick = () => {
    name === "Tamas" ? setName("Bela") : setName("Tamas");
    let number = session.number;
    setSession({number: number + 1,
                title: ['styles', 'days', 'years', 'decades'][(number + 1) % 4]});
  }

  return (
    <View style={styles.body}>
      
      <Button title="Back to session #1" onPress={() => setSession({number: 1, title: "state"})}></Button>
      
      <Text style={styles.text}>Hello {name}!</Text>
      
      <Button title="What's the weather like?"
            onPress={() => Linking.openURL('https://www.idokep.hu/idojaras/Budapest')}>
      </Button>
      
      <Text style={styles.text}>This is session #{session.number}, it's about {session.title}</Text>
      
      <Pressable style={styles.button} onPress={buttonClick}>
        <Text style={styles.buttontext}>Change name and session</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '90%',
    height: '70%',
    margin: '5%',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeee00',
    borderWidth: 10,
    borderColor: 'magenta',
    borderRadius: 30,
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
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    margin: 5,
    padding: 5,
    elevation: 13
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    padding: 5
  }
});

export default App;
