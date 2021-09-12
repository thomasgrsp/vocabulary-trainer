import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import wordsData from './vocabulaire.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Words = JSON.parse(JSON.stringify(wordsData))

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Jouer"
      onPress={() => navigation.navigate('Vocabulary')}
      />
      <Button
      title="Ajouter un mot"
      onPress={() => navigation.navigate('Extending')}
      />
    </View>
  );
}

function ExtendingScreen(){

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

function VocabularyScreen() {
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

      <Text style={styles.title}> Vocabulary Trainer</Text>

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
