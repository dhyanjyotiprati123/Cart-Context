import React from 'react';
import {AiOutlineStar, AiFillStar} from "react-icons/ai"

const Rating = ({rating, onClick}) => {
  return (
    <div>
        {
           [...Array(10)].map((_, i)=> (
            <span key={i} onClick={()=>onClick(i)}>
                {
                  rating> i? <AiFillStar size={24} /> : <AiOutlineStar size={24} />  
                }
            </span>
           )) 
        }
    </div>
  )
}

export default Rating