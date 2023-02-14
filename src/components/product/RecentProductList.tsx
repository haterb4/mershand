"use client"
import React from 'react'
import SideContainerLayout from '../SideContainerLayout'
import RecentProduct from './RecentProduct'

const RecentProductList = () => {
  return (
    <SideContainerLayout title='Recent Products ' height={735}>
        <div className='w-full h-full'>
            <RecentProduct />
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