import {AsyncStorage} from "react-native";
import {auth, Error, Login, NoSession} from "./SplashScreen";
import Auth0, {Options} from "react-native-auth0";

const CREDENTIALS = "CREDENTIALS_KEY"
export const options : Options = {domain: 'cutiko.auth0.com', clientId: 'VoGh1xi1OtJbQx87wc2Ip0Ylnpq0qK99'}

export async function getSession() : Promise<auth> {
  const local = await AsyncStorage.getItem(CREDENTIALS)
  if (local) {
    const auth0 = new Auth0(options);
    const parsed = JSON.parse(local)
    try {
      await auth0.auth.userInfo({token: parsed.credentials.accessToken})
      return parsed
    } catch (error) {
      return {type: Error, error}
    }
  } else {
    return new NoSession()
  }
}

export const saveSession : Function = (login : Login)=> AsyncStorage.setItem(CREDENTIALS, JSON.stringify(login))
