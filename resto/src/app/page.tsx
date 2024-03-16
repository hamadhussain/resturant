import Image from 'next/image'
import Nav from './Components/Navbar/Components/Nav/page'
import  Tikka  from "./Components/Navbar/Tikka/page";
import BBQ from './Components/Navbar/BBQ/page'
import BBQs from './Components/Navbar/BBQs/page'
import Sandwitches from './Components/Navbar/Sandwitches/page'
import Drinks from './Components/Navbar/SoftDrinks/page'
import Link from 'next/link';
import './globals.css'
// console.log("sdds");

export default function Home() {
  return (
  <>
    <Nav/>
    <div className="bd">
    <Link href=''></Link> <BBQs/>
    <Tikka/>
    <BBQ/>
    <Sandwitches/>
    <Drinks/>
    <Link href='/Components/Order' className='Link'><button className='btn'>ORDER NOW</button></Link>
    </div>
  </>
    )
}
