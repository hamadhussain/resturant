import React from 'react'
import '../Navbar/style.css'
import Link from 'next/link'

export default function page(props) {
  return (
    <><div className="body">
      <nav>
        <h1 className='h1'>
          {props.title}
        </h1>
        <ul className='ul'>
         <Link href="/" id='ul' >Home</Link>
         <Link href='/Components/Contact' id='ul' >Contact</Link> 
         <Link href='/Components/About' id='ul' >About</Link> 
          <Link href='/Components/Info' id='ul' >Info</Link> 
        </ul>
      </nav>
      {/* <button className='btn'>ORDER NOW</button> */}
      </div>
    </>
  )
}
