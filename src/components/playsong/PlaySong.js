import React from 'react'
import DetailSong from './DetailSong'
import ListSongs from './ListSong'
import Playing from './Playing'
import './PlaySong.css'

export default function PlaySong() {
  return (
    <>
        <div className='container-page'>
        <DetailSong />
        <ListSongs />
    </div>
    <Playing/>
    </>
  )
}
