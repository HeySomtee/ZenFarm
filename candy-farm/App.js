import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar} from 'react-native';
import Container from './Components/Container';
import Webview from './Components/Webview';
import { styles } from './Components/Style';

const App = () => {

  return (
    <View style={styles.container}>
        <StatusBar />
        <Webview />
        {/* <Container /> */}
    </View>
  );
};

export default App;
