import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Home from './Home';
import Login from './Login';

import Setup from './Setup';
import Waiting from './Waiting'
import Welcom from './welcom'

import Chat from './Chat'
import ChatList from './Chatlist'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="7" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="1" component={HomeScreen} />
        <Stack.Screen name="2" component={DetailsScreen} />
          <Stack.Screen name="3" component={Home} />
           <Stack.Screen name="4" component={Login} />
           <Stack.Screen name="5" component={Setup} />
            <Stack.Screen name="6" component={Waiting} />
<Stack.Screen name="7" component={Welcom} />
<Stack.Screen name="8" component={Chat} />
<Stack.Screen name="9" component={ChatList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
