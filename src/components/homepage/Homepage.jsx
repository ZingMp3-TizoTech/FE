import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import "./Homepage.css"
import ApiCaller from "../../utils/callAPI"
import Genre from './genre/Genre'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Homepage() {
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ApiCaller('artists', 'GET')
      .then(res => {
        setArtists(res.data.data)
      })
      .finally(() => (
        setLoading(false)
      ))
  }, [])
  useEffect(() => {
    ApiCaller('albums', 'GET')
      .then(res => {
        setAlbums(res.data.data)
      })
      .finally(() => (
        setLoading(false)
      ))
  }, []);

  // console.log(loading);

  return (
    <div className='container' style={{ backgroundColor: '#1e293b', maxWidth: '100%', paddingLeft: "6%" }}>
      <Sidebar />
      <div>
        <div style={{
          zIndex: "1",
          marginTop: "20px",
          paddingLeft: '30px',

        }}>
          <Header />
        </div>
        <Slidealbum />
        <p className='title-album'>Featured Artists</p>
        <Featured items={artists} type={'artists'} loading={loading}/>
        <p className='title-album'>Genres</p>
        <div style={{
          zIndex: "1"
        }}>
          <Genre />
        </div>
        <p className='title-album'>Featured Albums</p>
        <Featured items={albums} type={'albums'} loading={loading}/>

      </div>
    </div>
  )
}
