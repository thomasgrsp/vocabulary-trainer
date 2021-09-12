import { NavigationContainer } from '@react-navigation/native';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export function HomeScreen({navigation}) {
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