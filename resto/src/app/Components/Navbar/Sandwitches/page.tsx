import React from 'react'
import '../Tikka/tikka.css'
import Nav from '../Components/Nav/page'

const page = () => {
  return (
    <>
    {/* <Nav/> */}
    {/* <h1 style={{textAlign:'center',margin:'53px 40px'}}>Click On Home Button To Check Other Meals</h1> */}

    <div className="tikka">
        <div className="menupart">
        <p>BEEF FLAVOUR</p>
            <h1>PRICE :: 50$</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjotXBW-yC5WG9rH1dBhBqvpsr3jqoSLVfw&usqp=CAU" alt="" />
        </div>
        <div className="menupart">
            <p>CHIKEN FLAVOUR</p>
            <h1>PRICE :: 55$</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey1s2rFBL5X5sNLhCwjtU0dML1uyEg-4HuA&usqp=CAU" alt="" />
          </div>
        <div className="menupart">
        <p>PETTIS FLAVOUR</p>
            <h1>PRICE :: 45$</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGmRydQJito0JhX9tfG9lsikCU0MBecmcoQ&usqp=CAU" alt="" />
            </div>
        <div className="menupart"> 
        <p>Mega FLAVOUR</p>
            <h1>PRICE :: 40$</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCC_gYG3L4artLmHgi_sOYpyBMwXgvUULtA&usqp=CAU" alt="" />
            </div>
            </div>
    </>
  )
}

export default page
