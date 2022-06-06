
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ApiCaller from '../../../../utils/callAPI'
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../../Sidebar';
import SideBarAdmin from '../../SideBarAdmin';

import CreateArtist from './ModalCreateArtist';
import EditArtist from './EditArtist';
import RemoveArtist from './RemoveArtist';
function TableArtist() {
  const [artists, setArtist] = useState([])
  const [nameArtist,setNameArtist]=useState('')
  const [gender,setGender]=useState('')
  const [genre,setGenre]=useState('')
  const [img,setImg]= useState('')
  const [age,setAge]= useState()
 
const callAll=()=>{
    ApiCaller('artists', 'GET')
    .then(res => {
      setArtist(res.data.data)
    })
}

  useEffect(() => {
    callAll()
  }, [])

 
  return (
    <>
  <SideBarAdmin/>
      <div style={{ marginLeft: '90%',position:'fixed' }}>
        {/* <CreateGenre onCall={(e)=>callAll()}/> */}
        <CreateArtist onCall={(e)=>callAll()}/>
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
              <th style={{ padding: '30px' }}>name</th>
              <th style={{ padding: '30px' }}>gender</th>
              <th style={{ padding: '30px' }}>image</th>
              <th style={{ padding: '30px' }}>age</th>
              <th style={{ padding: '30px' }}>genre</th>
              <th style={{ padding: '30px' }}></th>
            </tr>
          </thead>
          <tbody  >

            {artists.map((artist, index) =>
              <tr  >
                <td style={{ color: 'black', padding: '30px' }}>{index}</td>
               
                <td style={{ color: 'black', padding: '30px' }}>{artist?.name}</td>
                <td style={{ color: 'black', padding: '30px' }}>{artist?.gender}</td>
                <td style={{ padding: '30px' }}><img style={{ width: '50px', height: '50px' }}
                  src={artist?.image[0]} /></td>
                <td style={{ color: 'black', padding: '30px' }}>{artist?.age}</td>
                <td style={{ color: 'black', padding: '30px' }}>{artist?.genre?.zone}</td>
                <td style={{ padding: '30px' }} >  
                           <div style={{
                             display:'flex',
                             flexDirection:'row',
                             justifyContent:'space-evenly'
                           }}>
                          <EditArtist onCall={(e)=>callAll()} idArtist={artist?._id} name={artist?.name} sex={artist?.gender} old={artist?.age} zone={artist?.genre?._id} image={artist?.image[0]} />
                  {/* <EditGenre  onCall={(e)=>callAll()} name={genre?.zone} image={genre?.image} id={genre?._id}></EditGenre>  */}
                  <RemoveArtist onCall={(e)=>callAll()}  name={artist?.name} id={artist?._id}></RemoveArtist> 
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

export default TableArtist