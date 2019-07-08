import {createStackNavigator, NavigationRouteConfigMap} from "react-navigation";
import SplashScreen from "./component/splash/SplashScreen";
import WelcomeScreen from "./component/WelcomeScreen";
import DemoScreen from "./component/demo/DemoScreen";

export const HOME_SCREEN = "HOME_SCREEN"
export const WELCOME_SCREEN = "WELCOME_SCREEN"
export const DEMO_SCREEN = "DEMO_SCREEN"

const map : NavigationRouteConfigMap = {}
map[HOME_SCREEN] = {screen: SplashScreen}
map[WELCOME_SCREEN] = {screen: WelcomeScreen}
map[DEMO_SCREEN] = {screen: DemoScreen}

export default createStackNavigator(map)
