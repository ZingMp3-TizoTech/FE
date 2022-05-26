
import { style } from '@mui/system'
import React from 'react'
import './DetailSong.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import { useNavigate } from 'react-router-dom';
import Loading from 'react-loading';
import Extend from './Extend';
export default function DetailSong({ idSong, songs, circular, type, albums, loading, playlist }) {

  let navigate = useNavigate();
  
  return (
    <div className='wrapper-detail-song' style={{
      backgroundColor: '#48589c',   
    }}>
      <div
        onClick={() => {
          navigate('/')
        }}
        className='suntify'>
        <GraphicEqRoundedIcon style={{ fontSize: '55px', marginRight: '15px' }} />
        <p>Suntify</p>
      </div>
        {!loading?
      <div className='img'>
          <img
          src={type != 'albums' ? songs?.[idSong]?.image?.[0] : albums[0]?.artist?.image?.[0]}
          alt='avatar' /> 
          <Extend/>
          </div>
          : <Loading    
                        type='spinningBubbles'
                        height='900px' 
                        width='100px' 
                        color='#a696d5'
          /> 
       }
      <h2> {type != 'albums' ? songs?.[idSong]?.name : type == 'playlists'? playlist.name: albums?.[0]?.name} </h2>
      {!loading? 
        <div className='img-author'>
        <img
          className={circular ? 'animation-img' : ''}
          src={type != 'albums' ? songs?.[idSong]?.image?.[0] : songs?.[idSong]?.image?.[0]}
          alt='avatar' />
        <span>{type != 'albums' ? songs?.[idSong]?.artist?.name : songs?.[idSong]?.name}</span>
      </div> : <></>
    }
      
    </div>
  )
}
