import React from 'react'
import DetailSong from './DetailSong'
import ListSongs from './ListSong'
import Playing from './Playing'
import './PlaySong.css'

export default function PlaySong({...props}) {
  return (
    <>
        <div className='container-page'>
        <ListSongs />
       
    </div>
    </>
  )
}
