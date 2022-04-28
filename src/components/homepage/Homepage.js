import React from 'react'
import Sidebar from '../Sidebar'
import Albums from './album/Albums'
import Slidealbum from './slidealbum/Slidealbum'
import "./Homepage.css"
import Header from "./header/Header"
import "./Homepage.css"


export default function Homepage() {
  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <Header/>
        <Slidealbum/>
        <Albums/>
        <Albums/>
        <Albums/>

      </div>
    </div>
  )
}
