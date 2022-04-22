import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function Playing() {
  return (
    <div>
         <AudioPlayer
        className="player-music"
        src={'https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3'}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
      />
    </div>
  )
}
