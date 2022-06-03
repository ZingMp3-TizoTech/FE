import music from '../../../assets/image/music.png'
import React, { useEffect, useState } from 'react'
import ApiCaller from '../../../utils/callAPI'
import './Genre.css'
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

export default function Genre() {
    let navigate = useNavigate();
    const [genres, setgenres] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        ApiCaller("genres", 'GET')
            .then(res => {
                setgenres(res.data.data.slice(0,4))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    const playByGenre = (e) => {
        navigate('/playsong/genre/' + `${e.target.id}`);
    }
    return (
        <div className='wrapper-country'>
            {genres.map((genre, index) => (
                <div
                    className='country-item'
                    key={index}
                >
                    {loading ?
                        <Skeleton height={220} />
                        :
                        <div className='genre-item'>
                            <img src={genre?.image[0]? genre?.image[0] : music} />
                            <div className="after"
                                id={genre._id}
                                onClick={playByGenre}></div>
                            <p>{genre?.zone}</p>
                        </div>
                    }
                </div>
            ))}
        </div>

    )

}
