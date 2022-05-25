import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlineHeart, AiOutlineFolderAdd, AiOutlineDownload } from 'react-icons/ai'
import AddSong from './ModalPlaylist';

export default function Extend({ url, id }) {

  const menu = (
    <Menu
    style={{
      display:'flex'
    }}
    >
      <Menu.Item>
        <AiOutlineHeart
          fontSize={'20px'}
        />
      </Menu.Item>
      <Menu.Item>
        <AddSong id={id} />
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