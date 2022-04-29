import React from 'react'
import Sidebar from '../Sidebar'
import Albums from './Albums'
import Slidealbum from './Slidealbum'
import "./Homepage.css"
import Header from "./Header.js"
import "./Header.css"


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
