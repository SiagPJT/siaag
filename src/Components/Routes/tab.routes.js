import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";
import Data from "../Screens/Data";
import MC from "../Screens/MC";
import pg from "../Screens/pg";
import tut from "../Screens/tut";



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()
export default function routes() {
 
  return (
   <NavigationContainer>
   <Stack.Navigator>

   
   
  <Stack.Screen
   name="Welcome"
   component = {Welcome}
   options={{hearderShown:false}}
  />
  <Stack.Screen
   name="Home"
   component={Home}
   options={{headerShown:false}}
  />
  <Stack.Screen
   name="Data"
   component={Data}
   options={{headerShown: false}}
  />
   <Stack.Screen
   name="MC"
   component={MC}
   options={{headerShown: false}}
  />
   <Stack.Screen
   name="pg"
   component={pg}
   options={{headerShown: false}}
  />
  <Stack.Screen
   name="tut"
   component={tut}
   options={{headerShown: false}}
  />
    
   </Stack.Navigator>

   </NavigationContainer>
  );

}