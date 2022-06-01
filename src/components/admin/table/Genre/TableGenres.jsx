
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ApiCaller from '../../../../utils/callAPI'
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../../Sidebar';
import SideBarAdmin from '../../SideBarAdmin';
import Cookies from 'js-cookie';
import { Modal } from 'antd';
import { ModalBody } from 'react-bootstrap';
import { handleGetSongById } from '../../../../services/Song';
import { FcEditImage } from 'react-icons/fc';
import CreateGenre from './ModalCreateGenres';
import EditGenre from './ModalEditGenres';
import RemoveGenre from './RemoveGenre';
function TableGenre() {
  const [genres, setGenres] = useState([])
  const [nameSong,setNameSong]=useState('')
  const [url,setURL]=useState('')
  const [artist,setArtist]=useState('')
  const [img1,setImg1]= useState('')
  const [img2,setImg2]= useState('')
  
const callAll=()=>{
    ApiCaller('genres', 'GET')
    .then(res => {
      setGenres(res.data.data)
    })
}

  useEffect(() => {
    callAll()
  }, [])

 
  return (
    <>
  <SideBarAdmin/>
      <div style={{ marginLeft: '90%',position:'fixed' }}>
        <CreateGenre onCall={(e)=>callAll()}/>
      </div>
      <div style={{
        marginLeft: '15%',
        marginTop: '20px'
      }}>


        <table width={'100%'} style={{
      
        marginTop: '30px'
      }}>
          <thead >
            <tr >
              <th style={{ padding: '30px' }}>#</th>
              <th style={{ padding: '30px' }}>Zone</th>
              <th style={{ padding: '30px' }}>Img</th>
              <th style={{ padding: '30px' }}></th>
            </tr>
          </thead>
          <tbody  >

            {genres.map((genre, index) =>
              <tr  >
                <td style={{ color: 'black', padding: '30px' }}>{index}</td>
               
                <td style={{ color: 'black', padding: '30px' }}>{genre?.zone}</td>
                <td style={{ padding: '30px' }}><img style={{ width: '50px', height: '50px' }}
                  src={genre?.image[0]} /></td>
                <td style={{ padding: '30px' }} >  
                           <div style={{
                             display:'flex',
                             flexDirection:'row',
                             justifyContent:'space-evenly'
                           }}>

                  <EditGenre  onCall={(e)=>callAll()} name={genre?.zone} image={genre?.image} id={genre?._id}></EditGenre> 
                  <RemoveGenre  onCall={(e)=>callAll()}  name={genre?.zone} id={genre?._id}></RemoveGenre> 
                           </div>
                 

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableGenre