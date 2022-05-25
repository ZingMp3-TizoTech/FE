import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './ModalCreatePlaylist.css'
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../services/Playlist';
const CreatePlayList = ({ onSuccess }) => {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playlist, setPlaylist] = useState([])
  const [nameList, setName] = useState('')
  const [error, setError] = useState(false)
  let i = Object.keys(playlist).length
  // useEffect(() => {
  //   getPlaylist()
  // }, [])
  // const getPlaylist = async () => {
  //   const pl = await handleGetPlaylistByUser() 
  //   setPlaylist(pl.data.data);
  // }
  const showModal = () => {
    setIsModalVisible(true);
  };
 
  let name = nameList
  let date_create = ""
  let song = []
  const handleOk = async () => {
    if (!error) {  
      const created= await handleCreatePlaylist(name, date_create, song)
      setIsModalVisible(false)
     
      onSuccess && onSuccess()
    }
    else setIsModalVisible(true)

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  const handleCreate = (e) => {   
    const names = (playlist?.map(pl => pl?.name))   
    setError(names.includes(e.target.value))
    setName(e.target.value)
  }

  return (
    <>
      <FolderAddFilled onClick={showModal}
        style={{
          fontSize: '60px'
        }}
      />

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
            borderRadius: '50px'
          }}
        />
        <p
          style={{
            color: 'red',
            marginTop: '15px',
            marginBottom: '-10px',
            marginLeft: '10px'
          }}
        >{error?"Playlist name already exists!":""}</p>

      </Modal>
    </>
  );
};

export default CreatePlayList;