import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slidealbum.css"
import ApiCaller from "../../../utils/callAPI";
import { handleGetAlbumById } from "../../../services/Album";
import { Navigate } from "react-router-dom";

export default  function Slidealbum() {
    const [albums, setAlbums] = useState();
    const   handleChooseAlbum= async (id_album)=>{
       //navigate('/play/:idablum')
    const albumByID=   await handleGetAlbumById(id_album)
        console.log("chọn",albumByID);
    }
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
    }
    
    useEffect(() => {
        ApiCaller('albums', 'GET')
            .then(res => {

                setAlbums(res.data.data)
            })
    }, [])
   
    return (
        <>
            <div className="slide-album">
                <Slider {...settings}>
                    {albums?.map(album => (
                            <div className = 'img-item' onClick={(e)=>handleChooseAlbum(album?._id)} >
                                <img src={album?.artist?.image[0]} alt="" />
                            </div>
                        ))}
            </Slider>
        </div >
       
       </>
       )
}