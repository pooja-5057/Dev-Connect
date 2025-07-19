// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Userinfocard = () => {
//     return (
//         <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
//             {/* TOP */}
//             <div className='flex justify-between items-center font-medium'>
//                 <span className='text-gray-500'>User Information</span>
//                 <Link href="/" className='text-blue-500 text-xs'>
//                     Sell All
//                 </Link>
//             </div>
//             {/* BOTTOM */}
//             <div className='flex flex-col gap-4 text-gray-500'>
//                 <div className='flex items-center gap-2'>
//                     <span className='text-xl text-black'>Lloyd Fleming</span>
//                     <span className='text-sm'>@jonathan</span>
//                 </div>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti modi ipsum dicta a architecto doloremque animi
//                 </p>
//                 <div className='flex items-center gap-2'>
//                     <Image src="/map.png" alt="" width={16} height={16} />
//                     <span>Living in <b>Denver</b></span>
//                 </div>
//                 <div className='flex items-center gap-2'>
//                     <Image src="/school.png" alt="" width={16} height={16} />
//                     <span>Went to <b> Edgar High School</b></span>
//                 </div>
//                 <div className='flex items-center gap-2'>
//                     <Image src="/work.png" alt="" width={16} height={16} />
//                     <span>Works at <b>Apple Inc.</b></span>
//                 </div>
//                 <div className='flex items-center justify-between'>
//                     <div className='flex gap-1 items-center'>
//                          <Image src="/link.png" alt="" width={16} height={16} />
//                          <Link href="https://github.com/" className='text-blue-500 font-medium'>github.com</Link>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src="/date.png" alt="" width={16} height={16} />
//                         <span>Joined April 2023</span>
//                     </div>
//                 </div>
//                 <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
//                 <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
//             </div>
//         </div>
//     )
// }

// export default Userinfocard






"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Userinfocard = () => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)

  const handleFollowToggle = () => {
    if (!isBlocked) {
      setIsFollowing((prev) => !prev)
    }
  }

  const handleBlockToggle = () => {
    setIsBlocked((prev) => !prev)
    if (!isBlocked) {
      setIsFollowing(false)
    }
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>User Information</span>
        <Link href="/" className='text-blue-500 text-xs'>
          Sell All
        </Link>
      </div>

      {/* BOTTOM */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
          <span className='text-xl text-black'>Lloyd Fleming</span>
          <span className='text-sm'>@jonathan</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti modi ipsum dicta a architecto doloremque animi
        </p>

        <div className='flex items-center gap-2'>
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>Living in <b>Denver</b></span>
        </div>

        <div className='flex items-center gap-2'>
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>Went to <b>Edgar High School</b></span>
        </div>

        <div className='flex items-center gap-2'>
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>Works at <b>Apple Inc.</b></span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="https://github.com/" className='text-blue-500 font-medium'>github.com</Link>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined April 2023</span>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-2'>
          <button
            onClick={handleFollowToggle}
            disabled={isBlocked}
            className={`text-white text-sm rounded-md p-2 ${isBlocked ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
          <button
            onClick={handleBlockToggle}
            className={`text-sm rounded-md p-2 ${isBlocked ? 'bg-red-400 text-white' : 'text-red-400 border border-red-400'}`}
          >
            {isBlocked ? 'Unblock User' : 'Block User'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Userinfocard
