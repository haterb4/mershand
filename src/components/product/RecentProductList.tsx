"use client"
import React from 'react'
import SideContainerLayout from '../SideContainerLayout'
import RecentProduct from './RecentProduct'

const RecentProductList = () => {
  return (
    <SideContainerLayout title='Recent Products ' height={770} width={300}>
        <div className='w-full h-full px-2'>
            <RecentProduct imageName='pexels-pixabay-280250.jpg'/>
            <RecentProduct />
            <RecentProduct />
            <RecentProduct />
            <RecentProduct />
            <RecentProduct />
            <RecentProduct />
        </div>
    </SideContainerLayout>
  )
}

export default RecentProductList