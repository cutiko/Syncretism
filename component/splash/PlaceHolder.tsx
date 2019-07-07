import React from 'react';
import styles from "../../theme/styles";
import {View} from "react-native";
import {primaryDark} from "../../theme/colors";
import PorterDuffView from '../../native/android/PorterDuffView'

export default (props: any)=> {

  //fixme callback was removed by mistake


  //const urls = {DESTINATION: "https://cdn.legalcheek.com/wp-content/uploads/2017/10/LawyerDog.jpg", SOURCE: ""}
  /*urls[PorterDuffView.DESTINATION] = "https://i.ytimg.com/vi/maKrR-TKpJQ/maxresdefault.jpg"
  urls[PorterDuffView.SOURCE] = ""*/


  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      {/*<Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>*/}
      {/*<ActivityIndicator color={accent} size={"large"}/>*/}
      <PorterDuffView
        style={{width: 100, height: 100}}
        urls={{
          destination: "https://cdn.legalcheek.com/wp-content/uploads/2017/10/LawyerDog.jpg",
          source: "https://i.ytimg.com/vi/maKrR-TKpJQ/maxresdefault.jpg"
        }}
      />
    </View>
  )
}
