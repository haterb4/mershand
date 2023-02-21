/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import { Heart, MessageNotif, Notification1, Shop, ShoppingCart, User } from 'iconsax-react'
import Button from './Button'
import NavbarSearch from './NavbarSearch'
import MessagesNotifier from './messages/MessagesNotifier'
import MessageNotificationProps from '@/types/messageNotification'
import { useDetectClickOutside } from 'react-detect-click-outside'
import AuthenticationLinks from './AuthenticationLinks'
import ProfileCard from './ProfileCard'
import Image from 'next/image'
import { useWindowPosition } from '@/hooks/useScrool'

const Navbar = () => {
    const [incommingMessages, setIncommingMessages] = useState<MessageNotificationProps[]>([])
    const [incomminMessagesVisible, setIncomminMessagesVisible] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [profileIsVisible, setProfileIsVisible] = useState(false)
    const [navbarIsFixed, setNavbarIsFixed] = useState(false)
    const [navbarFidedAnimation, setNavbarFidedAnimation] = useState(true)
    const [navbarPrevPosition, setNavbarPrevPosition] = useState(0)

    const getIncommingMessages = async () => {
        const res = await fetch(`/api/test/messages/incomming`)
        const data = await res.json()
        const messages:MessageNotificationProps[] = data.messages
        setIncommingMessages(messages)  
    }
    //refs
    const profileRef = useDetectClickOutside({ onTriggered: () => {setProfileIsVisible(false)} })
    //effects
    useEffect(() => {
        // Fetch data from external API
        setInterval(getIncommingMessages, 5000)
    }, [])
    const position = useWindowPosition()
    useEffect(() => {
        if(position <= 87){
            setNavbarIsFixed(false)
            if (navbarPrevPosition < position){
                setNavbarFidedAnimation(false)
                setTimeout(() =>{setNavbarFidedAnimation(true)}, 150)
            }
        }
        else{
            setNavbarIsFixed(true)
        }
        setNavbarPrevPosition(position)
    }, [position])
    return (
        navbarFidedAnimation &&(
            <nav className={`${styles.navbar} ${navbarIsFixed && 'fixed top-0 left-0'} z-50 bg-violet w-full flex justify-between items-center px-4`}>
                <div className={styles.brand+' flex justify-between items-center'}>
                    <Link href='/' className='poppins-extrabold uppercase text-2xl text-white'>Mershand</Link>
                    <div className='flex items-center'>
                    <div className={styles.noSmall+' relative bg-transparent flex justify-center items-center'}>
                        <Button height={48} width={48} round={11} className="hover-green-blue"
                            onClick={() => { setIncomminMessagesVisible(true)}}
                            outSide={() => { setIncomminMessagesVisible(false)}}
                        >
                            <MessageNotif color="#ffffff"/>
                        </Button>
                        {incomminMessagesVisible && <MessagesNotifier messagesNotifications={incommingMessages}/>}
                    </div>
                    <Button height={48} width={48} round={11} className={styles.noSmall+" hover-green-blue"}>
                        <Notification1 color="#ffffff"/>
                    </Button>
                    <Button height={48} width={48} round={11} className={styles.noSmall+" hover-green-blue"}>
                        <Shop color="#ffffff"/>
                    </Button>
                    <Button height={48} width={48} round={11} className={styles.noSmall+" hover-green-blue"}>
                        <Heart color="#ffffff"/>
                    </Button>
                    </div>
                </div>
                <NavbarSearch />
                <div className='flex items-center justify-between w-28 relative'>
                    <Button height={48} width={48} round={11} className={styles.noSmall+" hover-green-blue"}>
                        <ShoppingCart color="#ffffff"/>
                    </Button>
                    <div className='relative bg-transparent flex justify-center items-center'>
                        {isAuthenticated?
                        <button onClick={() => { setProfileIsVisible(true)}} ref={profileRef} className='relative w-[53px] h-[53px] rounded-full'>
                            <Image src="/images/mekena.jpg" alt='Mekena viannie' fill={true} className="!rounded-full" />
                        </button>
                        :<Button onClick={() => { setProfileIsVisible(true)}} outSide={()=> {setProfileIsVisible(false)}} height={48} width={48} round={100} circle={true} className="bg-green-blue">
                            <User size="24" color="#FFFFFF"/>
                        </Button>}
                        {(profileIsVisible && isAuthenticated) && <ProfileCard />}
                        {(profileIsVisible && !isAuthenticated) && <AuthenticationLinks />}
                    </div>
                </div> 
            </nav>
        )
    )
}

export default Navbar