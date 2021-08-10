import { StatusBar } from 'expo-status-bar';
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import "react-native-gesture-handler"

import Home from "./component/Home"
import Recording from "./component/Recording"
import Playback from "./component/Playback"

const Stack = createStackNavigator()

const App = (props) => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            option={{title: "Home"}}
          />
          <Stack.Screen 
            name="Recording"
            component={Recording}
            option={{title: "Recording"}}
          />
          <Stack.Screen 
            name="Playback"
            component={Playback}
            option={{title: "Playback"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
  
export default App