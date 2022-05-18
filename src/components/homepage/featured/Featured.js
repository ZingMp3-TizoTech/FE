import "./Featured.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from "react-router-dom";

export default function Albums({ items, type = 'artists' }) {
    let list = items?.slice(0, 5);
    let navigate = useNavigate();
    
    return (
        <>
            {type == "artists" ?
                <div className="featured">
                    <a className="more" onClick={()=>{navigate('artists')}} >See more...</a>
                    <div className='wrapper-album' >
                        {list?.map((artist, index) => (
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
                                    <img src={artist?.image[0]} />
                                    <div className="after"></div>
                                </div>
                                <a href='#' className='artist-name'> {artist?.name} </a>
                            </div>
                        ))}



                    </div>
                </div>
                :
                <div className="featured">        
                    <a className="more" onClick={()=>{ navigate('albums')}}  >See more...</a>
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
                                    <img src={album?.artist?.image[0]} />
                                    <div class="after"></div>
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
