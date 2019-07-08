import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../../theme/styles";
import {primaryLight} from "../../theme/colors";


export default ({callback}: {callback : Function})=> {
  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryLight}]}>
      <Text style={[styles.title, styles.whiteText]}>
        Inicie Sesión Por Favor
      </Text>
      <Image source={require('../../images/error.png')}/>
      <Text style={[styles.secondaryText, styles.padding]}>
        El inicio de sesión fue cancelado o la sesión expiró
      </Text>
      <TouchableOpacity style={styles.accentBtn} onPress={callback()}>
        <Text style={[styles.whiteText, styles.padding]}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  )
}
