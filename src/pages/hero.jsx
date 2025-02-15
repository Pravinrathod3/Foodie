import React from 'react'
import Data from '../component/data'
import Card from '../component/Card'

function Cards(con){
    return(
        <Card 
             price={con.price}
             image={con.img}
             title={con.title}
             description={con.des}
        />
    );
}

function hero() {
  return (
    <div className="bg-[#DAE952] bg-opacity-20 w-full h-[600px] flex justify-center">
        <div className="flex flex-col items-center">
               <div className="font-inter text-black text-[36px] ">
                  Our Delicious and Special Salad
                                 
               </div>
               <div className=" flex justify-center text-[36px] text-[#DAE952] ">
                       Asian
                </div> 
           <div className="font-poppins text-20">
              Food is any substance consumed by an organism for nutritional support.
            </div>
            
                <div className="flex">
                     {Data.map(Cards)}
                </div>
        </div>
       
    </div>
  )
}

export default hero