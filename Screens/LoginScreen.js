import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>GetStartedScreen</Text>
      <Pressable onPress={() => { navigation.navigate('HomeScreen') }}><Text>Click</Text></Pressable>
    </View>
  )
}