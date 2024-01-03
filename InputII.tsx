import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';


// Different type of buttons and their settings

export default function InputII(): React.JSX.Element {

    const [name, setName] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onPressHandler = () => {setSubmitted(!submitted)}


    return (
        <View style={styles.body}>

            <TouchableOpacity style={styles.text}
                    onPress={onPressHandler}
                    activeOpacity={0.5}>
                <Text style={styles.text2}>{!submitted ? "Submit" : "Inactive"}</Text>
            </TouchableOpacity>

            <TouchableHighlight style={styles.text}
                    onPress={onPressHandler}
                    activeOpacity={0.5}
                    underlayColor={'#993799'}>
                <Text style={styles.text}>{!submitted ? "Submit" : "Inactive"}</Text>
            </TouchableHighlight>

            <Pressable
                onPress={onPressHandler}
                hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
                android_ripple={{color: '#00f'}}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'}
                ]}
                >
                <Text style={styles.text3}>{!submitted ? "Submit" : "Inactive"}</Text>
            </Pressable>

            <Text style={styles.text}>
                {submitted && "You already have submitted it"}
            </Text>

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
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 30
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
    text3: {
        fontStyle: 'italic',
        fontSize: 20,
        padding: 20,
        alignItems: 'center',
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