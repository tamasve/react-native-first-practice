import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StretchedItems2(): React.JSX.Element {

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

// flex direction = row, wrap, no stretching
// not clear how much do flex numbers and their proportions count in some cases...

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    view1: {
        flex: 2,
        minWidth: 200,
        height: 100,
        backgroundColor: '#aaf100',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        // flex: 1,
        width: 250,
        height: 100,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view3: {
        flex: 1,
        minWidth: 100,
        height: 150,
        backgroundColor: '#00f1aa',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontStyle: 'italic',
        fontSize: 30,
    }
})