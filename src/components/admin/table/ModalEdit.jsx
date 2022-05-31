import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../services/Playlist';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../Sidebar';
import SideBarAdmin from '../SideBarAdmin';
import Cookies from 'js-cookie';
import { ModalBody } from 'react-bootstrap';


const EditSong = ({ asong }) => {
    console.log(asong);
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

    let name = nameList
    let date_create = ""
    let song = []
    const handleOk = async () => {
        if (!error && Cookies.get('token')) {
            //const created = await handleCreatePlaylist(name, date_create, song)
            setIsModalVisible(false)
            //onSuccess && onSuccess()
        }
        else setIsModalVisible(true)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCreate = (e) => {
        console.log(e.target.name);
        //const names = (playlist?.map(pl => pl?.name))
        //setError(names.includes(e.target.value))
        setNameSong(e.target.name)

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
                            name={nameSong}
                            //defaultValue={nameSong}
                            type='text'
                            placeholder='Enter song name!'
                            onChange={handleCreate}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        <input
                            value={name}
                            type='text'
                            placeholder='Enter url'
                            onChange={handleCreate}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        <input
                            value={name}

                            type='text'
                            placeholder='Enter artist'
                            onChange={handleCreate}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                        <p>Image 1</p>
                        <img src='' />
                        <input
                            value={name}
                            type='file'
                            onChange={handleCreate}

                        />
                        <p>Image 1</p>
                        <img src='' />
                        <input
                            value={name}
                            type='file'
                            onChange={handleCreate}

                        />

                    </div>
                </ModalBody>


            </Modal>
        </>
    );
}
export default EditSong
