import React, { useState } from 'react';
import { RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';


// Exercise: starting with 1 task with its items in a nested array, and upon every refresh a new task should be created

export default function RefreshedListExercise(): React.JSX.Element {

    // for the RefreshControl: when pulling down it immedately stops refreshing (showing the sign)
    const [refresh, setRefresh] = useState(false);

    type TaskType = {
        task: string,
        data: string[]
    }

    // initial data
    const [tasks, setTasks] = useState<TaskType[]> ([
        {
            task: 'Task 1',
            data: ['Item 1-1', 'Item 1-2'],
        },
    ]);

    // refresh the list and meanwhile refresh spin is spinning (refreshing={refresh} in RefreshControl, which is a state)
    const listRefresh = () => {
        setRefresh(true);
        const count = tasks.length + 1;
        setTasks([...tasks, {task: `Task ${count}`, data: [`Item ${count}-1`, `Item ${count}-2`]}]);
        setRefresh(false);
    };

    return (
        <View style={styles.body}>
            <Text style={[styles.text, {backgroundColor:'#ee9900'}]}>MAIN PAGE - {tasks.length} task(s)</Text>

            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={tasks}
                renderItem={({item}) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                renderSectionHeader={({section}) => (
                    <View style={styles.task}>
                        <Text style={styles.text}>{section.task}</Text>
                    </View>
                )}
                refreshControl={<RefreshControl 
                    refreshing={refresh}
                    onRefresh={listRefresh}
                    colors={['magenta']}
                />}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    text: {
        fontStyle: 'italic',
        fontSize: 30,
        padding: 20,
        fontWeight: "700",
    },
    task: {
        height: 150,
        backgroundColor: '#7af1fa',
        fontStyle: 'italic',
        fontSize: 30,
        padding: 20,
        borderWidth: 5,
        borderColor: 'black'
    },
    item: {
        flex: 1,
        fontSize: 25,
        justifyContent: 'center',
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    scroll: {
        height: 100
    }
})