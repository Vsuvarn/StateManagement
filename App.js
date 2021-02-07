import React from 'react';
import {
 
  StyleSheet,
  ScrollView,
  View,
  Text,

} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Redux/store'
import Demo from "./Demo";
import Stack from './Stack';

const App = () => {
    return(
      <Provider store={store}>

         <Stack/>
         <Demo/>
      </Provider>
    );
}

export default App;
