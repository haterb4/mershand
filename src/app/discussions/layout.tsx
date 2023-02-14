import React from 'react'
import RootLayout from '../layout'

const DiscussionLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <RootLayout>
        <div>DiscussionLayout</div>
        {children}
    </RootLayout>
  )
}

export default DiscussionLayout