import React from 'react'

function Card(props) {
  return (
    <div className="bg-[#FFFFFF] mt-8 mr-4 w-[291px] h-[495px]  " >
        <div className="border-2 border-black rounded-full w-[50px] h-[50px] flex justify-center items-center text-white bg-black">
            {props.price}
        </div>
        <div className="">
            <img src={props.image}></img>
        </div>
        <div className="font-bold flex justify-center" >
            {props.title}
        </div>
        <div className="flex justify-center">
            {props.description}
        </div>
    </div>
  )
}

export default Card