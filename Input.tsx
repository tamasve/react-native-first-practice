import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


// Textinput, input-pad changing, pw entry, settings

export default function Input(): React.JSX.Element {

    const [name, setName] = useState<string>("");


    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please write your name:
            </Text>
            <TextInput style={styles.input}
                        multiline
                        placeholder='write your name...'
                        onChangeText={(value) => setName(value)}/>
            <Text style={styles.text2}>
                YOU TYPED --- {name}
            </Text>
            <Text style={styles.text}>
                Give me the PIN:
            </Text>
            <TextInput style={styles.input}
                        keyboardType='number-pad'
                        placeholder='your PIN...'
                        onChangeText={setName}
                        maxLength={4}/>
            <Text style={styles.text}>
                Give me the password:
            </Text>
            <TextInput style={styles.input}
                        placeholder='...'
                        secureTextEntry
                        onChangeText={setName}
                        maxLength={10}/>
        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontStyle: 'italic',
        fontSize: 20,
        padding: 20,
        alignItems: 'center'
    },
    text2: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        minWidth: 100,
        fontSize: 18,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        backgroundColor: '#eeee00'
    },
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        minWidth: 100,
        fontSize: 22,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#7af1fa'
    },
    scroll: {
        height: 100
    }
})