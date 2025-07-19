import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'
import UserinfoCard from './Userinfocard'
import UserMediaCard from './UserMediaCard'

const RightMenu = ({ userId }) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (<>
        <UserinfoCard userId={userId} />
        <UserMediaCard userId={userId} />
      </>) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu