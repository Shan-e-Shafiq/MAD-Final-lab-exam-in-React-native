import * as Native from 'react-native'
import * as Icon from "react-native-feather";
import React from 'react'

export default function Header() {
  return (
    <Native.View className='bg-[#ffffff]'>
      <Native.View className='mt-[50px] flex flex-row justify-between items-center px-4 pb-5'>
        <Native.View>
          <Native.Text className='text-primaryText text-[30px] font-semibold'>Hello, Shan</Native.Text>
          <Native.Text className='text-secondaryText text-[20px]'>What you want to eat today?</Native.Text>
        </Native.View>
        <Native.View className='w-[50px] h-[50px] rounded-full bg-primaryText flex justify-center items-center'>
          <Icon.User width={35} height={35} fill={'white'} />
        </Native.View>
      </Native.View>
    </Native.View>
  )
}