import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
     <nav className='flex gap-10 bg-red-200'>
        <Link to="/">Home</Link>
        <Link to="/Show">Show</Link>
        <Link to="/Services">Services</Link>
     </nav>
  
   
  )
};

export default Nav