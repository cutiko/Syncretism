import React, {Component} from 'react'
import Auth0 from 'react-native-auth0';
import {Props} from "../../types/component";
import PlaceHolder from "./PlaceHolder";
import LoginFail from "./LoginFail";
import {WELCOME_SCREEN} from "../../Navigator";
import {getSession, options, saveSession} from "./Session";

const Loged : string = "Loged"
interface Credentials {
  accessToken: string
  idToken: string
  scope: string
  expiresIn: number,
  tokenType: string
}
export interface Login {
  type: typeof Loged
  credentials: Credentials
}

export const Error : string = "Error"
interface Error {
  type: typeof Error
  error: {}
}

export class NoSession {
  type = null
}

export type auth = Login | Error | NoSession

export interface State {
  loading: boolean
  auth: auth
}

export default class SplashScreen extends Component<Props, State> {

  static navigationOptions = {header: null}

  constructor(props : Props) {
      super(props);
      this.state = {
        loading: true,
        auth: new NoSession()
      };
      this.restoreData()
  }


  restoreData = async ()=> {
    const auth = await getSession()
    this.setState({loading: false, auth})
  }

  login : Function = async ()=> {
    try {
      const auth0 = new Auth0(options);
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://cutiko.auth0.com/userinfo'
      })
      const auth : Login = {type: Loged, credentials}
      this.setState({auth})
      saveSession(auth)
    } catch (error) {
      this.setState({auth:{type: Error, error}})
    }
  }

  goToWelcome : Function = ()=> this.props.navigation.navigate(WELCOME_SCREEN)

  render() {
    const {loading, auth} = this.state
    if (loading) return (<PlaceHolder/>)
    switch (auth.type) {
      case Error:
        return (<LoginFail callback={()=>this.login}/>)
      case Loged:
        return (<PlaceHolder callback={()=>this.goToWelcome}/>)
      default:
        return (<PlaceHolder callback={()=>this.login}/>);
    }
  }

}
