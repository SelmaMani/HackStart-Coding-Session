import React from 'react'
import NavbarTitle from './Navbar.title'

export default function Navbar() {
  return (
   <div className="navbar flex  items-center justify-center gap-4 md:gap-10 p-8  m-4">
        <NavbarTitle title='Home' id='hero' />
        <NavbarTitle title='HackStart' id='hackstart' />
        <NavbarTitle title='Agenda' id='agenda' />
        <NavbarTitle title='Why participating?' id='participating' />
        <NavbarTitle title='About ETC' id='about'/>
   </div>
  )
}
