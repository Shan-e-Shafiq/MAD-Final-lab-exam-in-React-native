import * as Native from 'react-native'
import React from 'react'

export default function ItemCard() {
  return (
    <Native.TouchableOpacity className='w-[47%] h-[150px] border rounded-lg p-2'>
      <Native.Text>ItemCard</Native.Text>
    </Native.TouchableOpacity>
  )
}