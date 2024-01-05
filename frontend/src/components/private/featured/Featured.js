import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

const Featured = () => {
    const slider = 
    [
        {
            url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/ric_a4ewxo.jpg'
        }
    ]
    const [currentIndex,setCurrentIndex] = useState(0);
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group:'>
     <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
     style={{backgroundImage: `url(${slider[currentIndex].url})`}}>
     </div> 
     <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft />
      </div>
     <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight/>
     </div>
    </div>
  )
}
export default Featured


