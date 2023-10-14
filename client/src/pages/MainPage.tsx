import React from 'react'

interface MainPageProps {
    children?: React.ReactNode
}

export default function MainPage({children}: MainPageProps) {
  return (
    <div className='main-container'>
        {children}
    </div>
  )
}
