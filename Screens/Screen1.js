import * as Native from 'react-native'
import * as Icon from "react-native-feather";
import React, { useRef, useState } from 'react'
import Header from '../Components/Header';
import Category from '../Components/Category';
import ItemCard from '../Components/ItemCard';

export default function Screen1() {

  const [Data, setData] = useState([
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
  ])

  return (
    <>
      <Header />

      {/* MAIN CONTAINER  */}

      <Native.View className=' bg-[#ffffff] flex-1'>

        {/* INPUT CONTAINER */}

        <Native.View className='flex-row justify-between h-[55px] px-4'>

          {/* INPUT FIELD */}

          <Native.View className=' bg-GreyColor flex-row items-center px-3 rounded-[15px]' style={{ flex: 0.95 }}>
            <Icon.Search width={35} height={35} stroke={'grey'} />
            <Native.TextInput className='h-full ml-2' placeholder='Search for food' style={{ flex: 0.99 }} />
          </Native.View>

          {/* INPUT BUTTON */}

          <Native.TouchableOpacity className='w-[55px] h-[55px] bg-buttonColor rounded-[15px] justify-center items-center'>
            <Icon.Sliders width={35} height={35} stroke={'white'} />
          </Native.TouchableOpacity>
        </Native.View>

        {/* CATEGORIES SCROLL VIEW */}

        <Native.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            gap: 10,
            marginTop: 10,
            paddingTop: 5,
            paddingVertical: 40,
          }}
        >
          <Category url={require('../assets/Foods/icons8-bbq-100.png')} name='Pizza' active={true} />
          <Category url={require('../assets/Foods/icons8-biryani-100.png')} name='Biryani' active={false} />
          <Category url={require('../assets/Foods/icons8-burger-100.png')} name='Burger' active={false} />
          <Category url={require('../assets/Foods/icons8-coke-100.png')} name='Drinks' active={false} />
          <Category url={require('../assets/Foods/icons8-dessert-100.png')} name='Desserts' active={false} />
        </Native.ScrollView>

        {/* ITEMS FLATLIST */}

        <Native.FlatList
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={Data}
          numColumns={2}
          // keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemCard />}
        />

      </Native.View >
    </>
  )
}
