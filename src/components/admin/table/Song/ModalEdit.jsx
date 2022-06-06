import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../../services/Playlist';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import SideBarAdmin from '../../SideBarAdmin';

import Cookies from 'js-cookie';
import { ModalBody } from 'react-bootstrap';
import { handleGetSongById, handleUpdateSong } from '../../../../services/Song';
import { handleUpload } from '../../../../services/Upload';


const EditSong = ({ asong }) => {
    ////console.log(asong);
    //const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [playlist, setPlaylist] = useState([])
    const [nameList, setName] = useState('')
    const [error, setError] = useState(false)
    const [nameSong, setNameSong] = useState('')
    const [url, setURL] = useState('')
    const [artist, setArtist] = useState('')
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const getSong= async(asong)=>{
        console.log(asong);
          const song= await handleGetSongById(asong)
          if(song){
              setNameSong(song?.data?.data?.name)
              setURL(song?.data?.data?.url)
              setArtist(song?.data?.data?.artist?.name)
              setImg1(song?.data?.data?.image[0])
              setImg2(song?.data?.data?.image[1])}
          return song
      }
      useEffect(() => {
        getSong(asong) 
    }, [asong])
    let name = nameList
    let date_create = ""
    let song = []
    const handleOk = async () => {
        if (!error && Cookies.get('token')) {
            //const created = await handleCreatePlaylist(name, date_create, song)
            const edit = await handleUpdateSong(asong,nameSong,url,'6271f6be631b56248e76a92b',img1,'6262542dd1fdfb0d5c27e6fc','62563f8123b2502c913a8f46',3,1)
            console.log(edit);
            setIsModalVisible(false)
            //onSuccess && onSuccess()
        }
        else setIsModalVisible(true)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleGetName = (e) => {
        //console.log(e.target.value);
        //const names = (playlist?.map(pl => pl?.name))
        //setError(names.includes(e.target.value))
        setNameSong(e.target.value)
        // setURL(song?.data?.data?.url)
        // setImg1(e.target.files[0]);
    }
    const handleGetURL = (e) => {
        setURL(song?.data?.data?.url)
       
    }
    const handleGetArtist = (e) => {
        setArtist(e.target.value)
        
    }
    const handleGetImage1 = async(e) => 
    { 
        const uploadData = new FormData();
        uploadData.append("upload", e.target.files[0]);
        const upload = await handleUpload(uploadData)
        setImg1(upload.data.secure_url);

  }
    return (
        <>
            <div onClick={showModal} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <FaRegEdit
                    style={{
                        fontSize: '20px',
                        color: "blue"
                    }}
                />

            </div>

            <Modal title="Edit Song"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <ModalBody>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input
                            value={nameSong}
                            //name={nameSong}
                            //defaultValue={nameSong}
                            type='text'
                            placeholder='Enter song name!'
                            onChange={handleGetName}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        <input
                            value={url}
                            type='text'
                            placeholder='Enter url'
                            onChange={handleGetURL}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px',
                                wordBreak:'break-word'
                            }}
                        />
                        <input
                            value={artist}
                            type='text'
                            placeholder='Enter artist'
                            onChange={handleGetArtist}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        {/* <p>Image 1</p>
                        <img src='' /> */}
                         <input
                            //value={img1}
                            type='file'
                            onChange={(e)=>handleGetImage1(e)}

                        /> 
                        <p>Image 1</p>
                        <img src={img1} />
                        {/* <input
                            value={name}
                            type='file'
                            onChange={handleCreate}

                        /> */}

                    </div>
                </ModalBody>


            </Modal>
        </>
    );
}
export default EditSong
