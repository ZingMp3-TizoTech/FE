
import { style } from '@mui/system'
import React from 'react'
import './DetailSong.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import { useNavigate } from 'react-router-dom';
export default function DetailSong({idSong, songs, circular}) {
  let navigate = useNavigate();
  return (
    <div className='wrapper-detail-song'>
        <div  
       onClick={() => {
        navigate('/')
       }}
        className='suntify'>
                    <GraphicEqRoundedIcon style={{ fontSize: '55px', marginRight: '15px' }} />
                    <p>Suntify</p>
                </div>
        <div className='img'>
            <img
            src= {songs[idSong]?.image[0]}
            alt='avatar'/>
        </div>
        <h2> {songs[idSong]?.name} </h2>
        <div className='img-author'>       
            <img 
            className={circular?'animation-img':''}
            src={songs[idSong]?.artist?.image[0]} 
            alt='avatar' />
            <span>{songs[idSong]?.artist?.name}</span>            
        </div>
    </div>
  )
}
