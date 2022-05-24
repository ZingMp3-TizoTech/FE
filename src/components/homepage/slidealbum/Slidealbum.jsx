import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slidealbum.css"
import ApiCaller from "../../../utils/callAPI";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

import { useNavigate } from 'react-router-dom';
export default function Slidealbum() {

    const [loading, setLoading] = useState(false)
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
    };
    const [songs, setSongs] = useState([])
    useEffect(() => {
        ApiCaller('songs', 'GET')
            .then(res => {
                setSongs(res.data.data)
                setTimeout(() => {
                    setLoading(true)
                }, 500)

            })
    }, [])
    let navigate = useNavigate();
    const handlePlaySong = (e)=>{
        navigate('/playsong/'+`${e.target.id}`);
    }
    let topSongs = songs?.slice(0, 5);
    const awesomePlaceholder = (
        <div >
            <RectShape
                color='darkgray ' style={{ width: 372, height: 210, borderRadius: 10 }} />

        </div>
    );
    return (
        <>
            <div className="slide-album">
                <Slider {...settings}>
                    {topSongs.map((song, index) => (
                        <div className='img-item' key={index}>
                            {loading ? <img src={song?.image[1]} alt="Image-song" /> : <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder} ready={false} />}

                        </div>
                    ))}
                </Slider>
            </div>


        </>
    );

}