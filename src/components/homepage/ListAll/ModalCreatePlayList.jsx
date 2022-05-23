import { Button, Modal } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
const CreatePlayList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Create a new playlist" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      width={250}
      >
        <input 
        type='text'
        placeholder='Enter playlist name!'
        style={{
            height:'40px',
            border: '1px solid rgb(0 0 0 / 10%)',
            borderRadius:'50px'
        }}
        />
        <p
        style={{
            color:'red',
            marginTop:'15px',
            marginBottom:'-10px',
            marginLeft:'10px'
        }}
        >Playlist name already used!</p>
      </Modal>
    </>
  );
};

export default CreatePlayList;