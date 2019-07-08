import React from 'react';
import {View} from "react-native";
import styles from "../../theme/styles";

export default () => {
  return (
    <View style={[styles.container, {backgroundColor: 'orange'}]}/>
  )
}
