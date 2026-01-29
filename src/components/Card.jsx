import React from 'react'
import { GoPerson } from "react-icons/go";
import { MdOutlineVerified } from "react-icons/md";
import { BsSave2Fill } from "react-icons/bs";


const Card = (props) => {    
  return (
    <div className='bg-cover bg-center text-white rounded-2xl p-2 w-3xs pt-50 relative' style={{
    backgroundImage: `url(${props.user.image})`,
  }}>  
    <div className='bg-black/30 bg-cover bg-center backdrop-blur-lg rounded-2xl w-full h-32'></div>
    <div className='absolute bottom-5'>
        <h3 className='flex items-center gap-1 text-3xl'>{props.user.name}
            {props.user.isVerified? 
            <span className='text-green-500'><MdOutlineVerified /></span>
            :<span><MdOutlineVerified /></span>
            }
        </h3>
        <h5 className='text-[1rem]'>{props.user.description}</h5>

        <div className='flex gap-4 items-center '>
        <div className="flex gap-1 justify-center items-center">
            <div className="likeIcone"><GoPerson /></div>
            <p>{props.user.likeCounts}</p>
        </div>
        <div className="flex gap-1 justify-center items-center">
            <div className="SavedIcone"><BsSave2Fill /></div>
            <p>{props.user.saveCounts}</p>
        </div>
        </div>
        </div>
        <button className='absolute top-3 right-1 text-black bg-white rounded-full p-1 text-center px-2 font-semibold'>Follow +</button>
    </div>
  )
}

export default Card
