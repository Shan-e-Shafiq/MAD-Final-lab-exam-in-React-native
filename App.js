import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GetStartedScreen from './Screens/GetStartedScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import CartScreen from './Screens/CartScreen';
import GlobalContext from './Context/GlobalContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalContext>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='GetStartedScreen'
          screenOptions={{
            animation: 'slide_from_right',
            headerTitleAlign: 'center',
            // headerTransparent: true,
          }}
        >
          <Stack.Screen
            name="GetStartedScreen"
            component={GetStartedScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext>

  );
}