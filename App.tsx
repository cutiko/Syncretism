import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Auth0 from 'react-native-auth0';


//TODO https://manage.auth0.com/dashboard/us/cutiko/applications/VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99/quickstart
//TODO https://github.com/auth0-samples/auth0-react-native-sample/blob/Embedded/01-Custom-Form/app/components/Login.js
//TODO update IOS
//TODO debugger https://github.com/jhen0409/react-native-debugger coolest debugger
interface Props{};

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
      this.login()
  }


  login : Function = async ()=> {
    const auth0 = new Auth0({domain: 'cutiko.auth0.com', clientId: 'VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99'})
    try {
      const result = await auth0
        .webAuth
        .authorize({scope: 'openid profile email', audience: 'https://cutiko.auth0.com/userinfo'})
      this.setState({login:JSON.stringify(result)})
    } catch (e) {
      this.setState({login:JSON.stringify(e)})
    }
    console.log(this.state.login)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>{this.state.login}</Text>
        </ScrollView>
      </View>
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
