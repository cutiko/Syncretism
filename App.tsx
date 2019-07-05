import React from 'react';
import {StyleSheet} from 'react-native';

import Auth0 from 'react-native-auth0';
import SplashScreen from './component/splash/SplashScreen'

const auth0 = new Auth0({domain: 'cutiko.auth0.com', clientId: 'VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99'})


//TODO update IOS
interface Props{}

interface State {
  login: string | null
}
class Login extends React.Component<Props, State>{

  constructor(props : Props) {
    super(props)
    this.state = {
      login: null
    }
  }
}

//test@test.com
//12345678Aa


export default class App extends React.Component<Props, State> {

  constructor(props : Props) {
      super(props)
      this.state = {
          login: null
      }
  }


  signUp : Function = async ()=> {
    try {
      const result = await auth0.auth.createUser({
        email: "test@test.com",
        password: "12345678Aa!",
        connection: "Username-Password-Authentication"
      })
      this.setState({login:JSON.stringify(result)})
    } catch (e) {
      this.setState({login:JSON.stringify(e)})
    }
    console.log("SIGNUP_RESPONSE", this.state.login)
  }

  login : Function = async ()=> {
    try {
      const result = await auth0.auth.passwordRealm({
        username: "test@test.com",
        password: "12345678Aa!",
        realm: 'Username-Password-Authentication',
        scope: "openid profile email"
      })
      this.setState({login:JSON.stringify(result)})
    } catch (e) {
      this.setState({login:JSON.stringify(e)})
    }
    console.log("LOGIN_RESPONSE", this.state.login)
  }

  render() {
    return (
      <SplashScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
