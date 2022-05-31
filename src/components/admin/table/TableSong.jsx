
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ApiCaller from '../../../utils/callAPI'
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../Sidebar';
import SideBarAdmin from '../SideBarAdmin';
import Cookies from 'js-cookie';
import { Modal } from 'antd';
import { ModalBody } from 'react-bootstrap';
import { handleGetSongById } from '../../../services/Song';
import EditSong from './ModalEdit';
function TableSong() {
  const [songs, setSongs] = useState([])
  const [nameSong,setNameSong]=useState('')
  const [url,setURL]=useState('')
  const [artist,setArtist]=useState('')
  const [img1,setImg1]= useState('')
  const [img2,setImg2]= useState('')
  
  useEffect(() => {
    ApiCaller('songs', 'GET')
      .then(res => {
        setSongs(res.data.data)
      })
  }, [])
  const getSong= async(id)=>{
    console.log(id);
      const song= await handleGetSongById(id)
     setNameSong(song?.data?.data?.name)
  }
 
  return (
    <>

      <div style={{ marginLeft: '90%' }} >
        <Button color='primary'>Add Song</Button>
      </div>
      <div style={{
        marginLeft: '15%',
        marginTop: '20px'
      }}>


        <table width={'100%'} style={{ backgroundColor: "gray", padding: '30px' }}>
          <thead >
            <tr >
              <th style={{ padding: '30px' }}>#</th>
              <th style={{ padding: '30px' }}>name</th>
              <th style={{ padding: '30px' }}>artist</th>
              <th style={{ padding: '30px' }}>Img</th>
              <th style={{ padding: '30px' }}>Zone</th>
              <th style={{ padding: '30px' }}>Action</th>
            </tr>
          </thead>
          <tbody  >

            {songs.map((song, index) =>
              <tr  >
                <td style={{ color: 'black', padding: '30px' }}>{index}</td>
                <td style={{ color: 'black', padding: '30px' }}>{song?.name}</td>
                <td style={{ color: 'black', padding: '30px' }}>{song?.artist?.name}</td>
                <td style={{ padding: '30px' }}><img style={{ width: '50px', height: '50px' }}
                  src={song?.image[0]} /></td>
                <td style={{ color: 'black', padding: '30px' }}>{song?.genre?.zone}</td>
                <td style={{ padding: '30px' }}>
                  <div
                  //  onClick={(e)=>getSong(song?._id)}
                  >
                  <EditSong asong={song?.id} /></div>
                  <FaRegTrashAlt style={{ marginLeft: '9px' }} color='red' size={'25px'} />

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableSong