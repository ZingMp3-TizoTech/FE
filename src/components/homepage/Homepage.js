import React from 'react'
import Sidebar from '../Sidebar'
import Albums from './Albums'
import Slidealbum from './Slidealbum'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <Slidealbum/>
        <Albums/>
      </div>
    </div>
  )
}
