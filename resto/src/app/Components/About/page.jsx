import React from 'react'
// import Navbar from '../Navbar/Navbar'
import  '../About/s.css'
const About = () => {
  // console.log("sd");
  return (
    <>
    {/* <Navbar/> */}
    <br /><br /><br />
    {/* <h1 style={{textAlign:'center'}}>About Page</h1> */}
<div className="classy">
      <div className='About'>
        <img style={{borderRadius:'23px'}} id='imgabout' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4MoVZ7kHOyuhQKeic4avdwpo9hH3WtkCsefFKQeOyBOViCRvJlNxSyxSYf7RPTNoW5Q&usqp=CAU       " alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cupiditate quia magni temporibus laudantium incidunt consectetur, corporis inventore, maxime obcaecati ab est molestias eligendi eum, quo quas perferendis amet enim.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil quia laudantium. Eveniet exercitationem iusto assumenda, molestias vitae error ullam tenetur velit, maiores alias at dolorem officiis earum deleniti consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum ipsam cum, ea natus culpa illo suscipit. Blanditiis quis voluptates velit dolore molestiae rerum temporibus consectetur! Consequatur nesciunt perspiciatis error.
        </p>
      </div>
      
      <div className='About'>
        <img style={{borderRadius:'23px'}}  src="data:image/jpeg;base64,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        " alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda veniam quia, quod saepe vitae dignissimos vero eos quos aspernatur. Esse ducimus voluptatem ipsam id. Dicta officia consequatur eveniet asperiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil quia laudantium. Eveniet exercitationem iusto assumenda, molestias vitae error ullam tenetur velit, maiores alias at dolorem officiis earum deleniti consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum ipsam cum, ea natus culpa illo suscipit. Blanditiis quis voluptates velit dolore molestiae rerum temporibus consectetur! Consequatur nesciunt perspiciatis error.
        </p>
      </div>
      
      <div className='About'>
        <img style={{borderRadius:'23px'}} src="
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBqQUXe5avKDjoQbCLxdHf51qqqJDKcmi5A&usqp=CAU        " alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam libero asperiores beatae magnam, ut fuga minus alias numquam laborum possimus aliquid deleniti nulla laudantium repellendus molestias excepturi totam ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil quia laudantium. Eveniet exercitationem iusto assumenda, molestias vitae error ullam tenetur velit, maiores alias at dolorem officiis earum deleniti consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum ipsam cum, ea natus culpa illo suscipit. Blanditiis quis voluptates velit dolore molestiae rerum temporibus consectetur! Consequatur nesciunt perspiciatis error.
        </p>
      </div>
      
      <div className='About'>
        <img style={{borderRadius:'23px'}} src="data:image/jpeg;base64,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" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptates repellendus repudiandae cum. Perspiciatis, impedit beatae eum in optio, similique necessitatibus vitae voluptas ratione numquam culpa quae, qui voluptates? Perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil quia laudantium. Eveniet exercitationem iusto assumenda, molestias vitae error ullam tenetur velit, maiores alias at dolorem officiis earum deleniti consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum ipsam cum, ea natus culpa illo suscipit. Blanditiis quis voluptates velit dolore molestiae rerum temporibus consectetur! Consequatur nesciunt perspiciatis error.
        </p>
      </div>
      </div>
    </>
    
  )
}

export default About