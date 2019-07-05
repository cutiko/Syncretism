import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import styles from "../theme/styles";

export default class WelcomeScreen extends Component {
  static navigationOptions = {header: null}

  render() {
    return (
      <View style={[styles.container, styles.center, styles.padding]}>
        <Text style={[styles.title, styles.padding]}>Syncretism</Text>
        <Text style={[styles.secondaryText, styles.padding]}>
          En este demo hay React Native, con componentes nativos de Android y IOS, además entre éstos últimos hay Kotlin
          compartido
        </Text>
        <TouchableOpacity style={[styles.accentBtn, styles.padding, {marginTop: 16}]}>
          <Text style={styles.whiteText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
