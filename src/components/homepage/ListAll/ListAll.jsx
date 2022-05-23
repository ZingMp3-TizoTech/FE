import React, { useEffect, useState } from 'react'
import "../Homepage.css"
import CardItem from './Card'
import Sidebar from '../../Sidebar'
import Header from '../header/Header'
import "./ListAll.css"
import ApiCaller from '../../../utils/callAPI'


export default function ListAll({ type = 'artists'}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ApiCaller(type=='artists'?'artists':'albums', 'GET')
      .then(res => {
        setItems(res.data.data)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [])
  
  return (
    <div className='container'>
      <Sidebar />
      {type=='artists'?
        <div className='wrapper-card'>
        {items.map((item,index)=>(
            <CardItem loading={loading} key={index} artist={item} type='artist'/>
        ))}
      </div>
      :
      <div className='wrapper-card'>
        {items.map((item,index)=>(
            <CardItem loading={loading} key={index} album={item} type='album'/>
        ))}
      </div>
      }
    </div>
  )
}
