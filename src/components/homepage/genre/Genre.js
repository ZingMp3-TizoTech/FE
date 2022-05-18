
import React, { useEffect, useState } from 'react'
import ApiCaller from '../../../utils/callAPI'
import './Genre.css'
import { useNavigate } from "react-router-dom";

export default function Genre() {
    let navigate = useNavigate();
    const [genres, setgenres] = useState([])
    useEffect(() => {
        ApiCaller("genres", 'GET')
            .then(res => {
                setgenres(res.data.data)
            })
    }, [])
    const playByGenre = (e)=>{
        navigate('/playsong/genre/'+`${e.target.id}`);
    }
    return (
        <div className='wrapper-country'>
            {genres.map((genre, index) => (
                <div 
                    className='country-item' 
                    key={index}
                >
                    <img src={genre?.image[0]} />
                    <div className="after" 
                    id={genre._id}
                    onClick={playByGenre}></div>
                    <p>{genre?.zone}</p>
                </div>
            ))}
        </div>

    )

}
