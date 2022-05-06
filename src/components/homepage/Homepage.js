import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import "./Homepage.css"
import ApiCaller from "../../utils/callAPI"


export default function Homepage() {
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    ApiCaller('artists', 'GET')
      .then(res => {
        setArtists(res.data.data)
      })
  }, [])
  useEffect(() => {
    ApiCaller('albums', 'GET')
      .then(res => {
        setAlbums(res.data.data)
      })
  }, [])
  return (
    <div className='container'>
      <Sidebar />

      <div>
        <Header />
        <Slidealbum />
        <p className='title-album'>Featured Artists</p>
        <Featured items={artists} type={'artists'} />
        <p className='title-album'>Featured Albums</p>
        <Featured items={albums} type={'albums'}/>
        <Featured />
      </div>
    </div>
  )
}
