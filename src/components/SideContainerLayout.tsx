import { More } from 'iconsax-react'
import React from 'react'
import Button from './Button'
type Props = {
    height: number,
    title: string,
    children: React.ReactNode
}

const SideContainerLayout = ({height, children, title}:Props) => {
  return (
    <section className={`w-[286px] radius bg-white shadow-d flex flex-col justify-between items-start mt-8 overflow-hidden pb-2`} style={{height: `${height}px`}}>
        <div className='w-full radius-top h-16 flex justify-between items-center px-3'>
            <h1 className='poppins-medium'>{title}</h1>
            <Button height={24} width={24} round={11} bg='bg-white'>
                <More color="#000000"/>
            </Button>
        </div>
        <div className='w-full h-full m-auto mt-0 overflow-hidden px-2'>
          <div className={`scrollbar radius-bottom w-full h-full overflow-x-hidden py-2`}>
            {children}
          </div>
        </div>
    </section>
  )
}

export default SideContainerLayout