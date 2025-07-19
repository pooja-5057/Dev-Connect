// import Image from 'next/image'
// import React from 'react'

// const AddPost = () => {

//     return (
//         <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
//             {/* AVTAR */}
//             <Image src="https://images.pexels.com/photos/32278351/pexels-photo-32278351.jpeg?_gl=1*l6qi0p*_ga*MTM0NDE4NzQxMi4xNzQwMjE2OTIx*_ga_8JE65Q40S6*czE3NTI1NzM1OTUkbzMkZzEkdDE3NTI1NzU3MDQkajM2JGwwJGgw"
//                 alt=""
//                 className='w-12 h-12 object-cover rounded-full'
//                 width={48}
//                 height={48}
//             />
//             {/* POST */}
//             <div className='flex-1'>
//                 {/* TEXT INPUT */}
//                 <div className='flex gap-4'>
//                     <textarea placeholder='whats on your mind?' className='flex-1 bg-slate-100 rounded-lg p-2'
//                         name='desc'
//                     >
//                     </textarea>
//                     <Image src="/emoji.png"
//                         alt=""
//                         className='w-5 h-5 cursor-pointer self-end'
//                         width={20}
//                         height={20}
//                     />
//                     <button>Send</button>
//                </div>
//             </div>
//             {/* POST OPTIONS */}
//             <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
//                 <div className='flex items-center gap-2 cursor-pointer'>
//                     <Image src="/addimage.png" alt="" width={20} height={20} />
//                     Photo
//                 </div>
//                 <div className='flex items-center gap-2 cursor-pointer'>
//                     <Image src="/addVideo.png" alt="" width={20} height={20} />
//                     Video
//                 </div>
//                 <div className='flex items-center gap-2 cursor-pointer'>
//                     <Image src="/poll.png" alt="" width={20} height={20} />
//                     Poll
//                 </div>
//                 <div className='flex items-center gap-2 cursor-pointer'>
//                     <Image src="/addevent.png" alt="" width={20} height={20} />
//                     Event
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddPost

// 'use client';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

// const AddPost = () => {
//     const [desc, setDesc] = useState('');
//     const [media, setMedia] = useState(null); // base64 file
//     const [mediaType, setMediaType] = useState(null); // image or video
//     const [posts, setPosts] = useState([]);
//     const [user, setUser] = useState(null);

//     // Load user and posts on mount
//     useEffect(() => {
//         const savedUser = JSON.parse(localStorage.getItem('user'));
//         setUser(savedUser || { name: 'Guest' });

//         const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
//         setPosts(savedPosts);
//     }, []);

//     // Save posts to localStorage when they change
//     useEffect(() => {
//         localStorage.setItem('posts', JSON.stringify(posts));
//     }, [posts]);

//     // Handle file upload
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setMedia(reader.result);
//             setMediaType(file.type.startsWith('image') ? 'image' : 'video');
//         };
//         reader.readAsDataURL(file);
//     };

//     // Handle post submit
//     const handlePost = () => {
//         if (!desc.trim() && !media) return;

//         const newPost = {
//             id: Date.now(),
//             user: user?.name || 'Guest',
//             desc,
//             media,
//             mediaType,
//             createdAt: new Date().toLocaleString(),
//         };

//         setPosts([newPost, ...posts]);
//         setDesc('');
//         setMedia(null);
//         setMediaType(null);
//     };

//     return (
//         <div className="p-4 bg-white shadow-md rounded-lg text-sm space-y-4">
//             {/* USER + TEXT INPUT */}
//             <div className="flex gap-4">
//                 <Image
//                     src="https://images.pexels.com/photos/32278351/pexels-photo-32278351.jpeg"
//                     alt="avatar"
//                     className="w-12 h-12 object-cover rounded-full"
//                     width={48}
//                     height={48}
//                 />
//                 <div className="flex-1">
//                     <div className="flex gap-4">
//                         <textarea
//                             placeholder="What's on your mind?"
//                             className="flex-1 bg-slate-100 rounded-lg p-2"
//                             value={desc}
//                             onChange={(e) => setDesc(e.target.value)}
//                         />
//                         <button
//                             onClick={handlePost}
//                             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//                         >
//                             Send
//                         </button>
//                     </div>

//                     {/* Preview uploaded image/video */}
//                     {media && (
//                         <div className="mt-2">
//                             {mediaType === 'image' ? (
//                                 <img
//                                     src={media}
//                                     alt="uploaded"
//                                     className="w-32 h-32 object-cover rounded-md"
//                                 />
//                             ) : (
//                                 <video src={media} controls className="w-40 h-24 rounded-md" />
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* POST OPTIONS (triggers file input) */}
//             <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                     <Image src="/addimage.png" alt="" width={20} height={20} />
//                     <span>Photo/Video</span>
//                     <input
//                         type="file"
//                         accept="image/*,video/*"
//                         onChange={handleFileChange}
//                         hidden
//                     />
//                 </label>
//                 <div className="flex items-center gap-2 cursor-pointer">
//                     <Image src="/poll.png" alt="" width={20} height={20} />
//                     Poll
//                 </div>
//                 <div className="flex items-center gap-2 cursor-pointer">
//                     <Image src="/addevent.png" alt="" width={20} height={20} />
//                     Event
//                 </div>
//             </div>

