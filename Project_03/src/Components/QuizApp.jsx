import React from 'react'
import { Star } from 'lucide-react';
function QuizApp() {
    const [rating,setRating] = React.useState(0)
    const [hover,setHover] = React.useState(0)
    const handleClick = (index)=>{
        setRating(index)
        // console.log( "Clicked Star",index+1);
    }
    const handleMouseEnter = (index)=>{
        setHover(index)
        // console.log("Hovering star index:",index+1);
        
    }
    const handleMouseLeave = (index)=>{
        setHover(0)
       // console.log("Mouse left");
        
        
    }

  return (
     <div className="w-screen h-screen flex items-center justify-center bg-gray-500 gap-x-2">
     {
        [1,2,3,4,5].map((index)=>{
            const isFilled = index <= (hover || rating) // hover wins   ;
            
            return (
                <Star
                size= {100}
                fill ={ isFilled ? "gold" : "white"}
                 key={index}
                 onClick={()=>handleClick(index)}
                 onMouseEnter={()=>handleMouseEnter(index)}
                 onMouseLeave={()=>handleMouseLeave(index)}
                    className='block cursor-pointer hover:scale-110 transition-transform duration-300'
                />
             
            )
        })
     }
      <h1 className='absolute bottom-30 text-5xl text-white'>{rating ? `rated ${rating} out of 5`: "Rate US"}</h1>
     </div>
  )
}

export default QuizApp