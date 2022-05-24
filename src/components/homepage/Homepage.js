import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import "./Homepage.css"
import ApiCaller from "../../utils/callAPI"
import Genre from './genre/Genre'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

export default function Homepage() {
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    ApiCaller('artists', 'GET')
      .then(res => {
        setArtists(res.data.data)
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    ApiCaller('albums', 'GET')
      .then(res => {
        setAlbums(res.data.data)
        setLoading(true)
      })
  }, [])
 ;
  return (
    <div className='container'>
      <Sidebar />
    
      <div>
     
        <div style={{
          zIndex:"4",
          marginTop:"20px"
        }}>
          <Header/>
          
        
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
        <Featured  items={albums} type={'albums'}/>
          
      </div>
    </div>
  )
}
