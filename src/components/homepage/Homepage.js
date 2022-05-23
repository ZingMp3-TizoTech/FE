import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import "./Homepage.css"
import ApiCaller from "../../utils/callAPI"
import Genre from './genre/Genre'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
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
      .finally(()=>(
        setLoading(false)
      ))
  }, [])
  useEffect(() => {
    ApiCaller('albums', 'GET')
      .then(res => {
        setAlbums(res.data.data)
      })
      .finally(()=>(
        setLoading(false)
      ))
  }, [])
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <div style={{
          zIndex:"4"
        }}>
          <Header />
        </div>
          <Slidealbum />
        <p className='title-album'>Featured Artists</p>
        <Featured items={artists} type={'artists'} />
        <p className='title-album'>Genres</p>
        <div style={{
          zIndex:"1"
        }}>
        <Genre />
        </div>
        <p className='title-album'>Featured Albums</p>
        <Featured items={albums} type={'albums'}/>
      </div>
    </div>
  )
}
