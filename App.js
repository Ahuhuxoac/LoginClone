import RootNavigator from "./src/RootNavigation";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';

export default function App() {
  return (   
    <Provider store={store}>
     <StatusBar barStyle = "light-content" 
     hidden = {false} 
     backgroundColor = "#2D3748" 
     translucent = {true}/>
      <RootNavigator />
    </Provider>
  );
}
