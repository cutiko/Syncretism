import React from 'react';
import styles from "../../theme/styles";
import {View} from "react-native";
import {primaryDark} from "../../theme/colors";
import PorterDuffView from '../../native/android/PorterDuffView'

export default (props: any)=> {

  //fixme callback was removed by mistake


  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      {/*<Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>*/}
      {/*<ActivityIndicator color={accent} size={"large"}/>*/}
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

