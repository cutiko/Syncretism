import {createStackNavigator, NavigationRouteConfigMap} from "react-navigation";
import SplashScreen from "./component/splash/SplashScreen";

export const HomeScreen = "HomeScreen"
export const WelcomeScreen = "WelcomeScreen"

const map : NavigationRouteConfigMap = {}
map[HomeScreen] = {screen: SplashScreen}
map[WelcomeScreen] = {screen: WelcomeScreen}

export default createStackNavigator(map)
