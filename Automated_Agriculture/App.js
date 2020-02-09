/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Text, StyleSheet, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
//import button from "./style.css";



export default class ButtonBasics extends Component {
  _onPressButton1() {
    alert('Object: Apples\nStatus: UNKNOWN')
  }
  _onPressButton2() {
    alert('Object: Oranges\nStatus: RIPE')
  }
  _onPressButton3() {
    alert('Object: Bananas\nStatus: UNKNOWN')
  }
  _changePressButton() {
    alert('change camera names\n**NOT FINISHED**')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#0B6623', '#3b5998', '#000000']} style={styles.linearGradient}>
        <Text>{"67 °F  -  AUTOMATED_AGRICULTURE"}</Text>
        <Text style={styles.header}> </Text>
        <View style={styles.buttonContainer}>
        <Text>{" Camera 1"}</Text>
          <Button
            onPress={this._onPressButton1}
            title="Apples"
          />
        </View>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.buttonContainer}>
        <Text>{"   Camera 2"}</Text>
          <Button
            onPress={this._onPressButton2}
            title="Oranges"
            color="#841584"
          />
        </View>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.buttonContainer}>
        <Text>{"   Camera 3"}</Text>
          <Button
            onPress={this._onPressButton3}
            title="Bananas"
            color="#342584"
          />
        </View>
        <View style={styles.buttonContainer}>
        <Text> </Text>
        <Text> </Text>
          <Button
            onPress={this._changePressButton}
            title="---Set Up Cameras---"
            color="#342584"
          />
        </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 16,
    marginTop: 20,
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  rectangle: {
    width: 80 * 2,
    height: 80,
    backgroundColor: "blue",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "orange"
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 500,
    borderRightWidth: 500,
    borderBottomWidth: 100,
    borderStyle: 'solid',
    borderBottomColor: 'green',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});