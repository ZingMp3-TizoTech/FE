import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slidealbum.css"

export default class Slidealbum extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div className="slide-album">
                    <Slider {...settings}>
                        <div className='img-item'>
                            <img src='	https://photo-zmp3.zmdcdn.me/banner/8/5/c/5/85c57767a12c519aac6c4fce12b33dd9.jpg' alt="" />
                        </div>
                        <div className='img-item'>
                            <img src='	https://photo-zmp3.zmdcdn.me/banner/8/5/c/5/85c57767a12c519aac6c4fce12b33dd9.jpg' alt="" />
                        </div>
                        <div className='img-item'>
                            <img src='	https://photo-zmp3.zmdcdn.me/banner/8/5/c/5/85c57767a12c519aac6c4fce12b33dd9.jpg' alt="" />
                        </div>
                        <div className='img-item'>
                            <img src='	https://photo-zmp3.zmdcdn.me/banner/8/5/c/5/85c57767a12c519aac6c4fce12b33dd9.jpg' alt="" />
                        </div>
                        <div className='img-item'>
                            <img src='	https://photo-zmp3.zmdcdn.me/banner/8/5/c/5/85c57767a12c519aac6c4fce12b33dd9.jpg' alt="" />
                        </div>
                    </Slider>
            </div>
        );
    }
}