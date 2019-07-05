import React from 'react'
import {Image, Platform, Text, TouchableOpacity, View} from "react-native";
import styles from "../../theme/styles";
import {primaryLight} from "../../theme/colors";
import {Props as AppProps} from '../../types/component'

interface Props extends AppProps{
  callback: Function
}

export default ({callback}: Props)=> {
  const img = (Platform.OS === 'ios') ? require('../../images/apple_error.png') : require('../../images/android_error.png')
  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryLight}]}>
      <Text style={[styles.title, styles.whiteText]}>
        Inicie Sesión Por Favor
      </Text>
      <Image source={img}/>
      <Text style={[styles.secondaryText, styles.padding]}>
        Lo siento pero todavía no soportamos autenticación anonima
      </Text>
      <TouchableOpacity style={styles.accentBtn} onPress={callback()}>
        <Text style={[styles.whiteText, styles.padding]}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  )
}
