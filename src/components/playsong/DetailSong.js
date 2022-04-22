import React from 'react'
import './DetailSong.css'

export default function DetailSong() {
  return (
    <div className='wrapper-detail-song'>
        <h2> Now playing </h2>
        <h3 className='text-neutral-400 text-2xl'> name </h3>
        <div className='img'>
            <img
            src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' 
            alt='avatar'/>
        </div>
        <div className='img-author'>
            <img 
            src='https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a' 
            alt='avatar' />
            <span>Alan Walker</span>
        </div>
    </div>
  )
}
