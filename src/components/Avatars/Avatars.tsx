import React from 'react'
import './avatars.sass'

interface AvatarsProps {
  avatars: string[]
}

const Avatars: React.FC<AvatarsProps> = ({ avatars }): JSX.Element => {
  return (
    <div className='avatars'>
      {avatars.map((avatar, idx) => (
        <div className='avatars__img-cont'>
          <img key={idx} src={avatar} alt='avatar' className='avatars__img' />
        </div>
      ))}
    </div>
  )
}

export default Avatars
