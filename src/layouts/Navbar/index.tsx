import { NextPage } from 'next'
import React from 'react'

// Implement navbar here
const NavBar :NextPage = ({children}) => {
  return (
   <div>
    <div>logo</div>
    {children}
   </div>
  )
}

export default NavBar