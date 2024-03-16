import React from 'react'
import '../Info/info.css'
const page = () => {
  return (
    <>
    <div className="info">
    <h1 className='resh'>RESTURANT INFORMATION SERVICE HELPLINE</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error sit ea magni et, ad cum ipsa. Et harum praesentium cupiditate libero at voluptate exercitationem, inventore earum natus odio placeat.</p>
    <p>Location of our Resturant</p>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57889.816794845465!2d67.03380356953124!3d24.928201400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4148864f51%3A0x11885c9e5b3eba2c!2sJaved%20Nihari%20Restaurant!5e0!3m2!1sen!2s!4v1695337282719!5m2!1sen!2s" width="600" height="450"   loading="lazy"></iframe>
    </div></div>


    </>      
  )
}

export default page
