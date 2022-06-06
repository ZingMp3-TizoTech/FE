import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { AiOutlineFolderAdd } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import './ChoosePlaylist.css'
import { FcCheckmark, FcPlus, FcOk } from "react-icons/fc";
import { handleAddSongToPlayList, handleCreatePlaylist, handleGetPlaylistByUser } from '../../../../../services/Playlist';
import Cookies from 'js-cookie'
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai'
const AddSong = ({ id, stopPropagation }) => {
  const [playlist, setPlaylist] = useState([])
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [active, setActive] = useState(true)
  const [number, setNumber] = useState();
  const [open, setOpen] = useState(false);
  const [nameList, setName] = useState('')

  const getPlaylist = async () => {
    if (Cookies.get('token')) {
      const pl = await handleGetPlaylistByUser()
      setPlaylist(pl.data.data);
      setLoading(true)
    }
  }
  useEffect(() => {
    getPlaylist()
  }, [])
  let idsong = []
  const handleAddSong = async (idPl) => {
    setStatus(idPl)
  }


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    if (Cookies.get('token'))
      setIsModalVisible(true)
    else toast.warning('Please Login to continue!')
  };
  const handleCreate = (e) => {
    setName(e.target.value)
  }
  const isOpen = (e) => {
    setOpen(!open)
    stopPropagation(e)
  }

  const createNewPlaylist = async(getPlaylist)=>{
    let name = nameList
    let date_create = ""
    let song = []
    const created = await handleCreatePlaylist(name, date_create, song)
      toast.success("Create playlist success!") 
      getPlaylist &&getPlaylist()
      setName(" ")
      setOpen(false)
  } 

  const checkExistence = (playlist.filter(item => item.name == nameList)).length

  const handleOk = async (e) => {
    idsong = [id]

    stopPropagation(e)
    const addSong = await handleAddSongToPlayList(status, idsong)
    setIsModalVisible(false);
    toast.success("Add playlist success!")
    if (Cookies.get('token')) {
      const addSong = await handleAddSongToPlayList(status, idsong)
      setIsModalVisible(false);
    }
  };

  const handleCancel = (e) => {
    setIsModalVisible(false);
    stopPropagation(e);
  };
  const handleSetActive = (e) => {
    setActive(!active)
    setNumber(e.target.id)
    if (e.target.id != number)
      setActive(active)
    if (e.target.id == number)
      setActive(true)
  }
  return (
    <>
      <AiOutlineFolderAdd onClick={(e) => { stopPropagation(e); showModal(); }}
        style={{
          fontSize: '20px',
        }}
      />

      <Modal title="Select playlist"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={320}
        className={'modal-list'}

      >
        {loading ?
          <div className='list-item'>
            <div className='item' onClick={isOpen}>
              <p>Create playlist</p>
              <i><FcPlus /></i>
            </div>
            <div style={{position:'relative'}}>
              <input
                onChange={handleCreate}
                onClick={(e) => { stopPropagation(e) }}
                type={open ? 'text' : 'hidden'}
                value={nameList}
                autoFocus
              />
              <div style={checkExistence > 0 ?{
                margin:'-5px 0 6px 15px',
                color:'red',
                fontWeight:'600',
              } : {display: 'none'}}> Playlist exist! </div>
              <button 
              style={checkExistence == 0? {
                position:'absolute',
                top: '3px',
                right: '0px',
                fontSize: '24px',
                width: '50px',
                borderRadius: '0 30px 30px 0',
                border:'none',
              } : {display:'none'}}
              // disabled
              // {checkExistence > 0 ? disabled : '' }
              onClick={(e)=>{stopPropagation(e); createNewPlaylist(getPlaylist)}}
              >
                <FcCheckmark />
              </button>
            </div>
            {playlist.map((item, index) => (
              <div
                key={index}
                id={index}
                className={index == number && active ? 'item-active' : 'item'}
                onClick={(e) => { handleAddSong(item?._id); handleSetActive(e); stopPropagation(e) }}
              >
                <p>{item.name}</p>
                <i style={{ color: "red" }}>{index == number && active ? <FcCheckmark /> : null}</i>
              </div>
            ))}
          </div> : <Spinner animation="border" />}


      </Modal>
    </>
  );
};

export default AddSong;