import React, { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'
import './ListSong.css'
import ApiCaller from '../../utils/callAPI'
import Playing from './Playing'
import DetailSong from './DetailSong'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';
export default function ListSongs({ type }) {
    const id = useParams();
    const [songs, setSongs] = useState([])
    console.log(id.id); 
    const [idNumber, setIdNumber] = useState(0);
    const [circular, setCircular] = useState(true);
    const [loading,setLoading] =useState(false)
    const [albums, setAlbums] = useState([])
    let a =  songs.findIndex(i => i._id === id.id) 
    
    useEffect(() => {
        ApiCaller('songs', 'GET')
            .then(res => {
                setSongs(res.data.data)  
                 
               })
               
              
        }, [])

    useEffect(() => {
        ApiCaller('albums', 'GET')
            .then(res => {
                setAlbums(res.data.data)
            })
    }, [])
    const albumResult = albums?.find((album) => {
        return album?._id == id.id
    })
        let items=[];
        items =
        id?.id && type == "artists" ?
            songs?.filter((song) => {
                return (
                    song.artist?._id === id.id
                )
            })          
                :songs
 

    return (
        <div>
            <div className='wrapper-song'>
           
                <DetailSong
                    idSong={idNumber} songs={items} circular={circular}
                />
                 
                <div className='wrapper-list-song'>  

                {items.length!=0?<>
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
                       <tbody>
                           {items.map((song, index) => (

                               <tr
                                   key={index}
                                   onClick={(e) => {
                                       setIdNumber(index);
                                   }
                                   }
                                   className={index === idNumber ? "active-row" : ""}
                               >    
                                   <td scope="row">{(song._id != null) ? index + 1 : <></>
                                   }</td>
                                   <td
                                   >{song?.name}</td>
                                   <td
                                   >{song.artist?.name}</td>
                                   <td style={{
                                       textAlign: 'center',
                                   }}>{
                                           song.album ? <>{song.album?.name}</> : <></>}</td>
                                   <td style={{
                                       textAlign: 'center'
                                   }}>
                                       <a href={song?.url}><FaDownload /></a>
                                   </td>
                               </tr>

                           ))
                           }
                       </tbody>

                   </table>    
                </>:<><ReactLoading height='900px' width='100px'  className='loading' type='bars' 
                color='#a696d5' /></>}
                             
                   
                    <div style={{
                        marginTop: "100px"
                    }}>

                    </div>
                </div>
            </div>
            <div >
                <div className='play-child'>
                    {<Playing i={a}  type={type} setCircular={setCircular} setIdNumber={setIdNumber} idSong={idNumber} songs={songs} />}
                </div>
            </div>
        </div>
    )
}
