import React,{useState,useEffect} from 'react'
import ApiCaller from '../../utils/callAPI'
import './DetailSong.css'

export default function DetailSong({...props}) {
 console.log(props.img);
  return (
    <div className='wrapper-detail-song'>
        <h1> Now playing </h1>
        <h3 className='text-neutral-400 text-2xl'>  </h3>
        <div className='img'>
            <img
            src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' 
            alt='avatar'/>
        </div>
        <div className='img-author' style={{
          marginTop:"300px"
        }}>
         
            <>
            <img 
            src={props.img} 
            alt='avatar' />
            <span>{props.artistName}</span>
            </>
        
            
        </div>
    </div>
  )
}
