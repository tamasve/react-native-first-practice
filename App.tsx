/**
 * First Practice React Native App
 * 21-22 Dec 2023
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


function App(): React.JSX.Element {

  return (
    <View style={styles.body}>
      {/* <Layout /> */}
      {/* <StretchedItems /> */}
      {/* <StretchedItems2 /> */}
      <ListScroll />
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
