import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ListScroll(): React.JSX.Element {

    // for the RefreshControl: when pulling down it immedately stops refreshing (showing the sign)
    const [refresh, setRefresh] = useState(false);

    type DataType = {
        key: number,
        name: string
    }

    const [data, setData] = useState<DataType[]> ([
        {key: 1, name: "bread"},
        {key: 2, name: "flour"},
        {key: 3, name: "meat"},
        {key: 4, name: "egg"},
        {key: 5, name: "milk"},
        {key: 6, name: "butter"},
        {key: 7, name: "cheese"},
        {key: 8, name: "tomato"},
    ])

    // refresh the list and meanwhile refresh spin is spinning (refreshing={refresh} in RefreshControl, which is a state)
    const listRefresh = () => {
        setRefresh(true);
        setData([...data, {key: 9, name: "joghurt"}]);
        setRefresh(false);
    }

    return (
        <View style={styles.body}>
            <Text style={[styles.text, {backgroundColor:'#ee9900'}]}>MAIN PAGE</Text>
            <ScrollView horizontal style={styles.scroll}>
                <Text style={styles.text}>Menu1</Text>
                <Text style={styles.text}>Menu2</Text>
                <Text style={styles.text}>Menu3</Text>
                <Text style={styles.text}>Menu4</Text>
            </ScrollView>
            <ScrollView refreshControl={<RefreshControl 
                        refreshing={refresh}
                        onRefresh={() => listRefresh()}
                        colors={["red"]}/>}>
                {data.map((item, key) => 
                <View style={styles.item} key={key}>
                    <Text style={styles.text}>{item.key} - {item.name}</Text>
                </View>)}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item: {
        flex: 1,
        height: 150,
        backgroundColor: '#7af1fa',
        fontSize: 30,
        justifyContent: 'center',
        margin: 5,
    },
    text: {
        fontStyle: 'italic',
        fontSize: 30,
        padding: 20,
    },
    scroll: {
        height: 100
    }
})