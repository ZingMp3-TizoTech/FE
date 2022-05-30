import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlineHeart, AiFillHeart, AiOutlineFolderAdd, AiOutlineDownload } from 'react-icons/ai'
import AddSong from './ModalPlaylist';
import { FaRegTrashAlt } from "react-icons/fa";
import { handelGetUser, handelLikeSong, handelUnLikeSong } from '../../services/User';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';


export default function Extend({ liked, url, id, type }) {

  const handleLike = async (id) => {
    const token = Cookies.get('token')
    if (token != null) {
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
        display: 'flex',
        backgroundColor: '#a3b2c7'
      }}

    >
      <Menu.Item>
        {liked ?
          <AiFillHeart onClick={(e) => { handleLike(id); e.stopPropagation() }}
            style={{
              fontSize: "20px",
              color: "red"
            }}
          />
          :
          <AiOutlineHeart onClick={(e) => { handleLike(id); e.stopPropagation() }}
            style={{
              fontSize: "20px"
            }} />}
      </Menu.Item>
      <Menu.Item>
        {/* {type != "playlists" ? <AddSong id={id} onClick={(e)=>{ e.stopPropagation()}} /> 
        : <FaRegTrashAlt onClick={(e)=>{e.stopPropagation()}} />} */}
        <AddSong id={id}  stopPropagation={(e)=>{ e.stopPropagation()}} /> 
      </Menu.Item>

      <Menu.Item>
        <a
          href={url}
          onClick={(e) => e.stopPropagation()}
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