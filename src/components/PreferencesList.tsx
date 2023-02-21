/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { CloseCircle } from 'iconsax-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SideContainerLayout from './SideContainerLayout'

import PreferenceProps from '@/types/preference'

const Preference = ({name, id, onClick}:PreferenceProps) => {
    return (
        <Link href={"/"} className="h-8 flex items-center justify-between mx-2 bg-zinc-300 radius">
            <span className='ml-1'>{name}</span>
            <button onClick={onClick}><CloseCircle color="#ffffff"/></button>
        </Link>
    )
}

const PreferencesList = ({preferences}:{preferences: GroupLinkProps[]}) => {
    const [allPreferences, setAllPreferences] = useState<GroupLinkProps[]>(preferences)
    const [spliceIndex, setSpliceIndex] = useState<number>(-1)
    useEffect(() => {
        if(spliceIndex >=0){
            const tmp = allPreferences
            tmp.splice(spliceIndex, 1)
            setAllPreferences(tmp)
        }
        setSpliceIndex(-1)
    }, [spliceIndex])
    return (
        <SideContainerLayout title='Preferences' height={300}>
            <div className='w-full h-full flex flex-wrap'>
                {allPreferences.map((group:GroupLinkProps, index: number) => {
                    return (
                        <Preference name={group.name} id={group.id} key={group.id} onClick={() => { setSpliceIndex(index) }}/>
                    )
                })}
            </div>
        </SideContainerLayout>
    )
}

export default PreferencesList