import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Birthdays = () => {
    return (
        <div className='p-4 bg-whit rounded-lg shadow-md text-sm flex flex-col gap-4'>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>Birthdays</span>
            </div>
            {/* USER*/}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/6179108/pexels-photo-6179108.jpeg?_gl=1*fkinb0*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI2NDg3MzgkbzckZzEkdDE3NTI2NDg3MzkkajU5JGwwJGgw"
                        alt=''
                        width={40}
                        height={40}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <span className='font-semibold'>Wayne Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
                </div>
            </div>
            {/* UPCOMING BIRTHDAYS */}
            <div className='p-4 bg-slate-200 rounded-lg flex itmes-center gap-4'>
                <Image src="/gift.png"
                    alt=''
                    width={24}
                    height={24}
                />
                <Link href="/" className='flex flex-col gap- text-xs'>
                    <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                    <span className='text-gray-500'>See other 16 have upcoming birthdays</span>
                </Link>
                
            </div>
        </div>
    )
}

export default Birthdays