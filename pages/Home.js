import { NavigationContainer } from '@react-navigation/native';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';


var heightY = Dimensions.get("window").height;

export function HomeScreen({navigation}) {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.viewContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Vocabulary')}
                    style={styles.appButtonContainer}>
                    <Text style={styles.textStyle}> 
                        Jouer
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewContainer2}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Extending')}
                    style={styles.appButtonContainer}>
                    <Text style={styles.textStyle}> 
                        Ajouter un mot
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 50
    },
    viewContainer: {
        flex:1
    },
    viewContainer2: {
        flex:1
    },
    appButtonContainer: {
        backgroundColor: "#009688",
        borderRadius: 20,
        height: '80%',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: heightY * 0.02,
        color: "white",
        fontWeight: "bold",
    }
});