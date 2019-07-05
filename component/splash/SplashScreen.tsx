import React, {Component} from 'react'
import {View} from "react-native";
import styles from "../../theme/styles";
import Auth0 from 'react-native-auth0';
import {Props} from "../../types/component";
import PlaceHolder from "./PlaceHolder";
import LoginFail from "./LoginFail";

const Loged : string = "Loged"
interface Credentials {
  accessToken: string
  idToken: string
  scope: string
  expiresIn: number,
  tokenType: string
}
interface Login {
  type: typeof Loged
  credentials: Credentials
}

const Error : string = "Error"
interface Error {
  type: typeof Error
  error: {}
}

class NoData {
  type = null
}

type auth = Login | Error | NoData

interface State {
  auth: auth
}

export default class SplashScreen extends Component<Props, State> {

  static navigationOptions = {header: null}

  constructor(props : Props) {
      super(props);
      this.state = {auth: new NoData()};
  }

  login : Function = async ()=> {
    const auth0 = new Auth0({domain: 'cutiko.auth0.com', clientId: 'VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99'});
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://cutiko.auth0.com/userinfo'
      })
      const auth : Login = {type: Loged, credentials}
      this.setState({auth})
    } catch (error) {
      this.setState({auth:{type: Error, error}})
    }
  }

  render() {
    const {auth} = this.state
    switch (auth.type) {
      case Error:
        return (<LoginFail callback={()=>this.login}/>)
      case Loged:
        return (<View style={[{backgroundColor:'green'}, styles.container]}/>)
      default:
        return (<PlaceHolder callback={()=>this.login}/>);
    }
  }

}
