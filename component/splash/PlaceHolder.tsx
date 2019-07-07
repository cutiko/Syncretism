import React from 'react';
import styles from "../../theme/styles";
import {View} from "react-native";
import {primaryDark} from "../../theme/colors";
import PorterDuffView from '../../native/android/PorterDuffView'
import {Props as AppProps} from '../../types/component'

interface Props extends AppProps {
  callback?: any
}
export default (props: Props)=> {

  //fixme callback was removed by mistake

  return(
    <View style={[styles.container, styles.center, {backgroundColor: primaryDark}]}>
      {/*<Image source={require('../../images/syncretism_logotype.png')}/>
      <Image source={require('../../images/syncretism_logo.png')}/>*/}
      {/*<ActivityIndicator color={accent} size={"large"}/>*/}
      <PorterDuffView
        style={{width: 100, height: 100}}
        url={"https://cdn.legalcheek.com/wp-content/uploads/2017/10/LawyerDog.jpg"}
      />
    </View>
  )
}
