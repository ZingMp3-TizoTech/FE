import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../../services/Playlist';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import SideBarAdmin from '../../SideBarAdmin';
import Cookies from 'js-cookie';
import { ButtonGroup, CloseButton, ModalBody, ModalFooter, ModalHeader, Spinner } from 'react-bootstrap';
import { handleGetSongById, handleUpdateSong } from '../../../../services/Song';
import { handleUpload } from '../../../../services/Upload';
import { handleCreateGenre } from '../../../../services/Genres';
import { Hidden } from '@mui/material';


const CreateGenre = ({onCall}) => {
    console.log(onCall);
    //const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [playlist, setPlaylist] = useState([])
    const [nameGenre, setNameGenre] = useState('')
    const [error, setError] = useState(false)
    const [nameSong, setNameSong] = useState('')
    const [url, setURL] = useState('')
    const [artist, setArtist] = useState('')
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const [loading, setLoading] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
        setLoading(true)
    };
    console.log(img1);
    console.log('name', nameGenre);
    const handleOk = async () => {
        if (Cookies.get('token')) {
            //const created = await handleCreatePlaylist(name, date_create, song)
            const create = await handleCreateGenre(nameGenre, img1);
            console.log(create);
            setIsModalVisible(false)
            onCall && onCall()
           
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
        setNameGenre(e.target.value)
        //setImg1(e.target.files[0]);
    }


    const handleGetImage1 = async (e) => {
        setLoading(false)
        const uploadData = new FormData();
        uploadData.append("upload", e.target.files[0]);
        const upload = await handleUpload(uploadData)
        if (upload.data.secure_url) {
            setImg1(upload.data.secure_url);
            setLoading(true)
        }

    }

    return (
        <>
            <div onClick={showModal} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>         
                <Button  >Create Genre</Button>
            </div>

            <Modal
                closeIcon
                footer
                visible={isModalVisible}>
                <ModalHeader>
                    <a style={{color:"white",fontSize:'30px'}}>Create genre</a>
                    <CloseButton onClick={(e)=>setIsModalVisible(false)} />
                </ModalHeader>
                <ModalBody>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input
                            value={nameGenre}
                            //name={nameSong}
                            //defaultValue={nameSong}
                            type='text'
                            placeholder='Enter genre name!'
                            onChange={handleGetName}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        <br />
                        <input
                            //value={img1}
                            type='file'
                            onChange={(e) => handleGetImage1(e)}

                        />
                        <br />
                        <img src={img1} />
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleCancel}>Cancel</Button>
                    {loading ?
                        <Button onClick={handleOk}>Create</Button>
                        :
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    }
                </ModalFooter>
            </Modal>
        </>
    );
}
export default CreateGenre
