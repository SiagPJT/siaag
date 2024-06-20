import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";
import Data from "../Screens/Data";
import MC from "../Screens/MC";
import Pg from "../Screens/Pg";
import Tut from "../Screens/Tut";
import ptemp from "../Screens/ptemp";
import Plumi from "../Screens/Plumi";
import Pphi from "../Screens/Pphi";
import Signup from "../Screens/Signup";
import Loginf from "../Screens/Loginf";








import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()
export default function routes() {
 
  return (
   <NavigationContainer>
   <Stack.Navigator>
  
  <Stack.Screen
   name="Loginf"
   component = {Loginf}
   options={{hearderShown:false}}
  />
    <Stack.Screen
   name="Signup"
   component = {Signup}
   options={{hearderShown:false}}
  />
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
   name="Pg"
   component={Pg}
   options={{headerShown: false}}
  />
  <Stack.Screen
   name="Tut"
   component={Tut}
   options={{headerShown: false}}
  />
  <Stack.Screen
   name="ptemp"
   component={ptemp}
   options={{headerShown: false}}
  />
  <Stack.Screen
   name="plumi"
   component={Plumi}
   options={{headerShown: false}}
  />
  <Stack.Screen
   name="pphi"
   component={Pphi}
   options={{headerShown: false}}
  />
  
    
   </Stack.Navigator>

   </NavigationContainer>
  );

}