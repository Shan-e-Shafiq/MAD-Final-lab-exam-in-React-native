import * as Icon from "react-native-feather";
import * as Native from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Theme from "../Theme"

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: Theme.buttonColor,
          tabBarInactiveTintColor: 'grey',
          tabBarHideOnKeyboard: true
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1}
          options={{
            tabBarIcon: (focused) => {
              return <Icon.Grid width={25} height={25} fill={focused.color} stroke={focused.color} />
            },
          }}
        />
        <Tab.Screen name="Screen2" component={Screen2}
          options={{
            tabBarIcon: (focused) => {
              return <Icon.Heart width={25} height={25} fill={focused.color} stroke={focused.color} />
            },
          }}
        />
        <Tab.Screen name="Screen3" component={Screen3}
          options={{
            tabBarIcon: (focused) => {
              return <Icon.MessageSquare width={25} height={25} fill={focused.color} stroke={focused.color} />
            },
          }}
        />
        <Tab.Screen name="Screen4" component={Screen4}
          options={{
            tabBarIcon: (focused) => {
              return <Icon.User width={25} height={25} fill={focused.color} stroke={focused.color} />
            },
          }}
        />
      </Tab.Navigator>
    </>
  )
}