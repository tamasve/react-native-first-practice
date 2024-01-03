import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, TouchableHighlight, Pressable, ToastAndroid } from 'react-native';


// Alert and toast message
// Alert: header, message, buttons with functions: max 3, cancellable: you can close alert by clicking anywhere else

export default function InputIII(): React.JSX.Element {

    const [name, setName] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onPressHandler = () => {
        if (name.length > 4) {
            setSubmitted(!submitted)}
        else if (name.length !== 0)
        {
            Alert.alert(
                "Error!",
                "You have to give a longer name!", [
                {
                    text: 'OK',
                    onPress: () => console.warn('OK pressed!')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.warn('Cancel pressed!')
                },
                {
                    text: 'Do not show it again',
                    onPress: () => console.warn('You will not see it again...')
                },
            ],
            {cancelable: true, onDismiss: () => console.warn('you closed it...')})
        }

        else {
            // ToastAndroid.show(
            //     'Are you crazy??  Void field...',
            //     ToastAndroid.SHORT);
            ToastAndroid.showWithGravityAndOffset(
                'Are you crazy??  Void field...',
                ToastAndroid.SHORT,
                ToastAndroid.TOP, 0, 0);

        }
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