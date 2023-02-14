"use client"
import { CloseCircle } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import SideContainerLayout from './SideContainerLayout'
import preferences from '@/datas/preferences'

const Preference = ({name, id}:GroupLinkProps) => {
    return (
        <Link href={"/"} className="h-8 flex items-center justify-between mx-2 bg-zinc-300 radius">
            <span className='ml-1'>{name}</span>
            <CloseCircle color="#ffffff"/>
        </Link>
    )
}

const PreferencesList = () => {
  return (
    <SideContainerLayout title='Preferencies' height={300}>
        <div className='w-full h-full flex flex-wrap'>
            {preferences.map((group:GroupLinkProps, index: number) => {
                return (
                    <Preference name={group.name} id={group.id} key={group.id}/>
                )
            })}
        </div>
    </SideContainerLayout>
  )
}

export default PreferencesList