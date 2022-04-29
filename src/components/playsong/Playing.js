import React, { useEffect, useState } from 'react'
//mport AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";
import Login from '../account/Login';
import ApiCaller from '../../utils/callAPI';
function preSong(i, e) {

}


function Playing({ ...props }) {
  const [url, setUrl] = useState(props.linkSong)
  const [songs, setSongs] = useState([])
  useEffect(() => {
    ApiCaller('songs', 'GET')
      .then(res => {

        setSongs(res.data.data)
      })
  }, [])
  if(props.linkSong==songs.map(song=>song._id)){
    console.log("bằng nhau");
  }
  const preSong = () => {
  
  }
  return (
    <AudioPlayer
      src={url}
      
    />


  )
};
export { Playing, preSong } 