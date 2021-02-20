import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigator from library
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import halaman
import Home from '../pages/Home';
import List from '../pages/List';

// membuat navigator berdasarkan 
const BottomTab = createBottomTabNavigator();

const Router = () => {
  return (
    // membuat container
    <NavigationContainer>

      {/* membuat drawer */}
      <BottomTab.Navigator>
        <BottomTab.Screen name={"Home"} component={Home} />
        <BottomTab.Screen name={"List"} component={List} />
      </BottomTab.Navigator>


    </NavigationContainer>
  )
}

export default Router