import React from 'react';
import {requireNativeComponent} from "react-native";

const PorterDuffView = requireNativeComponent('PorterDuffView');

interface Style {
  width: number
  height: number
}
interface Urls {
  destination : string
  source : string
}

interface Props {
  style: Style
  urls: Urls
}

export default ({style, urls: {destination, source}}: Props)=> {

  //fixme cant use the constants PorterDuffView.DESTINATION or SOURCE without getting linted
  return (
    <PorterDuffView
      style={[style]}
      urls={{DESTINATION: destination, SOURCE: source}}
    />
  )
}


