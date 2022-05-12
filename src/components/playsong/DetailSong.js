
import { style } from '@mui/system'
import React from 'react'
import './DetailSong.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import { useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';
export default function DetailSong({idSong, songs, circular}) {
  const navigate=useNavigate();
  const backToHome=()=>{
    navigate('/')
}
  return (
    <div className='wrapper-detail-song'>
           <a  onClick={backToHome} style={{
                    color:"red",
                    marginLeft:"150px"
                }}>  <GraphicEqRoundedIcon style={{
                  width:"100px",
                  height:"100px"
                }} /></a>
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
