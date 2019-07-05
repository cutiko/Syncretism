import React, {Component} from 'react'
import Auth0 from 'react-native-auth0';
import {Props} from "../../types/component";
import PlaceHolder from "./PlaceHolder";
import LoginFail from "./LoginFail";
import {WELCOME_SCREEN} from "../../Navigator";
import {getSession, options, saveSession} from "./Session";
import {auth, Error, Loged, Login, NoSession} from "../../models/session/Session";

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
