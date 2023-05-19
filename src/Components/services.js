import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import ag from"../asssts/3.jpg"
import ag1 from"../asssts/4.jpg"
const Services = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>

        <div>
            <img src={ag} alt='item1'/>
            <p className='legend'>full stack</p>
        </div>
        <div>
            <img src={ag1} alt='item1'/>
            <p className='legend'>peer to peer support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
