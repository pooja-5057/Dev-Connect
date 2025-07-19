// import Image from 'next/image'
// import React from 'react'

// const ProfileCard = () => {
//     return (
//         <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
//             <div className='h-20 relative'>
//                 <Image src="https://images.pexels.com/photos/5111378/pexels-photo-5111378.jpeg?_gl=1*1ujp99b*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTU3NjckbzE0JGcxJHQxNzUyODE1ODYyJGo1OSRsMCRoMA.."
//                     alt=""
//                     fill className='rounded-md object-cover'
//                 />
//                 <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg?_gl=1*1n8myir*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTU3NjckbzE0JGcxJHQxNzUyODE1ODkwJGozMSRsMCRoMA.."
//                     alt=""
//                     width={48}
//                     height={48}
//                     className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
//                 />
//             </div>
//             <div className='h-20 flex flex-col gap-2 items-center'>
//                 <span className='font-semibold'>Edward Gabriel May</span>
//                 <div className='flex items-center gap-4'>
//                     <div className='flex'>
//                         <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg?_gl=1*1n8myir*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTU3NjckbzE0JGcxJHQxNzUyODE1ODkwJGozMSRsMCRoMA.."
//                             alt=""
//                             width={12}
//                             height={12}
//                             className='rounded-full object-cover w-3 h-3'
//                         />
//                         <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg?_gl=1*1n8myir*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTU3NjckbzE0JGcxJHQxNzUyODE1ODkwJGozMSRsMCRoMA.."
//                             alt=""
//                             width={12}
//                             height={12}
//                             className='rounded-full object-cover w-3 h-3'
//                         />
//                         <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg?_gl=1*1n8myir*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI4MTU3NjckbzE0JGcxJHQxNzUyODE1ODkwJGozMSRsMCRoMA.."
//                             alt=""
//                             width={12}
//                             height={12}
//                             className='rounded-full object-cover w-3 h-3'
//                         />
//                     </div>
//                     <span className='text-xs text-gray-500'>500 Followers</span>
//                 </div>
//                 <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
//             </div>
//         </div>
//     )
// }

// export default ProfileCard



import Image from 'next/image'
import React from 'react'
import Link from 'next/link' 

const ProfileCard = () => {
    const userId = "test" 

    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src="https://images.pexels.com/photos/5111378/pexels-photo-5111378.jpeg"
                    alt=""
                    fill className='rounded-md object-cover'
                />
                <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg"
                    alt=""
                    width={48}
                    height={48}
                    className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
                />
            </div>
            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>Edward Gabriel May</span>
                <div className='flex items-center gap-4'>
                    <div className='flex'>
                        <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg"
                            alt=""
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                        />
                        <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg"
                            alt=""
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                        />
                        <Image src="https://images.pexels.com/photos/6220895/pexels-photo-6220895.jpeg"
                            alt=""
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                        />
                    </div>
                    <span className='text-xs text-gray-500'>500 Followers</span>
                </div>

                <Link href={`/profile/${userId}`}>
                    <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>
                        My Profile
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProfileCard
