import React from 'react'
import {GiIndiaGate} from 'react-icons/gi'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <GiIndiaGate className='icon'/>
        <h1>Bharat<span className="purple">Crypto</span></h1>
      </div>
    </div>
  )
}

export default Navbar
