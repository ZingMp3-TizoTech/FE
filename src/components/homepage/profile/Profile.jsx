import React, { useEffect, useState } from 'react'
import { handelGetUser } from '../../../services/User';
import Cookies from 'js-cookie'
import ApiCaller from '../../../utils/callAPI';
import Sidebar from '../../sidebar/Sidebar'
import './Profile.css'
import Extend from '../../playsong/listtable/extend/Extend';
import Playing from '../../playsong/play/Playing';
import { AiOutlineCloudDownload } from 'react-icons/ai'
import beat from '../../../assets/gif/beat.gif'
import beat_img from '../../../assets/image/beat.png'
import Featured from '../featured/Featured'
import { handleGetPlaylistByUser } from '../../../services/Playlist';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import music from '../../../assets/image/music.png'


export default function Profile() {
    const [songs, setSongs] = useState([])
    const [playlist, setPlaylist] = useState()
    const [listLikeds, setListLikeds] = useState([])
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
    const [loading, setLoading] = useState(false)

    let navigate = useNavigate()
    const playByArtist = (e) => {
        navigate('/playsong/playlist/' + `${e.target.id}`);
    }
    const getListLikeds = async () => {
        if (Cookies.get('token')) {
            const user = await handelGetUser();
            setListLikeds(user.data.data[0].liked);
        }
    }

    useEffect(() => {
        ApiCaller(`songs`, 'GET')
            .then(res => {
                setSongs(res.data.data)
            })
    }, [])

    useEffect(() => {
        getListLikeds();
    }, [])

    const listSongs = ([])
    listLikeds.forEach(
        id => listSongs.push(
            songs?.filter((song) => {
                return (
                    song._id === id
                )
            }))
    )


    // console.log(songs);

    songs.sort(function(song1, song2) {
        let a = song1.listens;
        let b = song2.listens;
    
        return b - a;
    });
    
    // In ra kết quả
    console.table(songs);


    const getPlaylist = async () => {
        const pl = await handleGetPlaylistByUser()
        setPlaylist(pl.data.data.slice(0, 5));
    }

    useEffect(() => {
        getPlaylist()

    }, [])

    return (
        <div>
            <Sidebar />
            <div id='profile'>
                <p className='title-playlist'> Favorite playlist </p>
                <a className='see-more' onClick={()=>{navigate('library')}}>See more</a>
                <div className='playlist'>
                    <div className="featured">
                        <div className='wrapper-album' >
                            {playlist?.map((item, index) => (
                                <div key={index}>
                                    <div className='album-item'>
                                        {/* {loading ?
                                        <SkeletonTheme baseColor="#e6e1e1" highlightColor="#cac8c8" display='flex'>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginRight: '0px',
                                                marginTop: '-10px'
                                            }}>

                                                <p
                                                    style={{
                                                        width: '300px',
                                                        marginLeft: '0px'
                                                    }}
                                                >
                                                    <Skeleton
                                                        height={350}
                                                    />
                                                    <Skeleton
                                                        count={3}
                                                        height={20}
                                                    />
                                                </p>


                                            </div>
                                        </SkeletonTheme> : <> */}
                                        <div className='icon-play'>
                                            <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                                        </div>
                                        <img src={item?.song?.[0]?.image?.[0] ? item?.song?.[0]?.image?.[0] : music} />
                                        <div className="after" onClick={playByArtist}
                                            id={item?._id} ></div>
                                        {/* </>
                                    } */}

                                    </div>
                                    {/* {loading ? <Skeleton width={213} />
                                    : */}
                                    <div
                                        className='artist-name'
                                        style={{color:'#8a9baa'}}
                                    > {item?.name} </div>
                                    {/* } */}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className='title-song'> Favorite song </p>
                <div className='favorite-song'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '180px' }}></th>
                                <th style={{ width: '530px' }}>Name song</th>
                                <th style={{ width: '450px' }}>Artist</th>
                                <th style={{ width: '300px' }}>Album</th>
                                <th style={{ width: '300px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listSongs?.map((song, index) =>

                                <tr key={index}
                                    className={idNumber == index ? 'active-row' : " "}
                                    onClick={(e) => (
                                        setIdNumber(index),
                                        e.stopPropagation()
                                    )}
                                >
                                    <td
                                        className='row-img'
                                    >
                                        <div className='img-song'>
                                            <img className={ idNumber === index ? 'image-song' : ''} src={song[0].image[0]} />
                                        </div>
                                        { idNumber === index ?
                                            <div>
                                                <img className='img-ant' style={{ width: "30px", height: "30px" }} src={circular ? beat : beat_img} />
                                            </div> : <></>
                                        }
                                    </td>
                                    <td className={idNumber == index ? 'color' : ''}>{song[0].name}</td>
                                    <td className={idNumber == index ? 'color' : ''}>{song[0]?.artist?.name}</td>
                                    <td className={idNumber == index ? 'color' : ''}>{song[0]?.album?.name}</td>
                                    <td>
                                        <a className={idNumber == index ? 'color' : ''} href={song[0]?.url} color={'#0000'}>
                                            <AiOutlineCloudDownload
                                                fontSize={25}
                                            />
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
                <div className='play-song'>
                    <Playing
                        // action={action} 
                        // setAction={setAction}
                        setCircular={setCircular}
                        setIdNumber={setIdNumber}
                        idSong={idNumber}
                        songs={listSongs}
                        type={'favorite-list'}
                    />
                </div>
            </div>
        </div>
    )
}
