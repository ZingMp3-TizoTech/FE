import React, { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'
import './ListSong.css'
import ApiCaller from '../../utils/callAPI'
import Playing from './Playing'
import DetailSong from './DetailSong'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { handleGetAlbumById } from '../../services/Album'
import { handleGetPlaylistById, handleGetPlaylistByUser } from '../../services/Playlist'

export default function ListSongs({ type }) {
    const id = useParams();
    const [songs, setSongs] = useState([])
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])
    const [action, setAction] = useState(type)
    const [playlist, setPlaylist] = useState([])
    let a = songs.findIndex(i => i._id === id.id)


    useEffect(() => {
        setLoading(true);
        ApiCaller('songs', 'GET')
            .then(res => {
                setSongs(res.data.data)
            })
            .finally(() => {
                setLoading(false)

            }) 
    }, [])
    
    const getPlaylist = async (id) => {
        const pl = await handleGetPlaylistById(id)    
        setPlaylist(pl.data.data);
    }

    useEffect(() => {
        getPlaylist(id.id)
    }, [])      
    console.log(playlist);

    useEffect(() => {
        setLoading(true);
        ApiCaller(`album/${id.id}`, 'GET')
            .then(res => {
                setAlbums(res.data.data)
            })
            .finally(() => {
                setLoading(false)
            })
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
                    :type == "playlists"?
                    playlist?.song
                    : songs
    return (
        <div>
            <div className='wrapper-song'>

                <DetailSong
                    idSong={idNumber} songs={items} circular={circular} type={type} albums={albums} loading={loading}
                />

                <div className='wrapper-list-song'>

                    <table>

                        <thead
                            style={{
                                background: 'rgb(72 137 137)',
                                height: '90px'
                            }}
                        >
                            <tr>
                                <th style={{
                                    width: '5%'
                                }}>#</th>
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
                                }}>Author</th>
                                <th style={{
                                    width: '10%',
                                    textAlign: 'center'
                                }}> <FaDownload /> </th>
                            </tr>
                        </thead>
                        {!loading ? <>
                            <tbody>
                                {items?.map((song, index) => (

                                    <tr
                                        key={index}
                                        onClick={(e) => {
                                            setIdNumber(index);
                                            setAction(" ");
                                        }
                                        }
                                        className={index === idNumber ? "active-row" : ""}
                                    >
                                        <td scope="row">{(song._id != null) ? index + 1 : <></>
                                        }</td>
                                        <td
                                        >{type == "playlists" ? song?.name : song?.name}</td>
                                        <td
                                        >{song?.artist?.name}</td>
                                        <td style={{
                                            textAlign: 'center',
                                        }}>{
                                                song?.album ? <>{song?.album?.name}</> : <></>}</td>
                                        <td style={{
                                            textAlign: 'center'
                                        }}>
                                            <a href={song?.url}><FaDownload /></a>
                                        </td>
                                    </tr>

                                ))
                                }
                            </tbody>
                        </> : <><ReactLoading
                            height='900px'
                            width='100px'
                            className='loading'
                            type='bars'
                            color='#a696d5' /></>}

                    </table>


                    <div style={{
                        marginTop: "100px"
                    }}>

                    </div>
                </div>
            </div>
            <div >
                <div className='play-child'>
                    {<Playing i={a} action={action} setAction={setAction} setCircular={setCircular} setIdNumber={setIdNumber} idSong={idNumber} songs={items} />}
                </div>
            </div>
        </div>
    )
}
