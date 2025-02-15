import React from 'react'
import image0 from '../assets/featurespic.png'

function features() {
  return (
    <div className="bg-[#DAE952] bg-opacity-20 w-full h-[800px] flex justify-center">
         <div className="w-2/4 ">
             <img className="w-full" src={image0} />
         </div>
         <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="text-[40px] font-bold">
            Welcome to our <br/><span className="text-[#DAE952]">Dhabi</span> Restaurant
            </div>
            <div className="mt-6">
            food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion
            </div>
            <div className=" flex justify-center items-center cursor-pointer rounded-3xl w-[229px] h-[58px] bg-[#DAE952] text-black p-2 mt-10">
                <p className="font-semibold text-2xl"> Find More</p>
            </div>
         </div>
    </div>
  )
}

export default features