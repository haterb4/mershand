import { UserAdd, UserSquare } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

const AuthenticationLinks = () => {
  return (
    <div className='absolute top-[55px] right-[-12px] h-32 radius w-40 bg-white dropdown flex flex-col justify-between'>
        <Link href='/' className='h-16 w-full hover-green-blue flex justify-start items-center px-3 radius-top'>
            <UserSquare color="#000000"/>
            <span className='ml-3'>Login</span>
        </Link>
        <Link href='/' className='h-16 w-full hover-green-blue flex justify-start items-center px-3 radius-bottom'>
            <UserAdd color="#000000"/>
            <span className='ml-3'>Signup</span>
        </Link>
    </div>
  )
}

export default AuthenticationLinks