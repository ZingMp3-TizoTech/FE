import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './ModalCreatePlaylist.css'
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../../services/Playlist';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePlayList = ({ onSuccess, playlistUser }) => {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playlist, setPlaylist] = useState([])
  const [nameList, setName] = useState('')
  const [error, setError] = useState(false)

  const showModal = () => {
    setIsModalVisible(true);
  };

  let name = nameList
  let date_create = ""
  let song = []
  const handleOk = async () => {
    if (!error&&Cookies.get('token')) {
      const created = await handleCreatePlaylist(name, date_create, song)
      toast.success("Create playlist success!") 
      setIsModalVisible(false)
      onSuccess && onSuccess()
    }
    else setIsModalVisible(true)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreate = (e) => {
    const names = (playlistUser?.map(pl => pl?.name))
    setError(names.includes(e.target.value))
    setName(e.target.value)
  }

  return (
    <>

      <div onClick={showModal} style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <FolderAddFilled
          style={{
            fontSize: '60px',
            color: "white"
          }}
        />
        <p
          style={{
            fontSize: '23px',
            fontWeight: '400',
            color: "white"
          }}
        >Create playlist in here</p>
      </div>

      <Modal title="Create a new playlist"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={250}
      >
        <input
          value={name}
          className='input-name'
          type='text'
          placeholder='Enter playlist name!'
          onChange={handleCreate}
          style={{
            height: '40px',
            border: '1px solid rgb(0 0 0 / 10%)',
            borderRadius: '50px',
            paddingLeft:'10px'
          }}
        />
        <p
          style={{
            color: 'red',
            marginTop: '15px',
            marginBottom: '-10px',
            marginLeft: '10px'
          }}
        >{error ? "Playlist name already exists!" : ""}</p>

      </Modal>
    </>
  );
};

export default CreatePlayList;