import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Ad from './Ad'

const LeftMenu = ({type}) => {
  return (
    <div className='flex flex-col gap-6'>
      {type==="home" && <ProfileCard/>}
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/posts.png" alt="" width={20} height={20}/>
           <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/activity.png" alt="" width={20} height={20}/>
           <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/market.png" alt="" width={20} height={20}/>
           <span>Marketplace</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/events.png" alt="" width={20} height={20}/>
           <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/albums.png" alt="" width={20} height={20}/>
           <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/videos.png" alt="" width={20} height={20}/>
           <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/news.png" alt="" width={20} height={20}/>
           <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/courses.png" alt="" width={20} height={20}/>
           <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/lists.png" alt="" width={20} height={20}/>
           <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link  
          href="/"
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
          >
         <Image src="/settings.png" alt="" width={20} height={20}/>
           <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu




// import React from 'react';
// import ProfileCard from './ProfileCard';
// import Link from 'next/link';
// import Image from 'next/image';
// import Ad from './Ad';
// import PropTypes from 'prop-types';

// const LeftMenu = ({ type }) => {
//   return (
//     <div className='flex flex-col gap-6'>
//       {type === 'home' && <ProfileCard />}
      
//       <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
//         {[
//           { icon: '/posts.png', label: 'My Posts' },
//           { icon: '/activity.png', label: 'Activity' },
//           { icon: '/market.png', label: 'Marketplace' },
//           { icon: '/events.png', label: 'Events' },
//           { icon: '/albums.png', label: 'Albums' },
//           { icon: '/videos.png', label: 'Videos' },
//           { icon: '/news.png', label: 'News' },
//           { icon: '/courses.png', label: 'Courses' },
//           { icon: '/lists.png', label: 'Lists' },
//           { icon: '/settings.png', label: 'Settings' },
//         ].map((item, index) => (
//           <React.Fragment key={index}>
//             <Link
//               href="/"
//               className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'
//             >
//               <Image src={item.icon} alt={item.label} width={20} height={20} />
//               <span>{item.label}</span>
//             </Link>
//             {index !== 9 && (
//               <hr className='border-t-1 border-gray-50 w-36 self-center' />
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <Ad size="sm" />
//     </div>
//   );
// };

// LeftMenu.propTypes = {
//   type: PropTypes.oneOf(['home', 'profile']).isRequired,
// };

// export default LeftMenu;
