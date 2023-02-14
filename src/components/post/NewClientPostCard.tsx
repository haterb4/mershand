"use client"

import { useWindowPosition } from '@/hooks/useScrool'
import { ArrowDown2, EmojiHappy, Gallery, Link1, VideoSquare } from 'iconsax-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../Button'

const CustomSelect = () => {
  const [seeOptions, setSeeOptions] = useState(false)
  const [selectValue, setselectValue] = useState("public")
  return (
    <div className='w-full h-full flex justify-center items-center text-[#d9d9d9] relative hover:text-black radius'>
      <span>{selectValue}</span>
      <Button onClick={() => setSeeOptions(!seeOptions)} outSide={() => setSeeOptions(false)} width={30} height={30} round={11} bg="bg-white"><ArrowDown2 color="#d9d9d9"/></Button>
      {seeOptions &&(
      <div className='w-full h-24 dropdown absolute top-12 left-0 bg-white flex flex-col items-start justify-center radius'>
        <button onClick={() => setselectValue('public')} className='w-full px-2 text-left hover-green-blue h-8 radius-top'>public</button>
        <button onClick={() => setselectValue('private')} className='w-full px-2 text-left hover-green-blue h-8'>private</button>
        <button onClick={() => setselectValue('friends')} className='w-full px-2 text-left hover-green-blue h-8 radius-bottom'>friends</button>
      </div>)}
    </div>
  )
}

const NewClientPostCard = () => {
  return (
    
    <div className='w-full h-[179px] bg-white radius my-8 flex flex-col justify-between items-center px-4 shadow-d'>
      <div className='w-full h-[100px] flex justify-between items-center'>
        <div className='!w-[60px] !h-[60px] relative rounded-full overflow-hidden'>
          <Image fill={true} alt="mekena viannie" src="/images/mekena.jpg"/>
        </div>
        <div className='bg-[#F9F9F9] h-[53px] radius w-[430px] flex justify-between items-center px-4'>
          <input type="text" placeholder='Share something or find it ...' className='text-[#7B7B83] h-full w-full outline-none bg-transparent'/>
          <button><EmojiHappy color="#000000"/></button>
        </div>
      </div>
      <div className='w-full h-[79px] flex justify-between items-center border-t'>
        <div className='h-full w-[320px] flex justify-between items-center'>
          <Button height={50} width={100} round={11} bg="bg-white">
            <div className='h-full w-full flex justify-start items-center'>
              <Gallery color="#000000"/>
              <span className='ml-3'>Image</span>
            </div>
          </Button>
          <Button height={50} width={100} round={11} bg="bg-white">
            <div className='h-full w-full flex justify-start items-center'>
              <VideoSquare  color="#000000"/>
              <span className='ml-3'>Image</span>
            </div>
          </Button>
          <Button height={50} width={100} round={11} bg="bg-white">
            <div className='h-full w-full flex justify-start items-center'>
              <Link1 color="#000000"/>
              <span className='ml-3'>Image</span>
            </div>
          </Button>
        </div>
        <div className='w-[80px] h-[65px] flex justify-center items-center'>
          <CustomSelect />
        </div>
      </div>  
    </div>
  )
}

export default NewClientPostCard