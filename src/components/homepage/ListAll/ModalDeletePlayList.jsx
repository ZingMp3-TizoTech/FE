import { Button, Modal } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';

const Delete = ({value}) => {
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
      <DeleteOutlined onClick={showModal}/>

      <Modal title="Warning!!!" 
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