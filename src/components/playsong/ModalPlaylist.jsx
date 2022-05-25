import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {AiOutlineFolderAdd} from 'react-icons/ai'
import { height } from '@mui/system';
import './ChoosePlaylist.css'
import {FiCheckCircle} from 'react-icons/fi'
import { handleAddSongToPlayList, handleGetPlaylistByUser } from '../../services/Playlist';
import { PixOutlined } from '@mui/icons-material';
const AddSong = ({id}) => {
  
    const [playlist, setPlaylist] = useState([])
    const [status,setStatus]=useState('')
    const getPlaylist = async () => {
        const pl = await handleGetPlaylistByUser()
        setPlaylist(pl.data.data);
    }
    useEffect(() => {
        getPlaylist()
    }, [])
    let idsong=[]
    const handleAddSong = async(idPl) =>{
        setStatus(idPl)
        console.log(status);
       
    }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk =async () => {
    idsong=[id]
    console.log(status);
        ;
    const addSong = await handleAddSongToPlayList(status,idsong)
    console.log(addSong);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AiOutlineFolderAdd  onClick={showModal}
                            style={{
                                fontSize:'20px',
                            }}
                        />
      
      <Modal title="Select playlist" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      width={320}
      >
        <div className='list-item'>
            {playlist.map((item, index)=>(
                <div key={index} className='item'
                onClick={(e)=>handleAddSong(item?._id)}
                >
                    <p>{item.name}</p>
                    <i><FiCheckCircle/></i>
                </div>
            ))}
        </div>
      </Modal>
    </>
  );
};

export default AddSong;