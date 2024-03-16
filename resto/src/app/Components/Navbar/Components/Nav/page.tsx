import React from 'react'
import '../Nav/sc.css'
import Link from 'next/link'
export default function page() {
  return (
    <><div className="bodymenu">
      <nav>
        <ul className='menu'>
         <Link href='/Components/Navbar/BBQs' id='ul' >BBQ</Link>
         <Link href='/Components/Navbar/Tikka' id='ul' >TIKKA</Link>
         <Link href='/Components/Navbar/BBQ' id='ul' >BURGERS</Link>
         <Link href='/Components/Navbar/Sandwitches' id='ul' >SANDWITCHES</Link>
         <Link href='/Components/Navbar/SoftDrinks' id='ul' >SOFT-DRINKS</Link>
        </ul>
      </nav>


      </div>
    </>
  )
}
