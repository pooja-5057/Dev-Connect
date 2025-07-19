// import Image from 'next/image'
// import React from 'react'
// import Comments from './Comments'

// const Post = () => {
//     return (
//         <div className="flex flex-col gap-4">
//             {/* USER */}
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                     <Image src="https://images.pexels.com/photos/32948308/pexels-photo-32948308.jpeg?_gl=1*yy096n*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI1Nzc2ODUkbzQkZzEkdDE3NTI1Nzc3MDQkajQxJGwwJGgw"
//                         width={40}
//                         height={40}
//                         alt=""
//                         className="w-10 h-10 rounded-full"
//                     />
//                     <span className='font-medium'>jack McBride</span>
//                 </div>
//                 <Image src="/more.png" width={16} height={16} alt="" />
//             </div>

//             {/* DESC */}
//             <div className="flex flex-col gap-4">
//                 <div className='w-full min-h-96 relative'>
//                     <Image src="https://images.pexels.com/photos/15518197/pexels-photo-15518197.jpeg?_gl=1*1oz3jux*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI1Nzc2ODUkbzQkZzEkdDE3NTI1NzgyOTQkajUxJGwwJGgw"
//                         fill className='object-cover rouded-md'
//                         alt="" />
//                 </div>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Necessitatibus obcaecati sed voluptatem quas, nobis ab iure, similique,
//                     facilis ullam illum odio nulla accusantium optio! Officia ipsum eaque quas sint eius.
//                 </p>
//             </div>
//             {/* INTERACTION */}
//             <div className="flex items-center justify-between text-sm my-4">
//                 <div className='flex gap-8'>
//                     <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
//                         <Image src="/like.png" width={16} height={16} alt="" className='cursor-pointer' />
//                         <span className='text-gray-300'>|</span>
//                         <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span>
//                         </span>
//                     </div>
//                     <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
//                         <Image src="/comment.png" width={16} height={16} alt="" className='cursor-pointer' />
//                         <span className='text-gray-300'>|</span>
//                         <span className='text-gray-500'>10 <span className='hidden md:inline'>Comment</span>
//                         </span>
//                     </div>
//                 </div>
//                 <div className=''>
//                     <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
//                         <Image src="/share.png" width={16} height={16} alt="" className='cursor-pointer' />
//                         <span className='text-gray-300'>|</span>
//                         <span className='text-gray-500'>12 <span className='hidden md:inline'>Shares</span>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//            <Comments />
//         </div>
//     )
// }

// export default Post
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(123); // Initial dummy count
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  // Like button toggle (optional: toggle on/off)
  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  // Submit a comment
  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;
    setComments([...comments, commentInput]);
    setCommentInput('');
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-sm">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/32948308/pexels-photo-32948308.jpeg"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative rounded-md overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/15518197/pexels-photo-15518197.jpeg"
            fill
            className="object-cover"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus obcaecati sed
          voluptatem quas, nobis ab iure.
        </p>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          {/* Like */}
          <div
            className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl cursor-pointer"
            onClick={handleLike}
          >
            <Image src="/like.png" width={16} height={16} alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {likes} <span className="hidden md:inline text-gray-300">Likes</span>
            </span>
          </div>

          {/* Comment */}
          <div
            className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl cursor-pointer"
            onClick={() => setShowCommentBox((prev) => !prev)}
          >
            <Image src="/comment.png" width={16} height={16} alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {comments.length} <span className="hidden md:inline text-gray-300">Comment</span>
            </span>
          </div>
        </div>

        {/* Share */}
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl cursor-pointer">
            <Image src="/share.png" width={16} height={16} alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              12 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      {showCommentBox && (
        <div className="space-y-2 text-sm">
          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className="flex-1 p-2 rounded-md bg-slate-100"
            />
            <button
              onClick={handleCommentSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Post
            </button>
          </div>

          {/* Display Comments */}
          {comments.length > 0 && (
            <div className="space-y-1">
              {comments.map((cmt, idx) => (
                <p key={idx} className="bg-slate-100 p-2 rounded-md">
                  {cmt}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
