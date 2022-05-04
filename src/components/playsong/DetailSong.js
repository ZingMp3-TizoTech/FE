import { style } from '@mui/system'
import React from 'react'
import './DetailSong.css'

export default function DetailSong({idSong, songs, circular}) {
  return (
    <div className='wrapper-detail-song'>
        <h1> Now playing </h1>
        <div className='img'>
            <img
            src= {songs[idSong]?.image[0]}
            alt='avatar'/>
        </div>
        <h2> {songs[idSong]?.name} </h2>
        <div className='img-author'>       
            <img 
            className={circular?'animation-img':''}
            src={songs[idSong]?.image[1]} 
            alt='avatar' />
            <span>{songs[idSong]?.artist.name}</span>            
        </div>
    </div>
  )
}
