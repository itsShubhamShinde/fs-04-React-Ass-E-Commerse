import React from 'react'
import '../Style/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2>Redux App..</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/addtocart'>Add to Cart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar