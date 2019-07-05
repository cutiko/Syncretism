import React from 'react';
import styles from "../../theme/styles";
import {ActivityIndicator, Image, View} from "react-native";
import {accent, primaryDark} from "../../theme/colors";


export default ({callback}: {callback: Function})=> {

  setTimeout(callback(), 1200)

  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      <Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>
      <ActivityIndicator color={accent} size={"large"}/>
    </View>
  )
}
