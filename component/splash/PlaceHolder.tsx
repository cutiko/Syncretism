import React from 'react';
import {Props as AppProps} from '../../types/component'
import styles from "../../theme/styles";
import {ActivityIndicator, Image, View} from "react-native";
import {accent, primaryDark} from "../../theme/colors";

interface Props extends AppProps {
  callback: Function
}

export default ({callback}: Props)=> {

  setTimeout(callback(), 1200)

  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      <Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>
      <ActivityIndicator color={accent} size={"large"}/>
    </View>
  )
}
