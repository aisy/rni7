import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import halaman
import Home from '../pages/Home';
import List from '../pages/List';

// membuat stack
const Stack = createStackNavigator();

const Router = () => {
  return (
    // membuat container
    <NavigationContainer>
      {/* membuat stack */}
      <Stack.Navigator>
        {/* membuat list Screen */}
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"List"} component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router