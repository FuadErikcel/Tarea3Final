import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashView from './views/SplashView';
import Inicio from './views/inicio';
import OTP from './views/OTP';
import IngresarDatos from './views/IngresarDatos';
import Starbucks from './views/Starbucks';
import DrawerNavigator from './components/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
             name="Splash"
             component={SplashView}
             options={{ headerShown: false }}
          />
          <Stack.Screen
             name="Login" 
             component={Inicio}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="OTP"
             component={OTP}
             options={{
              headerTransparent: true,
              headerTitle: '',
              headerStyle:{backgroundColor:'transparent'}
             }}
           />
           <Stack.Screen
              name="DATOS"
              component={IngresarDatos}
              options={{
                headerTransparent: true,
                headerTitle: '',
                headerStyle:{backgroundColor:'transparent'}}
              }
           />
           
           <Stack.Screen
              name='Starbucks'
              component={Starbucks}
              options={{
                headerShown: false  
              }}
           />
        </Stack.Navigator>

        {/* <Drawer.Navigator>
          <Drawer.Screen name="Login" component={Inicio} />
          <Drawer.Screen name="OPT" component={OTP} />
        </Drawer.Navigator> */}
    </NavigationContainer>
  )



}

export default App;