import RootNavigator from "./src/RootNavigation";
import {store} from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Nippo-Light': require('./assets/font/Nippo-Light.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (   
      <Provider store={store}>
        <StatusBar barStyle = "light-content" 
          hidden = {false} 
          backgroundColor = "#2D3748" 
          translucent = {true}/>
        <RootNavigator />
    </Provider>
  )
}
