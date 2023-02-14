import { Clock, LogoutCurve, Translate, UserSquare } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='absolute top-[80px] right-[-12px] h-[360px] radius w-56 bg-violet flex flex-col justify-between items-start text-white'>
        <div className='w-full flex flex-col justify-center items-center py-3 h-[170px] radius-top'>
            <div className='relative w-[92px] h-[92px] rounded-full'>
                <Image src="/images/mekena.jpg" alt='Mekena viannie' fill={true} className="!rounded-full" />
            </div>
            <p className='poppins-extrabold text-xl mt-2'>Mekena Viannie</p>
        </div>
        <div className='m-auto mt-0 mb-0 mx-0 flex flex-col overflow-hidden justify-center items-start text-white'>
            <Link href="/" className='flex justify-start items-center h-16 w-full px-3'>
                <UserSquare color="#d9e3f0"/>
                <span className='ml-3 poppins-bold'>My Profile</span>
            </Link>
            <Link href="/" className='flex justify-start items-center h-16 w-full px-3'>
                <Translate color="#d9e3f0"/>
                <span className='ml-3 poppins-bold'>Transactions</span>
            </Link>
            <Link href="/" className='flex justify-start items-center h-16 w-full px-3'>
                <Clock color="#d9e3f0"/>
                <span className='ml-3 poppins-bold'>Activity History</span>
            </Link>
        </div>
        <div className='w-full'>
            <button className='flex justify-start items-center h-16 w-full px-3'>
                <LogoutCurve color="#d9e3f0"/>
                <span className='ml-3 poppins-bold'>Log Out</span>
            </button>
        </div>
    </div>
  )
}

export default ProfileCard