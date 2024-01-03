/**
 * First Practice React Native App
 * practices during watching Mash's 7H tutorial
 * 21-22 Dec 2023, 1- Jan 2024
 * next: #12
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Layout from './Layout';
import ListScroll from './List-ScrollView';
import StretchedItems from './StretchedItems';
import StretchedItems2 from './StretchedItems2';
import FlatListUse from './FlatListUse';
import SectionListUse from './SectionListUse';
import RefreshedListExercise from './RefreshedListExercise';
import Input from './Input';
import InputII from './InputII';
import InputIII from './InputIII';


function App(): React.JSX.Element {

  return (
    <View style={styles.body}>
      {/* <Layout /> */}
      {/* <StretchedItems /> */}
      {/* <StretchedItems2 /> */}
      {/* <ListScroll /> */}
      {/* <FlatListUse /> */}
      {/* <SectionListUse /> */}
      {/* <RefreshedListExercise /> */}
      <InputIII />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
},
});

export default App;
