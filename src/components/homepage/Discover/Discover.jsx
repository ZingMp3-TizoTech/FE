import React, { useEffect, useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import beat from '../../../assets/gif/beat.gif'
import beat_img from '../../../assets/image/beat.png'
import ApiCaller from '../../../utils/callAPI'
import Playing from '../../playsong/play/Playing'
import './Discover.css'
import {FcBarChart} from 'react-icons/fc'

export default function Discover() {

    const [songs, setSongs] = useState([])
    const [playlist, setPlaylist] = useState()
    const [listLikeds, setListLikeds] = useState([])
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ApiCaller(`songs`, 'GET')
            .then(res => {
                setSongs(res.data.data)
            })
    }, [])

    songs.sort(function (song1, song2) {
        let a = song1.listens;
        let b = song2.listens;
        return b - a;
    });
    const listsongs = songs.slice(0,10)
    console.table(songs);
    return (
        <div>
            <Sidebar />
            <div id='discover'>
                <p className='title'> <FcBarChart /> Top 10 songs</p>
                <div className='favorite-song'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '150px' }}></th>
                                <th style={{ width: '640px' }}>Name song</th>
                                <th style={{ width: '430px' }}>Artist</th>
                                <th style={{ width: '300px' }}>Album</th>
                                <th style={{ width: '280px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listsongs?.map((song, index) =>

                                <tr key={index}
                                    className={idNumber == index ? 'active-row' : " "}
                                    onClick={(e) => (
                                        setIdNumber(index)
                                    )}
                                >
                                    <td>
                                        <p className={index == 0 ? 'number-1' :
                                            index == 1 ? 'number-2' :
                                                index == 2 ? 'number-3' :
                                                    'number'
                                        }>
                                            {index + 1}
                                        </p>
                                    </td>
                                    <td className={idNumber == index ? 'color' : ''}>{song?.name}</td>
                                    <td className={idNumber == index ? 'color' : ''}>{song?.artist?.name}</td>
                                    <td className={idNumber == index ? 'color' : ''}>{song?.album?.name}</td>
                                    <td>
                                        <a className={idNumber == index ? 'color' : ''} href={song?.url} color={'#0000'}>
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
                        songs={listsongs}
                    />
                </div>
            </div>
        </div>
    )
}
