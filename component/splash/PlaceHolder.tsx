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
        style={{width: 200, height: 200}}
        urls={{
          destination: "https://i.ibb.co/ZYH76ZT/circle.png",
          source: "https://i.ibb.co/6yJNR7K/square.png"
        }}
      />
    </View>
  )
}


{/*<PorterDuffView
  style={{width: 500, height: 500}}
  urls={{
    destination: "https://firebasestorage.googleapis.com/v0/b/learningfirebase-77a34.appspot.com/o/syncretism%2Fsquare.png?alt=media",
    source: "https://firebasestorage.googleapis.com/v0/b/learningfirebase-77a34.appspot.com/o/syncretism%2Fcircle.png?alt=media"
  }}
/>*/}

/*urls={{
  destination: "https://cdn.legalcheek.com/wp-content/uploads/2017/10/LawyerDog.jpg",
    source: "https://i.ytimg.com/vi/maKrR-TKpJQ/maxresdefault.jpg"
}}*/

/*urls={{
  destination: "https://firebasestorage.googleapis.com/v0/b/learningfirebase-77a34.appspot.com/o/syncretism%2Fsquare.jpg?alt=media",
    source: "https://firebasestorage.googleapis.com/v0/b/learningfirebase-77a34.appspot.com/o/syncretism%2Fcircle.jpg?alt=media"
}}*/

/*urls={{
  destination: "https://i.ibb.co/Z8Ssv1N/circle.jpg",
    source: "https://i.ibb.co/4g7WLHJ/square.jpg"
}}*/

/*
destination: "https://i.ibb.co/M5BcZtm/circle.png",
source: "https://i.ibb.co/kJS6GVv/square.png"
*/

