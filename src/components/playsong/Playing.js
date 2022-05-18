import React from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";
import Login from '../account/Login';
import ApiCaller from '../../utils/callAPI';
function preSong(i, e) {

}

function Playing({ idSong, setIdNumber, setCircular, ...props }) {

  const handleClickNext = () => {
    let _id = idSong;
    _id = idSong < props.songs.length ? idSong + 1 : 0;
    console.log("Nam ca", idSong)
    setIdNumber && setIdNumber(_id);
  }

  const handleClickPrev = () => {
    let _id = idSong;
    console.log('id', idSong)
    _id = idSong > 0 ? idSong - 1 : props.songs.length - 1;
    console.log("Nam ca", _id)
    setIdNumber && setIdNumber(_id);
  }
  const handleClickPlay = () =>{
    setCircular(true)
  }
  const handleClickPause = () =>{
    setCircular(false)
  }

  return (
  
    <AudioPlayer
      src={props.songs[idSong]?.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
      onPause={handleClickPause}
      onPlay={handleClickPlay}
    />
  )
};
export default Playing