import React, { useEffect } from 'react'
//mport AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "react-h5-audio-player";

 function Playing({...props}) {
  console.log(props); 
  return (  
       <AudioPlayer
       
         src={props.linkSong}
        // layout="stacked-reverse"
        // showSkipControls={true}
        // showJumpControls={false}
      /> 
    

  )
};
export default Playing
