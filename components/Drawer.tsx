// DrawerNavigator.tsx

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from '../views/inicio';
import OTP from '../views/OTP';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Inicio} />
      <Drawer.Screen name="OPT" component={OTP} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
