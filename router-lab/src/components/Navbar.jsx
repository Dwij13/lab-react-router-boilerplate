import React from 'react'
import "./../App.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='innerElement'>
        <div>
        <Link style={{textDecoration:"none"}} to={"/"}><img src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png'/></Link>
            
        </div>
        <div className='routes'>
           <Link style={{textDecoration:"none",color:'white'}} to={"/about"}><p>About</p></Link>
           <Link style={{textDecoration:"none",color:'white'}} to={"/contact"}><p>Contact</p></Link> 
            
        </div>
      </div>
    </div>
  )
}
