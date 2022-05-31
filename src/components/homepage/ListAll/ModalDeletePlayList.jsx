import { Button, Modal } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { handleDeletePlaylist } from '../../../services/Playlist';
import { FaRegTrashAlt } from "react-icons/fa";
import Cookies from 'js-cookie'

const Delete = ({ value, id, onSuccess }) => {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async() => { 
    if(Cookies.get('token')){
   const del= await handleDeletePlaylist(id)
    setIsModalVisible(false);
    onSuccess && onSuccess()}
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <FaRegTrashAlt style={{
        width: '20px',
        height: '20px',
        color:'#ffff'

      }} onClick={showModal} />

      <Modal title="Delete playlist"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={300}
      >
        <p>Do you want delete this playlist</p>
        <p>{value}</p>
      </Modal>
    </>
  );
};

export default Delete;