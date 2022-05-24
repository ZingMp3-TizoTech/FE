import { Button, Modal } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';

import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { handleDeletePlaylist } from '../../../services/Playlist';

const Delete = ({value,id}) => {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    console.log(id);
    handleDeletePlaylist(id)
    navigate('/')
    setTimeout(()=>{
      navigate('/Library')
    },1)
    setIsModalVisible(false);   
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <DeleteOutlined onClick={showModal}/>

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