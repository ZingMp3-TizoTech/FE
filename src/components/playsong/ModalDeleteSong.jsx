import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import Cookies from 'js-cookie'
import { handleDeleteSongToPlayList } from '../../services/Playlist';
import { toast } from 'react-toastify';

const DeleteSong = ({ idSong,idPlaylist, onDeleteSuccess }) => {
  const handleDelete = async() => { 
    if(Cookies.get('token')){
    const del= await handleDeleteSongToPlayList(idPlaylist,idSong)  
    console.log(del);
    onDeleteSuccess && onDeleteSuccess(idPlaylist)
    if(del){
      toast.success('Remove Success!')
    }
  
  }
  };



  return (
    <>
      <FaRegTrashAlt style={{
        width: '20px',
        height: '20px',
        color:'red'

      }} onClick={handleDelete} />

     
    </>
  );
};

export default DeleteSong;