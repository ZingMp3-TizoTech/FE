import React, { useState,useEffect } from 'react'
import ApiCaller from '../../../utils/callAPI'
import './Genre.css'

export default function Genre() {
    const [genres,setGenre] = useState([])
    useEffect(() => {
        ApiCaller('genres', 'GET')
          .then(res => {
            setGenre(res.data.data)
          })
      }, [])
  return (
    <div className='wrapper-country'>
        {genres.map(genre=>(
             <div className='country-item'>           
             <img src={genre?.image[0]}/>
             <div className="after"></div>
             <p>{genre?.zone}</p>
         </div>
        ))
       
            }
    </div>
    
  )
}
