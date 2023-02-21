"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../Button'
import CircleBarLoader from '../loaders/CircleBarLoader'

const RecentProduct = ({imageName}:{imageName?:string}) => {
    const [isPending, setIsPending] = useState(false)
  return (
    <div className='bg-white  radius h-[140px] flex flex-col justify-between items-start p-2 mb-3'>
        <div className='h-[70px] w-full flex justify-between items-center radius'>
            <div className='h-[70px] w-[70px] overflow-hidden radius relative'>
                <Image src={imageName? "/images/products/"+imageName:"/images/products/tomate.jpg"} fill={true} alt="product description"/>
            </div>
            <div className='h-[70px] w-[calc(100%-70px)] flex flex-col justify-start items-start p-2'>
                <h1 className='w-full poppins-medium'>Tomates paysannes</h1>
                <div className='w-full flex justify-between items-center mt-2 poppins-medium'>
                    <span style={{fontSize: '13px'}}>ROSEA SA</span>
                    <div className='h-2 w-2 bg-[#D9D9D9] rotate-45'></div>
                    <span className='text-violet' style={{fontSize: '13px'}}>77 days ago</span>
                </div>
            </div>
        </div>
        <div className='bg-white radius h-[45px] w-full flex justify-between items-center px-3'>
            <span className='poppins-extrabold text-xl'>5000 XAF</span>
            <Button onClick={() => setIsPending(!isPending)} width={69} height={35} round={11} className="text-white bg-violet">
                {isPending? <CircleBarLoader/>
                :<span>Order</span>
                }
            </Button>
        </div>
    </div>
  )
}

export default RecentProduct