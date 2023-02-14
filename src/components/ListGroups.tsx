"use client"
import userGroups from '@/datas/usergroups'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SideContainerLayout from './SideContainerLayout'
interface GProps extends GroupLinkProps {
    idColor: string;
}

const GroupLink = ({name, id, idColor}:GProps) => {
    const [initials, setInitials] = useState("")
    useEffect(() =>{
        let initial = name[0]
        const subwords = name.split(" ")
        if (subwords.length >=2){
            initial = subwords[0][0].toUpperCase() + subwords[subwords.length-1][0].toUpperCase()
        }
        setInitials(initial)
    },[name])
    return (
        <Link href={"/"} className="w-full h-16 flex items-center px-2">
            <div className={idColor+' w-10 h-10 radius poppins-bold text-xl text-white flex justify-center items-center'}>{initials}</div>
            <span className='ml-3'>{name}</span>
        </Link>
    )
}

const ListGroups = () => {
  const colors = ['bg-orange-500', 'bg-pink-500', 'bg-blue-500', 'bg-green-500']
  return (
    <SideContainerLayout title='Forums Groupes' height={250}>
        <div className='w-full h-full'>
            {userGroups.map((group:GroupLinkProps, index: number) => {
                return (
                    <GroupLink name={group.name} id={group.id} key={group.id} idColor={colors[index%colors.length]}/>
                )
            })}
        </div>
    </SideContainerLayout>
  )
}

export default ListGroups