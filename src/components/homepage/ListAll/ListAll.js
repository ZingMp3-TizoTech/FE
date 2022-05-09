import React, { useEffect, useState } from 'react'
import "../Homepage.css"
import ApiCaller from '../../../utils/apiCaller'
import CardItem from './Card'
import Sidebar from '../../Sidebar'
import Header from '../header/Header'
import "./ListAll.css"


export default function ListAll({ type = 'artists'}) {
  const [items, setItems] = useState([])
  useEffect(() => {
    ApiCaller(type=='artists'?'artists':'albums', 'GET')
      .then(res => {
        setItems(res.data.data)
      })
  }, [])
  
  
  return (
    <div className='container'>
      <Sidebar />
      {type=='artists'?
        <div className='wrapper-card'>
        {items.map((item,index)=>(
            <CardItem key={index} artist={item} type='artist'/>
        ))}
      </div>
      :
      <div className='wrapper-card'>
        {items.map((item,index)=>(
            <CardItem key={index} album={item} type='album'/>
        ))}
      </div>
      }
    </div>
  )
}
