import React from 'react';
import styles from "../../theme/styles";
import {ActivityIndicator, Image, View} from "react-native";
import {accent, primaryDark} from "../../theme/colors";
import PorterDuff from '../../native/android/PorterDuff'


export default ({callback}: {callback?: Function})=> {

  //if (callback) setTimeout(callback(), 1200)
  const image = require('../../images/syncretism_logo.png')
  console.log("image", image);
  console.log("to string", image.toString());

  const imageNo = require('image!../../images/syncretism_logo.png')
  console.log("imageNo", imageNo);
  PorterDuff.compose(null, null, image)


  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      <Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>
      <ActivityIndicator color={accent} size={"large"}/>
    </View>
  )
}
