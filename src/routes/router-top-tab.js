import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigator from library
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import halaman
import Home from '../pages/Home';
import List from '../pages/List';

// membuat navigator berdasarkan 
const TopTab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    // membuat container
    <NavigationContainer>

      {/* membuat drawer */}
      <TopTab.Navigator>
        <TopTab.Screen name={"Home"} component={Home} />
        <TopTab.Screen name={"List"} component={List} />
      </TopTab.Navigator>


    </NavigationContainer>
  )
}

export default Router