import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StretchedItems(): React.JSX.Element {

    return (
        <View style={styles.body}>
            <View style={styles.view1}>
                <Text style={styles.text}>Hello1</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>Hello2</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text}>Hello3</Text>
            </View>
        </View>
    )
}

// flex direction = column (default), no wrap (default), stretched horizontally (alignItems: 'stretch')

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'blue'
        // width: '100%'
    },
    view1: {
        flex: 2,
        // width: 200,
        backgroundColor: '#aaf100',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        flex: 1,
        width: 300,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 30
    },
    view3: {
        // flex: 1,
        width: 'auto',
        height: 100,
        backgroundColor: '#00f1aa',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontStyle: 'italic',
        fontSize: 40,
    }
})