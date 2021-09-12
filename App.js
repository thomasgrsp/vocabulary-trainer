import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import wordsData from './vocabulaire.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen} from './pages/Home.js';
import { VocabularyScreen} from './pages/Vocabulary.js';
import { ExtendingScreen} from './pages/Extending.js';

global.Words = JSON.parse(JSON.stringify(wordsData))

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Vocabulary" component={VocabularyScreen} />
        <Stack.Screen name="Extending" component={ExtendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    marginTop: 50,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: 'cyan',
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  definition: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  mot: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
  },

  mot1: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    backgroundColor: "green",
    textAlign: "center",
    fontSize: 15,
  },

  mot2: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor:"red",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
  }
});



//var Ldata = require('./vocabulaire.json');

/*const Words = () => {
  return(
    <Word key = {data.index}>
      <Word.Body>
        <Word.Word> {data.word} </Word.Word>
        <Word.Definition> {data.definition} </Word.Definition>
      </Word.Body>
    </Word>
  )
})*/

//const [data,setData]=useState([]);
