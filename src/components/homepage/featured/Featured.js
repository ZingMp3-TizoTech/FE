import "./Featured.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';
import { useState } from "react";

export default function Albums({ items, type = 'artists' }) {
   
    let list = items?.slice(0, 5);
    let navigate = useNavigate();
    const playByArtist = (e) => {
        navigate('/playsong/artist/' + `${e.target.id}`);
    }
    const playByAlbum = (e) => {
        navigate('/playsong/album/' + `${e.target.id}`);
    }
    const awesomePlaceholder = (
        <div >
            <RectShape className='loading-album' color='gray' style={{ width: 213, height: 213 }} />
            <TextBlock rows={1} color='gray' style={{ width: "200px", marginLeft: "10px" }} />
        </div>
    )
    return (
        <>
            {type == "artists" ?
                <div className="featured">
                    <a className="more" onClick={() => { navigate('artists') }} >See more...</a>
                    <div className='wrapper-album' >
                        {list?.map((artist, index) => (
                            <div key={index}>
                                <div className='album-item'>
                                    <div className='icon-play'>
                                        <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                                    </div>
                                    <img src={artist?.image[0]} />
                                    <div className="after" onClick={playByArtist}
                                        id={artist?._id} ></div>
                                </div>
                                <div
                                    className='artist-name'
                                > {artist?.name} </div>
                            </div>
                        ))}



                    </div>
                </div>
                :
                <div className="featured">
                    <a className="more" onClick={() => { navigate('albums') }}  >See more...</a>
                    <div className='wrapper-album' >
                        {list?.map((album, index) => (
                            <div key={index}>
                                <div className='album-item'>
                                    <span className='icon-play'
                                        onClick={(e) => {
                                            navigate('playsong');
                                        }}
                                    >
                                        <PlayCircleOutlineIcon
                                            sx={{ fontSize: 60 }}
                                        />
                                    </span>
                                    {album?.artist != null ?
                                        <img src={album?.artist?.image[0]} /> 
                                        :
                                        <img src="https://play-lh.googleusercontent.com/aA2rpO5sXUJmnkB-H9GlLz8BqhpIw27wG2xc1-9j5rg1h_LmcGxnAd6vOVXTZO8F-D0" />
                                    }

                                    <div class="after" onClick={playByAlbum} id={album?._id}></div>
                                </div>
                                <a href='#' className='artist-name'> {album?.name} </a>
                            </div>
                        ))}



                    </div>
                </div>
            }
        </>

    )
}
