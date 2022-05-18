import React from 'react'
import ListSongs from './ListSong'
// import './PlaySong.css'

export default function PlaySong({type}) {
  return (
    <>
        <div className='container-page'>

        <ListSongs type={type} />
    </div> 
    </>
  )
}
