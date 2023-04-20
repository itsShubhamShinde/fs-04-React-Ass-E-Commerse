import React from 'react'
import '../Style/Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const { Addtocart } = useSelector((state) => state.MoviDetails)
  

  return (
    <div className='Navbar'>
        <h2>Redux App..</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/addtocart'>Add to Cart {Addtocart.length}</Link></li>
        </ul>
    </div>
  )
}

export default Navbar