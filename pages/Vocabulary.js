import { NavigationContainer } from '@react-navigation/native';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function VocabularyScreen() {
    const [reponse, setReponse] = useState("")
    const [mot, setMot] = useState("")
    const [definition, setDefinition] = useState("")
    const textInput = React.useRef(null)
    const next = React.useRef(null)
    const [disable, setDisable] = useState(false)
  
    const Answer = (props) => {return(mot == props.name ? <Text style={styles.mot1}>Bonne réponse</Text> : <Text style={styles.mot2}>Vas-tu réussir ?</Text>)};
  
    function setWord(){
      const randIndex = Math.floor(Math.random() * Words.length)
      setMot(Words[randIndex].word.toLowerCase())
      setDefinition(Words[randIndex].definition)
      textInput.current.clear()
    }
    return (
      <View style={styles.container}>
  
        <Text style={styles.definition}> {definition} </Text>
        
        <View>
          <TextInput 
            style={styles.mot}
            placeholder="...."
            defaultValue=""
            clearButtonMode="always"
            ref = {textInput}
            autoCapitalize = 'none'
            onChangeText = {(text) => setReponse({text})}
            blurOnSubmit = {true}
            onBlur = {()=> setDisable(false)}
            onFocus = {() => setDisable(true)}
          />
        </View>
  
        <Answer name={reponse.text} defaultValue=""/>
  
        <Button
          ref = {next}
          disabled = {disable}
          title="SUIVANT"
          onPress={() => {setWord()}}
        />
  
      </View>
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
      backgroundColor: "white",
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
      backgroundColor: "white",
      textAlign: "center",
      fontSize: 30,
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