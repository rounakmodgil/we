import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Login from './Pages/login';
import Signup from './Pages/singup';
import Home from './Pages/home';
import Bye from './Pages/bye';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Add from './Pages/Add';
import Profile from './Pages/Profile';
import Explore from './Pages/explore';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
  const Homestack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="explore" component={Explore} />
    </Stack.Navigator>
  );
  return (
<NavigationContainer>
<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={Homestack}
    options={{
      title: 'Home',
    }}
  />
  <Tab.Screen
    name="Add"
    component={Add}
    options={{
      title: 'Add',
    }}
  />
  <Tab.Screen
    name="Profile"
    component={Profile}
    options={{
      title: 'Profile',
    }}
  />

</Tab.Navigator>

</NavigationContainer> 
  );
}

{/* <NavigationContainer>
{false && <Loginstack/>}
{true && 
<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={Home}
    options={{
      title: 'Home',
    }}
  />
  <Tab.Screen
    name="Add"
    component={Add}
    options={{
      title: 'Add',
    }}
  />
  <Tab.Screen
    name="Profile"
    component={Profile}
    options={{
      title: 'Profile',
    }}
  />

</Tab.Navigator>
}
</NavigationContainer> */}