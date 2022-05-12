import React, { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'
import './ListSong.css'
import ApiCaller from '../../utils/callAPI'
import {Playing} from './Playing'
import DetailSong from './DetailSong'
import { style } from '@mui/system'
import { Button, StepButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function ListSongs(params) {
    const id =params.id
    const navigate=useNavigate();
    const [songs, setSongs] = useState([])
    const [link, setLink] = useState("");
    const [name, setName] = useState('');
    const [imgsong, setImg] = useState('');
    const [filterSongs,setFilterSongs]=useState('');
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
   
    useEffect(() => {
        ApiCaller('songs', 'GET')
            .then(res => {
                setSongs(res.data.data)
            })
    }, [])
    //onst songsbyablum(props.songsbyablum)
    return (

        <div>   
            <div>
               
            </div>
            <div className='wrapper-song'>
                
                <DetailSong
                    idSong={idNumber} songs={songs} circular={circular}
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
                                    width: '10%',
                                    textAlign:'center'
                                }}> <FaDownload /> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {songs.map((song, index) => (
                                
                                    <tr
                                    key={index}
                                    onClick={(e) => {
                                        setIdNumber(index);
                                    }
                                    }
                                    className={index===idNumber?"active-row":""} 
                                    >
                                        <td scope="row">{(song._id != null) ? index + 1 : <></>
                                            }</td>
                                        <td
                                        >{song.name}</td>
                                        <td
                                        >{song.artist.name}</td>
                                        <td style={{
                                            textAlign:'center',
                                        }}>{
                                                song.album ? <>{song.album.name}</> : <></>}</td>
                                        <td style={{
                                            textAlign:'center'                                      
                                            }}>
                                            <a href={song.url}><FaDownload /></a>
                                        </td>
                                    </tr>
                                
                            ))
                            }



                        </tbody>

                    </table>
                    <div style={{
                        marginTop: "100px"
                    }}>

                    </div>

                </div>
            </div>
            <div >
                <div className='play-child'>

                    {<Playing setCircular={setCircular} setIdNumber={setIdNumber} idSong={idNumber} songs={songs} />}
                </div>
            </div>
        </div>
    )
}
