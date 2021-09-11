import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import "./App.css";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Words} from "./Words";


const Question = (props) => {
  if (props.name == "asthenie"){
    return <Text style={styles.mot1}> Bonne réponse </Text>
  }
  else{
    return <Text style={styles.mot2}> Mauvaise réponse </Text>
  }
}


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

var Ldata = require('./vocabulaire.json');

export default function App() {
  const [reponse, setReponse] = useState('');
  //const [data,setData]=useState([]);
  return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Vocabulary Trainer </Text>
        
        <View style={styles.definition}>
          <Text>Affaiblissement de l’organisme, fatigue physique</Text>
          <StatusBar style="auto"/>
        </View>

        <View>
          <TextInput 
            style={styles.mot}
            placeholder="...."
            defaultValue=""
            onSubmitEditing = {(event) => setReponse(event.nativeEvent)}
          />
        </View>

        <Words/>

        <Question name={reponse.text} defaultValue=""/>

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