//             {/* POSTS LIST */}
//             <div className="mt-6 space-y-4">
//                 {posts.length === 0 ? (
//                     <p className="text-gray-400">No posts yet.</p>
//                 ) : (
//                     posts.map((post) => (
//                         <div
//                             key={post.id}
//                             className="p-3 rounded-md bg-slate-50 shadow-sm space-y-2"
//                         >
//                             <p className="font-semibold">{post.user}</p>
//                             <p>{post.desc}</p>
//                             {post.media && post.mediaType === 'image' && (
//                                 <img
//                                     src={post.media}
//                                     alt="post"
//                                     className="w-full max-h-64 rounded-md object-cover"
//                                 />
//                             )}
//                             {post.media && post.mediaType === 'video' && (
//                                 <video
//                                     src={post.media}
//                                     controls
//                                     className="w-full max-h-64 rounded-md"
//                                 />
//                             )}
//                             <p className="text-xs text-gray-400">{post.createdAt}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
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
//         </div>
//     );
// };

// export default AddPost;

'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AddPost = () => {
  const [desc, setDesc] = useState('');
  const [media, setMedia] = useState(null); // base64 file
  const [mediaType, setMediaType] = useState(null); // image or video
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  // Load user and posts on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    setUser(savedUser || { name: 'Guest' });

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage when they change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setMedia(reader.result);
      setMediaType(file.type.startsWith('image') ? 'image' : 'video');
    };
    reader.readAsDataURL(file);
  };

  // Create new post
  const handlePost = () => {
    if (!desc.trim() && !media) return;

    const newPost = {
      id: Date.now(),
      user: user?.name || 'Guest',
      desc,
      media,
      mediaType,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setDesc('');
    setMedia(null);
    setMediaType(null);
  };

  // Handle like
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  // Handle add comment
  const handleAddComment = (id, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, comments: [...post.comments, comment] }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm space-y-4">
      {/* USER + TEXT INPUT */}
      <div className="flex gap-4">
        <Image
          src="https://images.pexels.com/photos/32278351/pexels-photo-32278351.jpeg"
          alt="avatar"
          className="w-12 h-12 object-cover rounded-full"
          width={48}
          height={48}
        />
        <div className="flex-1">
          <div className="flex gap-4">
            <textarea
              placeholder="What's on your mind?"
              className="flex-1 bg-slate-100 rounded-lg p-2"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>

          {/* Preview uploaded image/video */}
          {media && (
            <div className="mt-2">
              {mediaType === 'image' ? (
                <img
                  src={media}
                  alt="uploaded"
                  className="w-32 h-32 object-cover rounded-md"
                />
              ) : (
                <video src={media} controls className="w-40 h-24 rounded-md" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* POST OPTIONS (trigger file input) */}
      <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
        <label className="flex items-center gap-2 cursor-pointer">
          <Image src="/addimage.png" alt="" width={20} height={20} />
          <span>Photo/Video</span>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            hidden
          />
        </label>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/poll.png" alt="" width={20} height={20} />
          Poll
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addevent.png" alt="" width={20} height={20} />
          Event
        </div>
      </div>

      {/* POSTS LIST */}
      <div className="mt-6 space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-400">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="p-3 rounded-md bg-slate-50 shadow-sm space-y-2"
            >
              <p className="font-semibold">{post.user}</p>
              <p>{post.desc}</p>
              {post.media && post.mediaType === 'image' && (
                <img
                  src={post.media}
                  alt="post"
                  className="w-full max-h-64 rounded-md object-cover"
                />
              )}
              {post.media && post.mediaType === 'video' && (
                <video
                  src={post.media}
                  controls
                  className="w-full max-h-64 rounded-md"
                />
              )}
              <p className="text-xs text-gray-400">{post.createdAt}</p>

              {/* Like + Comment Buttons */}
              <div className="flex items-center justify-between text-sm my-2">
                <div className="flex gap-4">
                  <div
                    className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg cursor-pointer"
                    onClick={() => handleLike(post.id)}
                  >
                    <Image src="/like.png" width={16} height={16} alt="" />
                    <span>{post.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg">
                    <Image src="/comment.png" width={16} height={16} alt="" />
                    <span>{post.comments?.length || 0} Comments</span>
                  </div>
                </div>
              </div>

              {/* Comment Input */}
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="p-2 w-full rounded-md text-xs"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      handleAddComment(post.id, e.target.value.trim());
                      e.target.value = '';
                    }
                  }}
                />
              </div>

              {/* Comments List */}
              <div className="text-xs text-gray-600 space-y-1 mt-2">
                {post.comments.map((c, idx) => (
                  <div key={idx} className="bg-white p-1 rounded shadow-sm">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddPost;

