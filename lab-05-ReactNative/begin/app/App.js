/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import { Alert, Button, StyleSheet, Text, View, ScrollView, Image } from "react-native";
 
const Home = () => {   
  return (
    <View style={styles.container}>     
      <Image style={styles.img} source={require('./img/a0.png')} />
      <Text style={styles.header}> React Native Lab </Text>           
    </View>
  );
};

const App = () => {
  return (  
      <Home />  
  );
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C'
  },
  img: {
    marginTop:20
  },
});

export default App;
