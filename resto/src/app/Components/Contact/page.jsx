import React from 'react'
import  '../Contact/s.css'

const page = () => {
  return (
    <>
    <div className="Contact">
    <div className="imgcontact">
        <img className='img' src="data:image/jpeg;base64,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" alt="" />
    </div>
        <div className="form">

            <form action="/Components/About" className='formcontact'><br /><br /><br />
                <label htmlFor="">Full Name</label><br />
                <input type="text" name="name" id="nameform" placeholder='Enter Full Name' /><br /><br /><br /><br />
                <label htmlFor="">Email</label><br />
                <input type="email" name="name" id="nameform" placeholder='Enter Email' /><br /><br /><br /><br />
                {/* <label htmlFor="">Messege</label> */}
                <h1>Messege</h1>
                {/* <input type="text" name="name" id="nameform" placeholder='Enter Full Name' /> */}
                <textarea name="messege" id="messegecontact" cols="30" rows="10" placeholder='Enter Any Messege'></textarea><br />
                <br /><br /><button type="submit" className='submit'>Submit</button>    

            </form>

        </div>
    </div>
    </>
  )
}

export default page
