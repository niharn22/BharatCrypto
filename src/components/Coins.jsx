import React, { useState } from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
import '../styles/Coins.css'

const Coins = (props) => {
  const [search,setSearch] = useState('') 
  return (
    <div className='container' >
          <div className='search-div'>
            <input className='search' onChange={(e) => setSearch(e.target.value)} placeholder='Search' style={{ backgroundColor: '#26272b', color: 'white'}}/>
          </div>
          <div>
            <div className="heading"> 
              <p>#</p>
              <p className='coin-name'>Coin</p>
              <p>Price(in ₹)</p>
              <p>24h</p>
              <p className='hide-mobile'>Volume</p>
              <p className='hide-mobile'>Mkt Cap</p>
            </div>        
            {props.coins.filter((coins) => {
              return search.toLowerCase() === '' ? coins : coins.name.toLowerCase().includes(search)
            }).map((coins)=>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                      <CoinItem coins={coins} key={coins.id}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins
