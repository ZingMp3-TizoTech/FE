import React ,{useEffect, useState}from 'react'
import {FaDownload} from 'react-icons/fa'
import './ListSong.css'
import ApiCaller from '../../utils/apiCaller'

export default function ListSongs() {
    const [Api, setApi] = useState([]);
    useEffect(() => {
        ApiCaller('songs', 'GET')
          .then( res => {
            console.log(res);
            setApi(res.data)
          })
      }, [])



  return (
    <div className='wrapper-list-song'>
      <table>
        <thead
        style={{
            background:'#85A5A5'
        }}
        >
          <tr>
            <th style={{
                width:'5%'
            }}>#</th>
            <th style={{
                width:'50%',
                textAlign:'left'
            }}>Name song</th>
            <th style={{
                width:'15%',
                textAlign:'left'
            }}>Artist</th>
            <th style={{
                width:'20%',
                textAlign:'center'
            }}>Author</th>
            <th style={{
                width:'10%'
            }}> <FaDownload/> </th>
          </tr>
        </thead>
        <tbody>
          {Api.map(api =>(
            <tr>
                <td >1</td>
                <td>{api.name}</td>
                <td>{api.artist.name}</td>
                <td style={{
                    textAlign:'center'
                }}>author</td>
                <td >
                <FaDownload/>
                </td>
          </tr>   
          ))}
        </tbody>
      </table>
    </div>
  )
}
