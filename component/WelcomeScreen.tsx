import React from 'react'
import {View} from "react-native";
import styles from "../theme/styles";
import {accent} from "../theme/colors";

export default ()=>{
  return (<View style={[styles.container, {backgroundColor: accent}]}/>)
}
