import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Featured from './featured/Featured'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import ApiCaller from "../../utils/callAPI"
import Genre from './genre/Genre'
<<<<<<< HEAD
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Extend from '../playsong/Extend'
import AddSong from '../playsong/ModalPlaylist'
=======
import 'react-loading-skeleton/dist/skeleton.css'
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
import 'animate.css';
export default function Homepage() {
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [scrollSidebar, setScrollSidebar] = useState('animate__fadeInLeft')


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

<<<<<<< HEAD
 function handleScroll() {
   
   const ob=document.getElementById("test");
   ob.addEventListener("scroll", function () {
    if(ob.scrollTop>=200)
    setScrollSidebar('animate__fadeOutLeft')   
    else
      setScrollSidebar('animate__bounceInLeft')      
  });
}


 

  return (
    <div className='container' id='test' onScroll={handleScroll}
    style={{backgroundColor:'#1e293b',paddingLeft:"6%"}}
    >
    <div  className={`container-header animate__animated ${scrollSidebar}`} 
    style={{marginLeft:'-7%', maxHeight: "100%"}}>    
      </div>   
    <Sidebar />
   
    
      <div>
        
        <div       
        style={{
          backgroundColor:"red",
          zIndex:"1",        
          marginTop:"20px",
          marginLeft:'240px'}}
          >
          <Header/>
         </div>
        <div style={{
          zIndex:"1",
        
          paddingLeft:'10px',
         
=======
  function handleScroll() {
    const ob = document.getElementById("test");
    ob.addEventListener("scroll", function () {
      if (ob.scrollTop >= 200)
        setScrollSidebar('animate__fadeOutLeft')
      else
        setScrollSidebar('animate__bounceInLeft')
    });
  }




  return (
    <div className='container'
      style={{ backgroundColor: '#1e293b', paddingLeft: "6%" }}
    >
      <div>
        <Sidebar />
      </div>


      <div>

        <div

          style={{
            zIndex: "1",
            marginTop: "20px",
            paddingLeft: '40px',
          }}>
          <Header />
        </div>
        <div style={{
          zIndex: "1",
          paddingLeft: '60px',
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
        }} >
          <Slidealbum />
        </div>
        <div style={{
<<<<<<< HEAD
          zIndex:"1",
        
          paddingLeft:'10px',
         
        }}>

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
          
=======
          zIndex: "1",
          paddingLeft: '20px',
        }}>

          <p className='title-album' style={{ color: "white" }}>Featured Artists</p>
          <Featured items={artists} type={'artists'} />
          <p className='title-album' style={{ color: "white" }}>Genres</p>
          <div style={{
            zIndex: "1"
          }}>
            <Genre />
          </div>
          <p className='title-album'>Featured Albums</p>
          <Featured items={albums} type={'albums'} loading={loading} />
        </div>
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
      </div>
    </div>
  )
}