import React from 'react'
import {Image, View} from "react-native";
import styles from "../theme/styles";

export default () => (
  <View style={[styles.container, styles.splash]}>
    <Image source={require('../images/syncretism_logotype.png')}/>
    <Image source={require('../images/syncretism_logo.png')}/>
  </View>
)
