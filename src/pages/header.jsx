import React from 'react'
import Navbar from './navbar'
import salad from '../assets/salad-587669 1.png'

function header() {
  return (
    <div className='w-full h-full mt-0'>
        <div >
        <Navbar/>
        <div className='flex justify-around items-center mt-10 flex-wrap'>
          <div className='font-inter top-0 left-40'>
             <div className=' text-[78px] w-[465px] h-[188px]'>
              All Delicious<br/>
              <span className='font-bold'>Asians</span>
             </div>
             <div className='font-semibold text-[20px] w-[239px] h-[24px] mt-12 '>
             Eggs, Salad, fruits, pasta
             </div>
             <div className='mt-10 bg-[#DAE952] px-4 py-2 w-[229px] h-[58px] rounded-3xl cursor-pointer'>
              <p className='font-semibold text-[24px] flex justify-center items-center '> Find for more</p>
             </div>
          </div>
          <div >
            <div className='w-[573.5px] h-[551.5px]'>
             <img src={salad} ></img>
          </div>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default header