import MessageProps from '@/types/Message'
import Link from 'next/link'
import React from 'react'

const MessageNotification = ({ message, idColor }:MessageProps) => {
   
  return (
    <Link href='' className='w-full h-16 flex justify-start items-center px-1'>
        <div className={idColor+' h-10 w-10 flex justify-center items-center poppins-extrabold text-lg text-white radius'}>NK</div>
        <p className='pl-2 poppins-regular text-base'>How are you guys ?</p>
    </Link>
  )
}

export default MessageNotification