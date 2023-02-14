"use client"

import { useWindowPosition } from '@/hooks/useScrool'
import React, { useEffect, useState } from 'react'

const NewClientPostCard = () => {
  const [componentIsFixed, setComponentIsFixe] = useState(false)
  const position = useWindowPosition()
  useEffect(() => {
    if(position <= 87){
        setComponentIsFixe(false)
    }
    else{
        setComponentIsFixe(true)
    }
  }, [position])
  return (
    
    <div className='w-full h-[179px] bg-white radius my-8 flex justify-center items-center'>
        <p>{position}</p>
    </div>
  )
}

export default NewClientPostCard