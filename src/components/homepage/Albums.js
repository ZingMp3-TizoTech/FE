import React from 'react'
import "./Album.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from "react-router-dom";

export default function Albums() {
  let navigate = useNavigate();
  return (
    <div>
        <div className='wrapper-album' >
            <div className='album-item'>
                <span className='icon-play'
                onClick={(e)=>{
                    navigate('playsong');
                }}
                >
                    <PlayCircleOutlineIcon 
                    sx={{ fontSize: 60 }}
                    />
                </span>
                <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/a/4/c/e/a4cee97987fe7e4fe4fd2f72c89d284f.jpg' alt='image_album' />
                <div class="after"></div>
            </div>
            <div className='album-item'>
                <span className='icon-play'
                onClick={(e)=>{
                    navigate('playsong');
                }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }}/>
                </span>
                <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/a/4/c/e/a4cee97987fe7e4fe4fd2f72c89d284f.jpg' alt='image_album' />
                <div class="after"></div>
            </div>
            <div className='album-item'>
                <span className='icon-play'
                onClick={(e)=>{
                    navigate('playsong');
                }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }}/>
                </span>
                <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/a/4/c/e/a4cee97987fe7e4fe4fd2f72c89d284f.jpg' alt='image_album' />
                <div class="after"></div>
            </div>
            <div className='album-item'>
                <span className='icon-play'
                onClick={(e)=>{
                    navigate('playsong');
                }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }}/>
                </span>
                <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/a/4/c/e/a4cee97987fe7e4fe4fd2f72c89d284f.jpg' alt='image_album' />
                <div class="after"></div>
            </div>
            <div className='album-item'>
                <span className='icon-play'
                onClick={(e)=>{
                    navigate('playsong');
                }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }}/>
                </span>
                <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/a/4/c/e/a4cee97987fe7e4fe4fd2f72c89d284f.jpg' alt='image_album' />
                <div class="after"></div>
            </div>
        </div>
    </div>
  )
}
