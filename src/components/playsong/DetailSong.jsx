import React from 'react'
import './DetailSong.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import { useNavigate } from 'react-router-dom';
import Loading from 'react-loading';
import '../sidebar.scss'
export default function DetailSong({ idSong, songs, circular, type, albums, loading, playlist }) {

  let navigate = useNavigate();

  return (
    <div className='wrapper-detail-song' style={{
      backgroundColor: '#334155',   
    }}>
      <div
        onClick={() => {
          navigate('/')
        }}
        className='suntify'>
        <div style={{ marginTop: '30px',marginLeft:'50px' }} onClick={() => navigate('/')}>

          <h1 style={{
            maxWidth: 'fit-content'
          }}>
            <span>Suntify</span>
            <span>Suntify</span>
          </h1>
          <h2 style={{fontSize:"30px"}}>Music and chill</h2></div>


      </div>
      {!loading ?
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', margin: '20px' }}><div className='img' >
          <img
            src={type != 'albums' ? songs?.[idSong]?.image?.[0] : albums[0]?.artist?.image?.[0]}
            alt='avatar' />
        </div>
          <a style={{ fontSize: '20px', marginTop: '20px', color: 'white' }}> {type != 'albums' ? songs?.[idSong]?.name : type == 'playlists' ? playlist.name : albums?.[0]?.name} </a>
        </div>
        : <Loading
          type='spinningBubbles'
          height='900px'
          width='100px'
          color='#a696d5'
        />
      }
      {!loading ?
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
