import React from 'react'
import {GiIndiaGate} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (      
      <Link to='/'>
        <div>
          <div className="navbar">
            <GiIndiaGate className='icon'/>
            <h1>Bharat<span className="purple">Crypto</span></h1>
          </div>
        </div>
      </Link>
  )
}

export default Navbar
