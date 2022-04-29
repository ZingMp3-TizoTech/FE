import React, { useEffect, useState } from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";

function Playing({ ...props }) {
  console.log(props.songs, props.idSong);
  const [songs, setSongs] = useState([])
  setSongs(props.songs)
  const idS= props.idSong - 1;
  const [id, setId] = useState(idS)
//  console.log(songs[id]);
  // const [url, setUrl] = useState("songs[props.idSong].url")

  
// console.log(songs[0]);


  const handleClickNext = () => {
    if(id<songs.length){
      setId(id+1)
      // setUrl(songs[id].url)
    } else {
      setId(1)
    }
    console.log(id);
  }
  const handleClickPrev = () => {
    if(id>0){
      setId(id-1)
    } else {
      setId(songs.lengt)
    }
    console.log(id);
  }
  // console.log(url);
  return (
  
    <AudioPlayer

      src={props.songs[1]?.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
    />


  )
};
export default Playing
