import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import wordsData from './vocabulaire.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen} from './pages/Home.js';
import { VocabularyScreen} from './pages/Vocabulary.js';
import { ExtendingScreen} from './pages/Extending.js';

global.Words = JSON.parse(JSON.stringify(wordsData))

const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              title: "Vocabulary Trainer", 
              headerStyle: {
                backgroundColor:"cyan",
                height:100,
              },
              headerTitleStyle: {
                color:"black",
                textAlign:"center",
                fontSize:50,
              },
              headerTitleAlign: "center"
            }} />
          <Stack.Screen name="Vocabulary" component={VocabularyScreen} />
          <Stack.Screen name="Extending" component={ExtendingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}