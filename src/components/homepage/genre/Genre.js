
import React, { useEffect, useState } from 'react'
import ApiCaller from '../../../utils/apiCaller'
import './Genre.css'

export default function Genre() {
    const [genres, setgenres] = useState([])
    useEffect(() => {
        ApiCaller("genres", 'GET')
            .then(res => {
                setgenres(res.data.data)
            })
    }, [])
    return (
        <div className='wrapper-country'>
            {genres.map((genre, index) => (
                <div className='country-item' key={index}>
                    <img src={genre?.image[0]} />
                    <div className="after"></div>
                    <p>{genre?.zone}</p>
                </div>
            ))}
        </div>

    )

}
