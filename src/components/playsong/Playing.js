import React from 'react'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from "react-h5-audio-player";

function Playing({ idSong, setIdNumber, ...props }) {
  // const [songs, setSongs] = useState(props?.songs)
  // const idS= props.idSong - 1;
  // const [id, setId] = useState(idS)



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
