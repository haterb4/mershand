import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const RecentProduct = () => {
  return (
    <div className='bg-[#FAFAFA] radius h-[150px] flex flex-col justify-between items-start p-2 mb-4'>
        <div className='h-[70px] w-full flex justify-between items-center'>
            <div className='h-[70px] w-[70px] overflow-hidden radius relative'>
                <Image src="/images/tomate.jpg" fill={true} alt="product description"/>
            </div>
            <div className='h-[70px] w-[calc(100%-70px)] flex flex-col justify-start items-start p-2'>
                <h1 className='w-full poppins-medium'>Tomates paysannes</h1>
                <div className='w-full flex justify-between items-center'>
                    <span style={{fontSize: '13px'}}>ROSEA SA</span>
                    <div className='h-2 w-2 bg-[#D9D9D9] rotate-45'></div>
                    <span style={{fontSize: '13px'}}>77 days ago</span>
                </div>
            </div>
        </div>
        <div className='bg-white radius h-[45px] w-full flex justify-between items-center px-3'>
            <span className='poppins-extrabold text-xl'>5000 XAF</span>
            <Button width={69} height={35} round={11} className="text-white bg-violet">
                <span>Order</span>
            </Button>
        </div>
    </div>
  )
}

export default RecentProduct