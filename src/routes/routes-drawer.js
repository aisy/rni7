import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigator from library
import { createDrawerNavigator } from '@react-navigation/drawer';

// import halaman
import Home from '../pages/Home';
import List from '../pages/List';

// membuat navigator berdasarkan 
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    // membuat container
    <NavigationContainer>

      {/* membuat drawer */}
      <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={Home} />
        <Drawer.Screen name={"List"} component={List} />
      </Drawer.Navigator>


    </NavigationContainer>
  )
}

export default Router