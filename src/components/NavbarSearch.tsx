import { SearchNormal } from 'iconsax-react'
import React, { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'

const NavbarSearch = () => {
  const [focused, setFocused] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setFocused(false) }) 
  return (
    <div ref={ref} onClick={() => setFocused(true)} className={`h-[53px] w-[521px] bg-deep-violet rounded-[11px] flex justify-between items-center px-3 border border-[transparent] ${focused && 'border-[white]'}`}>
        <input type="text" className='bg-transparent h-full w-full outline-none text-white' placeholder='what are you looking for ?'/>
        <SearchNormal color={focused?"#FFFFFF":"#A7A4F4"}/>
    </div>
  )
}

export default NavbarSearch