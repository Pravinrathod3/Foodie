import React from 'react'
import pic from '../assets/cheaf.png'

function more() {
  return (
    <div className=" w-full h-[700px] flex justify-center items-center">
        <div className="w-[480px] flex flex-col items-center justify-center">
             <div className="text-[40px] font-bold">
                Our <span className="text-[#DAE952]">Dhabi</span><br /> Restaurant Expert <br/>Chef
             </div>
             <div className="flex justify-center w-[402px] mt-10">
             food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion
             </div>
        </div>
        <div className="ml-20 w-[478px] h-[635px]">
             <img src={pic} className="size-10/12"/>
        </div>
    </div>
  )
}

export default more