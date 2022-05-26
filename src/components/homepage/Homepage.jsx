import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import ApiCaller from "../../utils/callAPI"
import Genre from './genre/Genre'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Extend from '../playsong/Extend'
import AddSong from '../playsong/ModalPlaylist'

export default function Homepage() {
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ApiCaller('artists', 'GET')
      .then(res => {
        setArtists(res.data.data)
        setLoading(false)
      })
      .finally(()=>(
        setLoading(false)
      ))
  }, [])
  useEffect(() => {
    ApiCaller('albums', 'GET')
      .then(res => {
        setAlbums(res.data.data)
        setLoading(true)
      })
      .finally(()=>(
        setLoading(false)
      ))
  }, [])
 ;


  return (
    <div className='container'   
    style={{backgroundColor:'#1e293b',maxWidth:'100%',paddingLeft:"6%"}}
    >
   
       
   <Sidebar />
    
      <div>
        
        <div style={{
          zIndex:"1",
          marginTop:"20px",
          paddingLeft:'30px',
         
        }}>
          <Header/>
          
        
        </div>
          <Slidealbum />
        <p className='title-album' style={{color:"white"}}>Featured Artists</p>
        <Featured items={artists} type={'artists'} />
        <p className='title-album' style={{color:"white"}}>Genres</p>
        <div style={{
          zIndex:"1"
        }}>
        <Genre />
        </div>
        <p className='title-album' style={{color:"white"}}>Featured Albums</p>
        <Featured  items={albums} type={'albums'}/>
          
      </div>
    </div>
  )
}
