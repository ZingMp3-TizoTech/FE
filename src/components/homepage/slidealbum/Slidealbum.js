import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slidealbum.css"
import ApiCaller from "../../../utils/callAPI";
import { useNavigate } from 'react-router-dom';

export default function Slidealbum() {

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
            })
    }, [])
    let navigate = useNavigate();
    const handlePlaySong = (e)=>{
        navigate('/playsong/'+`${e.target.id}`);
    }
    let topSongs = songs?.slice(0, 5);
    return (
        <div className="slide-album">
            <Slider {...settings}>
                {topSongs.map((song, index) => (
                    <div className='img-item' key={index} onClick={handlePlaySong}>
                        <img src={song?.image[1]} alt="Image-song" id={song._id} />
                    </div>
                ))}


            </Slider>
        </div>
    );

}