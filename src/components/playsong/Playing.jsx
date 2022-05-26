import React, { useState } from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";
import './Playing.css';


function Playing({ i, type, idSong, setIdNumber, setCircular, action, setAction, ...props }) {

  if (action == "songs") {
    setIdNumber(i)
  }
  const handleClickNext = () => {
    let _id = idSong;
    _id = idSong < props.songs.length - 1  ? idSong + 1 : 0;
    setIdNumber && setIdNumber(_id);
    setAction(" ")
  }
  const handleClickPrev = () => {
    let _id = idSong;
    console.log('id', idSong)
    _id = idSong > 0 ? idSong - 1 : props.songs.length - 1;
    setIdNumber && setIdNumber(_id);
    setAction(" ")
  }
  const handleClickPlay = () => {
    setCircular(true)
  }
  const handleClickPause = () => {
    setCircular(false)
  }

  return (
    <>
     <AudioPlayer
     className='playing'
      src={props.songs?.[idSong]?.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
      onPause={handleClickPause}
      onPlay={handleClickPlay}
    />
    </>
   
    
  )
};
export default Playing