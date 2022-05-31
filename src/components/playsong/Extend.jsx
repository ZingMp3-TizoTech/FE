import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlineHeart, AiFillHeart, AiOutlineFolderAdd, AiOutlineDownload } from 'react-icons/ai'
import AddSong from './ModalPlaylist';
import { handelGetUser, handelLikeSong, handelUnLikeSong } from '../../services/User';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import { FaRegTrashAlt } from "react-icons/fa";
import { handleDeleteSongToPlayList } from '../../services/Playlist';
import DeleteSong from './ModalDeleteSong';
import { useParams } from 'react-router-dom';

export default function Extend({ liked, url, id,idPlaylist,type,onDeleteSuccess }) {
  const idPl = useParams();
  const handleLike = async (id) => {
    const token = Cookies.get('token')
    if(token !=null){
      if (liked == false) {
        console.log('like');
        const like = await handelLikeSong(id);
      
      }
      if (liked == true) {
        console.log('unlike');
        const unlike = await handelUnLikeSong(id)
        
      }
    }
    else toast.warning('Please Login to continue!')
  }

 
  const menu = (
    <Menu
      style={{
        display: 'flex'
      }}

    >
      <Menu.Item>
        {liked ?
          <AiFillHeart onClick={(e) => handleLike(id)}

            style={{
              fontSize: "20px",
              color: "red"
            }}
          />
          :
          <AiOutlineHeart onClick={(e) => handleLike(id)}
            style={{
              fontSize: "20px"
            }} />}


      </Menu.Item>
      <Menu.Item>
      {type != "playlists" ? <AddSong id={id}/> : <DeleteSong onDeleteSuccess={(e)=>onDeleteSuccess(idPlaylist)} idPlaylist={idPlaylist} idSong={id}/>}
      </Menu.Item>

      <Menu.Item>
        <a
          href={url}
        >
          <AiOutlineDownload
            fontSize={'20px'}
          />
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          // trigger='click' 
          overlay={menu} placement="top">
          <HiOutlineDotsCircleHorizontal
            fontSize={'30px'}
          />
        </Dropdown>
      </Space>
    </Space>)
}