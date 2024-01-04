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
import Layout from './components/Layout';
import ListScroll from './components/List-ScrollView';
import StretchedItems from './components/StretchedItems';
import StretchedItems2 from './components/StretchedItems2';
import FlatListUse from './components/FlatListUse';
import SectionListUse from './components/SectionListUse';
import RefreshedListExercise from './components/RefreshedListExercise';
import Input from './components/Input';
import InputII from './components/InputII';
import InputIII from './components/InputIII';
import Modals from './components/Modals';


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
      {/* <Input /> */}
      {/* <InputII /> */}
      {/* <InputIII /> */}
      <Modals />
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
