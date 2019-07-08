import React from 'react';
import {Platform, Text, View} from "react-native";
import styles from "../../theme/styles";
import PorterDuffView from "../../native/android/PorterDuffView";

export default () => {

  if ((Platform.OS === 'ios')) {
    return (
      <View style={[styles.container, {backgroundColor: 'orange'}]}>
        <Text>IOS</Text>
      </View>
    )
  }

  return (
    <View style={[styles.container, styles.center, styles.padding]}>
      <Text style={[styles.title, styles.padding]}>PorterDuffView</Text>
      <Text style={[styles.padding, styles.secondaryText]}>Componente nativo de Android. Es un ImageView que utiliza PorterDuff para mezclar dos imagenes. Las imagenes son dynámicas a partir de 2 urls</Text>
      <PorterDuffView
        style={{width: 200, height: 200}}
        urls={{
          destination: "https://i.ibb.co/ZYH76ZT/circle.png",
          source: "https://i.ibb.co/6yJNR7K/square.png"
        }}
      />
    </View>
  )
}
