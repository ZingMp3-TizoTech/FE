import React, { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'
import './ListSong.css'
import ApiCaller from '../../utils/callAPI'
import Playing from './Playing'
import DetailSong from './DetailSong'
export default function ListSongs() {
    const [songs, setSongs] = useState([])
    // const [link, setLink] = useState("");
    // const [name, setName] = useState('');
    // const [imgsong, setImg] = useState('');
    const [idNumber, setIdNumber] = useState();
    useEffect(() => {
        ApiCaller('songs', 'GET')
            .then(res => {
                console.log(res);
                setSongs(res.data.data)
            })
    }, [])
    return (
        <>
            <DetailSong
            //  artistName={name} img={imgsong} 
             />
            <div className='wrapper-list-song'>
                <table>
                    <thead
                        style={{
                            background: '#85A5A5'
                        }}
                    >
                        <tr>
                            <th style={{
                                width: '5%'
                            }}>#</th>
                            <th style={{
                                width: '50%',
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
                                width: '10%'
                            }}> <FaDownload /> </th>
                        </tr>
                    </thead>
                    <tbody>

                        {songs.map((song,index) => (
                            <>
                                <tr>
                                    <td 
                                    onClick={(e) => { setIdNumber(index+1); 
                                        // setLink(song.url); setName(song.artist.name); setImg(song.image[0])
                                     }
                                    } scope="row">{(song._id != null) ? index + 1 : <></>
                                    }</td>
                                    <td 
                                    // onClick={(e) => { setLink(song.url); setName(song.artist.name); setImg(song.image[0]) }} 
                                    >{song.name}</td>
                                    <td 
                                    // onClick={(e) => { setLink(song.url); setName(song.artist.name); setImg(song.image[0]) }} 
                                    >{song.artist.name}</td>
                                    <td style={{
                                        textAlign: 'center'
                                    }}>{
                                            song.album ? <>{song.album.name}</> : <></>}</td>
                                    <td >
                                        <td></td>
                                        <FaDownload />
                                    </td>
                                </tr>
                            </>
                        ))
                        }



                    </tbody>

                </table>
                <div style={{
                    marginTop: "100px"
                }}>

                </div>

            </div>

            <div >
                <div className='play-child'>
                    { <Playing setIdNumber={setIdNumber} idSong={idNumber} songs={songs} />}
                </div>
            </div>
        </>)
}
