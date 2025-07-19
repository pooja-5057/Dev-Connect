import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({ userId }) => {
  return (
    <div className='p-4 bg-whit rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* {top} */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>User Media</span>
        <Link href="/" className='text-blue-500 text-xs'>
          Sell All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/20753997/pexels-photo-20753997.jpeg?_gl=1*1jd34t*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyMjQ2JGoyOCRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/5663479/pexels-photo-5663479.jpeg?_gl=1*1itrihn*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyNjI3JGo1MyRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/2246471/pexels-photo-2246471.jpeg?_gl=1*1x2st5t*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyNjUxJGoyOSRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/6081844/pexels-photo-6081844.jpeg?_gl=1*1dcxd3o*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyNjc5JGoxJGwwJGgw" 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/1554660/pexels-photo-1554660.jpeg?_gl=1*t0opyj*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyNzY4JGo1NiRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/30650047/pexels-photo-30650047.jpeg?_gl=1*1mk8a65*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyODAzJGoyMSRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/15501196/pexels-photo-15501196.jpeg?_gl=1*dohf0s*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyODUwJGo1OCRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image  src="https://images.pexels.com/photos/2847605/pexels-photo-2847605.jpeg?_gl=1*1vtw3ra*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTIyMTQkbzEzJGcxJHQxNzUyODEyODc4JGozMCRsMCRoMA.." 
            alt="" 
            fill className='object-cover rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard