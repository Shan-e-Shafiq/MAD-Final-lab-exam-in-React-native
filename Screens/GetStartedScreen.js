import * as Native from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function GetStartedScreen() {
  const navigation = useNavigation()

  return (
    <Native.View className='flex-1 justify-center items-center bg-CreamyColor'>
      {/* IMAGE */}
      <Native.Image source={require('../assets/fastfood.png')} className='scale-[0.6]' />
      {/* DIALOG */}
      <Native.View className='mt-[-100px] p-10'>
        <Native.Text className='text-[34px] font-semibold text-center'>Delicious Food</Native.Text>
        <Native.Text className='text-[16px] text-center text-secondaryText'>We help you find best and delicous food at your doorstep</Native.Text>
      </Native.View>
      {/* GET STARTED BUTTON */}
      <Native.TouchableOpacity className=' bg-buttonColor px-[75px] py-[13px] rounded-[1000px] absolute bottom-8 shadow-lg shadow-[#000000]'
        onPress={() => { navigation.navigate('HomeScreen') }}
      >
        <Native.Text className='text-[#ffffff] font-semibold text-[20px]'>GET STARTED</Native.Text>
      </Native.TouchableOpacity>
    </Native.View >
  )
}