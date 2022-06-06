import React, { useState, useEffect } from 'react'
import './ListSong.css'
import ApiCaller from '../../../utils/callAPI'
import Playing from '../play/Playing'
import DetailSong from '../detail/DetailSong'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { handleGetPlaylistById } from '../../../services/Playlist'
import Extend from './extend/Extend'
import { handelGetUser } from '../../../services/User'
import Cookies from 'js-cookie'
import beat from '../../../assets/gif/beat.gif'
import beat_img from '../../../assets/image/beat.png'
import { toast } from 'react-toastify'
import Duration from './extend/Duration'
import {handleGetAllAlbumAPI} from '../../../services/Album'
import { handleGetAllSongAPI, handleGetSongById, updateRateAndListen } from '../../../services/Song'

export default function ListSongs({ type }) {
    const id = useParams();
    const [songs, setSongs] = useState([])
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])
    const [action, setAction] = useState(type)
    const [playlist, setPlaylist] = useState([])
    const [islike, setLiked] = useState()
    const [listLike, setListLike] = useState([])



    let a = songs.findIndex(i => i._id === id.id)


    // useEffect(() => {
    //     setLoading(true);
    //     ApiCaller('songs', 'GET')
    //         .then(res => {
    //             setSongs(res.data.data)
    //         })
    //         .finally(() => {
    //             setLoading(false)

    //         })
    // }, [])

    // useEffect(() => {
    //     setLoading(true);
    //     ApiCaller(`album/${id.id}`, 'GET')
    //         .then(res => {
    //             setAlbums(res.data.data)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [])
    const getSongs = async () => {
            const song = await handleGetAllSongAPI()
            setSongs(song.data.data);
    }

    useEffect(() => {
        getSongs()
    }, [])

    const getPlaylist = async (id) => {
        if (Cookies.get('token') != null && type == 'playlists') {
            const pl = await handleGetPlaylistById(id)
            setPlaylist(pl.data.data);
        }
    }

    useEffect(() => {
        getPlaylist(id.id)
    }, [])

    const getAlbums = async () => {
        const song = await handleGetAllAlbumAPI()
        setAlbums(song.data.data);
}

useEffect(() => {
    getAlbums()
}, [])

    const items =
        id?.id && type == "artists" ?
            songs?.filter((song) => {
                return (
                    song.artist?._id === id.id
                )
            })
            : id?.id && type == "genres" ?
                songs?.filter((song) => {
                    return (
                        song.genre?._id === id.id
                    )
                })
                : id?.id && type == "albums" ?
                    albums[0]?.songs
                    : type == "playlists" ?
                        playlist?.song
                        : songs

    const handleUpdateListensAndRates = async (id, listens, rates, getAlbums, getPlaylist, getSongs) => {
        // console.log(id);
        // console.log(type);
        // console.log(listens);
        const a = await updateRateAndListen(id, rates, listens + 1)
        if(type == 'albums'){
            getAlbums&&getAlbums()
        } else {
            if(type == 'playlists'){
                getPlaylist&&getPlaylist()
            } else {
                if(type == 'genres' || type == 'artists' || type == 'songs') {
                    getSongs&&getSongs()
                }
            }
        }
    }

    const liked = async (id) => {
        if (Cookies.get('token')) {
            const user = await handelGetUser();
            setListLike(user.data.data[0].liked);

            if (listLike.includes(`${id}`) == true) {

                setLiked(true)
                const user = await handelGetUser();
                setListLike(user.data.data[0].liked);
            }
            else {
                setLiked(false)
                const user = await handelGetUser();
                setListLike(user.data.data[0].liked);
            }
        }
        else toast.warning('Please login to continue!');
    }

    return (
        <div>
            <div className='wrapper-song'>


                <DetailSong
                    idSong={idNumber} songs={items} circular={circular}
                    type={type} albums={albums} loading={loading}
                    playlist={playlist}
                />

                <div className='wrapper-list-song'>
                    <table style={{
                        maxHeight: 'fit-content',
                        minHeight: 'fit-content',
                        overflow: 'scroll',

                    }} >
                        <thead
                            style={{
                                background: '#334155',
                                height: '70px'
                            }}
                        >
                            <tr>
                                <th style={{
                                    width: '5%',

                                }}> </th>
                                <th style={{
                                    width: '40%',
                                    textAlign: 'left'
                                }}>Name song</th>
                                <th style={{
                                    width: '15%',
                                    textAlign: 'left'
                                }}>Artist</th>
                                <th style={{
                                    width: '20%',
                                    textAlign: 'center'
                                }}>Album</th>
                                <th style={{
                                    width: '20%',
                                    textAlign: 'center'
                                }}>Duration</th>
                                <th style={{
                                    width: '10%',
                                    textAlign: 'center'
                                }}>  </th>


                            </tr>
                        </thead>
                        {!loading ? <>
                            <tbody>
                                {items?.map((song, index) => (

                                    <tr
                                        key={index}
                                        onClick={(e) => {
                                            setIdNumber(index);
                                            e.stopPropagation();
                                            setAction(" ");
                                            handleUpdateListensAndRates(song?._id, song?.listens, song?.rates, getAlbums, getPlaylist, getSongs)
                                        }
                                        }
                                        className={index === idNumber ? "active-row" : ""}>
                                        <td scope="row"
                                            className={index === idNumber ? "color" : ""}
                                        >
                                            {(song._id != null && index === idNumber) ?
                                                <div >
                                                    <img style={{ width: "40px", height: "40px" }} src={circular ? beat : beat_img} />
                                                </div> : index + 1
                                            }</td>
                                        <td
                                            className={index === idNumber ? "color" : ""}
                                        >{song?.name}</td>
                                        <td
                                            className={index === idNumber ? "color" : ""}
                                        >{type == 'albums' ?
                                            <>{albums[0]?.artist?.name}</> : <>{song?.artist?.name}</>}</td>
                                        <td
                                            className={index === idNumber ? "color" : ""}
                                            style={{
                                                textAlign: 'center',
                                            }}>{type == 'albums' ?
                                                <>{albums[0]?.name}</> : <>{song?.album?.name}</>}</td>

                                        <td style={{ textAlign: 'center' }}> <Duration url={song?.url} /> </td>
                                        <td
                                            className={index === idNumber ? "color" : ""}
                                            style={{
                                                textAlign: 'center'
                                            }}> <div
                                                onMouseEnter={(e) => liked(song._id)}
                                                onMouseLeave={(e) => liked(song._id)}
                                            >
                                                <Extend onDeleteSuccess={() => getPlaylist(id.id)} idPlaylist={id.id} type={type} liked={islike} url={song?.url} id={song._id} />

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </> : <><ReactLoading
                            height='900px'
                            width='100px'
                            className='loading'
                            type='bars'
                            color='#a696d5' /></>}

                    </table>
                </div>
            </div>

            <div className='play-child'>
                {<Playing action={action} setAction={setAction} i={a} type={type} setCircular={setCircular} setIdNumber={setIdNumber} idSong={idNumber} songs={items} />}
            </div>


        </div>
    )

}