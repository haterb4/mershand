import ButtonProps from '@/types/button'
import React from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'

const Button = ({ children, height, width, fill, round, circle, fg, bg,className, onClick, outSide }:ButtonProps) => {
  const btnRef = useDetectClickOutside({ onTriggered: () => { outSide? outSide(): null } })
  const config = {
    height: fill? '100%':`${height}px`,
    width: fill? '100%':`${width}px`,
    borderRadius: circle? '100%':`${round}px`,
    backgroundColor: bg,
    color: fg
  }
  return (
    <button className={`flex justify-center items-center relative ${className}`} style={{...config}} onClick={onClick} ref={btnRef}>
        {children}
    </button>
  )
}

export default Button