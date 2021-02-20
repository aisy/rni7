import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigator from library
import { createStackNavigator } from '@react-navigation/stack';

// import halaman
import Home from '../pages/Home';
import List from '../pages/List';

// membuat navigator berdasarkan 
const Stack = createStackNavigator();

const Router = () => {
  return (
    // membuat container
    <NavigationContainer>

      {/* membuat stack */}
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"List"} component={List} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Router