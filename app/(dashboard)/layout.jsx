import React from 'react'
// components
import Navbar from '@/app/components/Navbar'
export default function DashBoardLayout({children}) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
