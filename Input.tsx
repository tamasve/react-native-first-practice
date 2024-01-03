import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';


// Textinput, input-pad changing, pw entry, settings

export default function Input(): React.JSX.Element {

    const [name, setName] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onPressHandler = () => {setSubmitted(!submitted)}

    const pwInputChange = (value: string) => {
        setName(value);
        setSubmitted(!submitted);
    }

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
            {/* <ScrollView> */}
            <Text style={styles.text}>
                Give me the PIN:
            </Text>
            <TextInput style={styles.input}
                        keyboardType='number-pad'
                        placeholder='your PIN...'
                        onChangeText={setName}
                        maxLength={4}/>

            <Button title={!submitted ? "Submit" : "Inactive"}
                    onPress={onPressHandler}
                    disabled={submitted}
                    color="red"/>
            <Text style={styles.text}>
                {submitted && "You already have submitted it"}
            </Text>

            <Text style={styles.text}>
                Give me the password:
            </Text>
            <TextInput style={styles.input}
                        placeholder='...'
                        secureTextEntry
                        onChangeText={(value) => pwInputChange(value)}
                        maxLength={10}/>
            {/* </ScrollView> */}
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
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#7af1fa'
    },
    scroll: {
        height: 100
    }
})