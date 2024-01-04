import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, TouchableHighlight, Pressable, ToastAndroid, Modal } from 'react-native';


// Modal - usage, parameters and practical structure
// onRequestClose={...}  - what happens upon clicking the < back on mobile...
// transparent = previous page can be seen in the background
// animationtype = transition when switching off: fade / slide / none
// Modal covers the entire page - this is controlled by the 1st View in the hierarchy

export default function Modals(): React.JSX.Element {

    const [name, setName] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);


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
                onPress={() => setShowModal(true)}
                hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
                android_ripple={{color: '#00f'}}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'}
                ]}
                >
                <Text style={styles.text3}>Warning</Text>
            </Pressable>

            <Modal visible={showModal}
                    transparent
                    onRequestClose={() => setShowModal(false)}
                    animationType='fade'
                    >

                <View style={styles.obscured_bg}>
                    <View style={styles.modal}>

                        <View style={styles.modal_title}>
                            <Text>
                                WARNING!
                            </Text>
                        </View>

                        <View style={styles.modal_body}>
                            <Text>
                                The entire page is wrong!
                            </Text>
                        </View>

                        <Pressable
                            onPress={() => setShowModal(false)}
                            style={styles.modal_button}
                            android_ripple={{color: '#2ff'}}>
                            <Text>OK</Text>
                        </Pressable>

                    </View>
                </View>

            </Modal>

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
    obscured_bg: {      // the background obscurer outside the modal
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'    // the last 2 digits: % transparency (A in RGBA)
    },
    modal: {        // modal's main div
        width: 300,
        height: 300,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    modal_title: {      // here the 3 parts sized by flex
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20
    },
    modal_body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_button: {
        flex: 1,
        backgroundColor: '#7f7',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }

})