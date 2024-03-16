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
            <h1>PRICE :: 50$</h1>
            <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="menupart">
            <h1>PRICE :: 55$</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmJ46Z0sNQxNgaMt3feuhjqa9nOt7faauKw&usqp=CAU" alt="" />
          </div>
        <div className="menupart">
            <h1>PRICE :: 45$</h1>
            <img src="data:image/jpeg;base64,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" alt="" />
            </div>
        <div className="menupart"> 
            <h1>PRICE :: 40$</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS83iSiL3xoHzLnj2Q5cFKJC-jPvm4CNkIxw&usqp=CAU" alt="" />
            </div>
            </div>
    </>
  )
}

export default page