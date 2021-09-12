import { NavigationContainer } from '@react-navigation/native';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export function ExtendingScreen(){

    const [mot, setMot] = useState("")
    const [def, setDef] = useState("")
  
    //const fs = require('fs')
  
    function save(){
      Words.push({index: Words.length , word: mot.text, definition: def.text})
      console.log(Words)
      {/*fs.writeFile('./vocabulaire.json', JSON.stringify(Words), (err) => {
        if (err) console.log('Error writing file:', err);
      })*/}
    }
  
    return (
      <View>
        <TextInput 
          style={styles.definition}
          placeholder = 'mot'
          onChangeText = {(text) => setMot({text})}
        />
        <TextInput
          style={styles.definition}
          placeholder = 'definition'
          onChangeText = {(text) => setDef({text})}
        />
        <Button
          title = "SAVE"
          onPress = {() => {save()}}
        />
      </View>
    )
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