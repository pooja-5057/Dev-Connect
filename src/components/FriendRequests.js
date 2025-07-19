import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
    return (
       <div className='p-4 bg-whit rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* {top} */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>Friend Requests</span>
                <Link href="/" className='text-blue-500 text-xs'>Sell All</Link>
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
                     <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
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
                     <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
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
                     <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default FriendRequests