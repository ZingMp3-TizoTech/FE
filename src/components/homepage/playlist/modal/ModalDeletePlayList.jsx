import { Modal } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { handleDeletePlaylist } from '../../../../services/Playlist';
import { FaRegTrashAlt } from "react-icons/fa";
import Cookies from 'js-cookie';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    onSuccess && onSuccess();
    toast.success("Delete success!");
    
  }
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

      <Modal
      title="Delete playlist"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={350}
      >
        <p
        style={{
          color:'#ffff',
          fontSize:'20px',
          fontWeight:'600'
        }}
        >
          Do you want delete this playlist
        </p>
        <p
        style={{
          color:'#ffff',
          fontSize:'15px'
        }}
        >
          <LibraryMusicRoundedIcon style={{marginRight:'5px'}} />
          {value}
        </p>
      </Modal>
    </>
  );
};

export default Delete;