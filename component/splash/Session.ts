import {AsyncStorage} from "react-native";
import {Login, NoSession} from "./SplashScreen";
import Auth0, {Options} from "react-native-auth0";

const CREDENTIALS = "CREDENTIALS_KEY"
export const options : Options = {domain: 'cutiko.auth0.com', clientId: 'VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99'}

export async function getSession() : Promise<Login | NoSession> {
  const login = await AsyncStorage.getItem(CREDENTIALS)
  if (login) {
    const auth0 = new Auth0(options);
    const parsed = JSON.parse(login)
    const {credentials:{accessToken}} = parsed
    try {
      await auth0.auth.userInfo({token: accessToken})
      return parsed
    } catch (e) {
      return new NoSession()
    }
  } else {
    return new NoSession()
  }
}

export const saveSession : Function = (login : Login)=> AsyncStorage.setItem(CREDENTIALS, JSON.stringify(login))
