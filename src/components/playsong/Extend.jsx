import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlineHeart, AiOutlineFolderAdd, AiOutlineDownload } from 'react-icons/ai'
import AddSong from './ModalPlaylist';
import { FaRegTrashAlt } from "react-icons/fa";
const handleLike = ()=>{
  console.log('liked');
}
export default function Extend({ url, id, type }) {

  const menu = (
    <Menu
    style={{
      display:'flex',
      backgroundColor:'#a3b2c7'
    }}
    >
      <Menu.Item>
        <AiOutlineHeart
        style={{color:'red'}}
        onClick={handleLike}
          fontSize={'20px'}
        />
      </Menu.Item>
      <Menu.Item>
        {type != "playlists" ? <AddSong id={id} /> : <FaRegTrashAlt/>}
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
        <Dropdown overlay={menu} placement="top">
          <HiOutlineDotsCircleHorizontal
            fontSize={'30px'}
          />
        </Dropdown>
      </Space>
    </Space>)
}