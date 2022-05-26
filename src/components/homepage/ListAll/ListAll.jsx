import React, { useEffect, useState } from 'react'
import "../Homepage.css"
import CardItem from './Card'
import Sidebar from '../../Sidebar'
import Header from '../header/Header'
import "./ListAll.css"
import ApiCaller from '../../../utils/callAPI'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { padding } from '@mui/system'


export default function ListAll({ type = 'artists' }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ApiCaller(type == 'artists' ? 'artists' : 'albums', 'GET')
      .then(res => {
        setItems(res.data.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div >
      <Sidebar />
      <div 
      style={{
        marginLeft:"120px",
        paddingLeft:'120px',
        minHeight:"100%",
        minWidth:"100%",
        display:"flex",
        flexWrap:"wrap",
        position:"absolute",
        backgroundColor:'#1e293b'
      }}
      >
        {type == 'artists' && !loading ?
          <div className='wrapper-card'>
            {items.map((item, index) => (
              <CardItem loading={loading} key={index} artist={item} type='artist' />
            ))}
          </div>
          : type == 'albums' && !loading ?
            <div className='wrapper-card'>
              {items.map((item, index) => (
                <CardItem loading={loading} key={index} album={item} type='album' />
              ))}
            </div> :
            <SkeletonTheme baseColor="#9c9c9c" highlightColor="#cac8c8" display='flex'>
              <div style={{
                display: 'flex',
                margin: '40px 0 0 100px'
              }}>
                <p
                  style={{
                    width: '300px',
                    marginLeft: '80px',
                  
                  }}
                >
                  <Skeleton
                    height={300}
                  />
                  <Skeleton
                    count={3}
                    height={20}
                  />
                </p>
                <p
                  style={{
                    width: '300px',
                    marginLeft: '80px'
                  }}
                >
                  <Skeleton
                    height={300}
                  />
                  <Skeleton
                    count={3}
                    height={20}
                  />
                </p>
                <p
                  style={{
                    width: '300px',
                    marginLeft: '80px'
                  }}
                >
                  <Skeleton
                    height={300}
                  />
                  <Skeleton
                    count={3}
                    height={20}
                  />
                </p>
              </div>
            </SkeletonTheme>
        }
      </div>

    </div>
  )
}
