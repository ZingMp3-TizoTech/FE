
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ApiCaller from '../../../../utils/callAPI'
// import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../../Sidebar';
import SideBarAdmin from '../../SideBarAdmin';
import CreateAlbum from './CreateAlbum';
import RemoveAlbum from './RemoveAlbum';
import ViewSong from './SongInAlbum';
// import CreateArtist from './ModalCreateArtist';

function TableAlbum() {
  const [albums, setAlbum] = useState([])
  const [nameArtist,setNameArtist]=useState('')
  const [gender,setGender]=useState('')
  const [genre,setGenre]=useState('')
  const [img,setImg]= useState('')
  const [age,setAge]= useState()
 
const callAll=()=>{
    ApiCaller('albums', 'GET')
    .then(res => {
        setAlbum(res.data.data)
    })
}

  useEffect(() => {
    callAll()
  }, [])

 
  return (
    <>
  <SideBarAdmin/>
      <div style={{ marginLeft: '90%',position:'fixed' }}>           
      <CreateAlbum onCall={(e)=>callAll()}/>
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
              <th style={{ padding: '30px' }}>artist</th>
              <th style={{ padding: '30px' }}>Date create</th>
              <th style={{ padding: '30px' }}>list song</th>
              <th style={{ padding: '30px' }}></th>
            </tr>
          </thead>
          <tbody  >

            {albums.map((album, index) =>
              <tr  >
                <td style={{ color: 'black', padding: '30px' }}>{index+1}</td>              
                <td style={{ color: 'black', padding: '30px' }}>{album?.name}</td>
                <td style={{ color: 'black', padding: '30px' }}>{album?.artist?.name}</td>
                <td style={{ color: 'black', padding: '30px' }}>{album?.date_create||album?.created}</td>   
                <td style={{ color: 'black', padding: '30px' }}><ViewSong callAll={(e)=>callAll(e)}  songs={album?.songs} idAlbum={album?._id}/></td>   
                {/* <td style={{ color: 'black', padding: '30px' }}>{album?.age}</td>    */}
               
                <td style={{ padding: '30px' }} >  
                           <div style={{
                             display:'flex',
                             flexDirection:'row',
                             justifyContent:'space-evenly'
                           }}>
                               <RemoveAlbum onCall={(e)=>callAll()}  name={album?.name} id={album?._id}/>
                          {/* <EditArtist onCall={(e)=>callAll()} idArtist={artist?._id} name={artist?.name} sex={artist?.gender} old={artist?.age} zone={artist?.genre?._id} image={artist?.image[0]} /> */}
                  {/* <EditGenre  onCall={(e)=>callAll()} name={genre?.zone} image={genre?.image} id={genre?._id}></EditGenre>  */}
                  {/* <RemoveArtist onCall={(e)=>callAll()}  name={artist?.name} id={artist?._id}></RemoveArtist>  */}
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

export default TableAlbum