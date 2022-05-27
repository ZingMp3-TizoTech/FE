import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {AiOutlineFolderAdd} from 'react-icons/ai'
import { height } from '@mui/system';
import './ChoosePlaylist.css'
import { FcCheckmark } from "react-icons/fc";
import { handleAddSongToPlayList, handleGetPlaylistByUser } from '../../services/Playlist';
import { stepButtonClasses } from '@mui/material';
import Cookies from 'js-cookie'
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';

const AddSong = ({id}) => {
 
    const [playlist, setPlaylist] = useState([])
    const [loading,setLoading]=useState(false)
    const [status,setStatus]=useState('')
    const [active,setActive]=useState(true)
    const [number,setNumber]=useState();
    const getPlaylist = async () => {
        if(Cookies.get('token')){
        const pl = await handleGetPlaylistByUser()
        setPlaylist(pl.data.data);
        setLoading(true)
    }
    }
    useEffect(() => {
        getPlaylist()
    }, [playlist])
    let idsong=[]
    const handleAddSong = async(idPl) =>{
        setStatus(idPl)       
    }
   

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    if(Cookies.get('token'))
    setIsModalVisible(true)
    else toast.warning('Please Login to continue!')
  };

  const handleOk =async () => {
    idsong=[id]
    if(Cookies.get('token')){
    const addSong = await handleAddSongToPlayList(status,idsong)
   
    setIsModalVisible(false);}
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSetActive=(e)=>{
    setActive(!active)     
     setNumber(e.target.id)  
     if(e.target.id!=number) 
     setActive(active) 
     if(e.target.id==number) 
     setActive(true) 
  }
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
        {loading? <div className='list-item'>
            {playlist.map((item, index)=>(
                <div key={index} id={index}
                className={'item'}
                onClick={(e)=>{handleAddSong(item?._id);handleSetActive(e)}}
                >
                    <p>{item.name}</p>
                    <i style={{color:"red"}}>{index==number&&active?<FcCheckmark />:null}</i>
                </div>
                
                
            ))}
            
        </div>:<Spinner animation="border" />}
       
        
      </Modal>
    </>
  );
};

export default AddSong;