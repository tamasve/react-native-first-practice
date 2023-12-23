import React, { useState } from 'react';
import { RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';

/**
 * SectionList instead of normal list with Text
 */

export default function SectionListUse(): React.JSX.Element {

    // // for the RefreshControl: when pulling down it immedately stops refreshing (showing the sign)
    // const [refresh, setRefresh] = useState(false);

    // type DataType = {
    //     key: number,
    //     name: string
    // }

    // const [data, setData] = useState<DataType[]> ([
    //     {key: 1, name: "bread"},
    //     {key: 2, name: "flour"},
    //     {key: 3, name: "meat"},
    //     {key: 4, name: "egg"},
    //     {key: 5, name: "milk"},
    //     {key: 6, name: "butter"},
    //     {key: 7, name: "cheese"},
    //     {key: 8, name: "tomato"},
    // ]);

    // IMPORTANT! - the inner arrays key name should be 'data' for the 'sections' prop to work
    const nestedArray = [
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
        },
        {
            title: 'Title 2',
            data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
        },
        {
            title: 'Title 3',
            data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
        },
        {
            title: 'Title 4',
            data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
        },
    ]

    // // refresh the list and meanwhile refresh spin is spinning
    // const listRefresh = () => {
    //     setRefresh(true);
    //     setData([...data, {key: 9, name: "joghurt"}]);
    //     setRefresh(false);
    // }

    // SectionList: similar to FlatList, but it handles only the nested arrays
    return (
        <View style={styles.body}>
            <Text style={[styles.text, {backgroundColor:'#ee9900'}]}>MAIN PAGE</Text>
            <ScrollView horizontal style={styles.scroll}>
                <Text style={styles.text}>Menu1</Text>
                <Text style={styles.text}>Menu2</Text>
                <Text style={styles.text}>Menu3</Text>
                <Text style={styles.text}>Menu4</Text>
            </ScrollView>

            <SectionList 
                keyExtractor={(item, index) => index.toString()}
                sections={nestedArray}
                renderItem={({item}) => (
                            // <View style={styles.item} >
                                <Text style={styles.text}>{item}</Text>
                            // </View>
                            )}
                renderSectionHeader={({section}) => (
                    <View style={styles.item} >
                        <Text style={styles.text}>{section.title}</Text>
                    </View>
                )}
            />

            {/* <ScrollView refreshControl={<RefreshControl 
                        refreshing={refresh}
                        onRefresh={() => listRefresh()}
                        colors={["red"]}/>}>
                {data.map((item, key) => 
                <View style={styles.item} key={key}>
                    <Text style={styles.text}>{item.key} - {item.name}</Text>
                </View>)}
            </ScrollView> */}
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