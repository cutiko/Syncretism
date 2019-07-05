import {createStackNavigator, NavigationRouteConfigMap} from "react-navigation";
import SplashScreen from "./component/splash/SplashScreen";
import WelcomeScreen from "./component/WelcomeScreen";

export const HOME_SCREEN = "HOME_SCREEN"
export const WELCOME_SCREEN = "WELCOME_SCREEN"

const map : NavigationRouteConfigMap = {}
map[HOME_SCREEN] = {screen: SplashScreen}
map[WELCOME_SCREEN] = {screen: WelcomeScreen}

export default createStackNavigator(map)
