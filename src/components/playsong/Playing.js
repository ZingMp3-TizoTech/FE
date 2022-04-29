import React, { useState } from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";

function Playing({ idSong, setIdNumber, ...props }) {
  console.log(props.songs, props.idSong);
  const [songs, setSongs] = useState(props?.songs)
  // setSongs(props.songs)
  const idS= props.idSong - 1;
  const [id, setId] = useState(idS)
//  console.log(songs[id]);
  // const [url, setUrl] = useState("songs[props.idSong].url")

  
// console.log(songs[0]);


  const handleClickNext = () => {
    let _id = id;
    if(id<songs.length){
      // setId(id+1)
      // setUrl(songs[id].url)
      ++_id;
    } else {
      // setId(1)
      _id = 1;
    }
    setIdNumber && setIdNumber(_id);
  }
  const handleClickPrev = () => {
    let _id = idSong;
    console.log('id', idSong)
    // if(id>0){
    //   // setId(id-1)
    //   _id-=1;
    // } else {
    //   // setId(songs.lengt)
    //   _id = props.songs.length - 1;
    // }
    _id = idSong > 0 ? idSong - 1 : props.songs.length - 1;
    console.log("Nam ca", _id)
    setIdNumber && setIdNumber(_id);
  }
  // console.log(url);
  return (
  
    <AudioPlayer

      src={props.songs[idSong]?.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
    />


  )
};
export default Playing
