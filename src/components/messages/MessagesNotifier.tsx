import React, { useState } from 'react'
import styles from '@/styles/messagesnotifier.module.css'
import MessageNotification from './MessageNotification'
import MessageNotifierProps from '@/types/messageNotifier'
import Link from 'next/link'


const MessagesNotifier = ({ messagesNotifications }:MessageNotifierProps) => {
  const colors = ['bg-orange-500', 'bg-pink-500', 'bg-blue-500', 'bg-green-500']
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={styles.dropdown +' absolute top-[55px] w-60 h-[335px] bg-white radius flex flex-col justify-between items-start overflow-hidden'}>
        <div className='w-full h-16 bg-green-blue radius-top flex justify-between items-center px-3'>
            <h1 className='text-xl text-white poppins-medium'>New Messages</h1>
            <span className='h-8 w-9 flex justify-center items-center bg-red-500 text-white radius'>{messagesNotifications.length >6? '6+':messagesNotifications.length}</span>
        </div>
        <div className='w-full m-auto mt-0 mb-0 h-full overflow-hidden'>
          {messagesNotifications.map((message, index) =>{
            return (
              <MessageNotification key={message.id} message={{
                id: message.id,
                senderName: "Bradley Anzie",
                duration: "2",
                content: "Hello guys"
              }} idColor={colors[index%colors.length]}/>
            )
          })}
        </div>
        <div className='h-12 w-full flex items-center px-3 border-t'>
          <Link href="/" className='text-violet'>View All</Link>
        </div>
    </div>
  )
}

export default MessagesNotifier