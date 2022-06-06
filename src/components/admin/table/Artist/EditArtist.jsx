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
import { handleCreateGenre, handleGetAllGenre } from '../../../../services/Genres';
import { Hidden } from '@mui/material';
import { handleCreateArtist, handleUpdateArtist } from '../../../../services/Artist';

// import 'react-select/dist/css/react-select.css';
import { Select } from 'antd';
const { Option } = Select;

const EditArtist = ({idArtist, onCall, name, old, sex, zone, image }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nameArtist, setNameArtist] = useState(name)
    const [age, setAge] = useState(old)
    const [genre, setGenre] = useState(zone)
    const [allGenre, setAllGenre] = useState([])
    const [gender, setGender] = useState(sex)
    const [artist, setArtist] = useState('')
    const [img, setImg] = useState(image)
    const [loading, setLoading] = useState(false)
    //const [selectedOption, setSelectedOption] = useState(zone);
    const showModal = () => {
        setIsModalVisible(true);
        setLoading(true)
    };
    const handleOk = async () => {
        if (Cookies.get('token')) {
            //id,name,gender,image,age,genre
            const create = await handleUpdateArtist(idArtist,nameArtist, gender,img, age, genre );
            setIsModalVisible(false)
            onCall && onCall()

        }
        else setIsModalVisible(true)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleGetName = (e) => {
        setNameArtist(e.target.value)
    }
    const handleGetAge = (e) => {
        setAge(e.target.value)
    }
    const handleGetGender = (e) => {
        setGender(e.target.value)
    }

    const handleGetImage1 = async (e) => {
        setLoading(false)
        const uploadData = new FormData();
        uploadData.append("upload", e.target.files[0]);
        const upload = await handleUpload(uploadData)
        if (upload.data.secure_url) {
            setImg(upload.data.secure_url);
            setLoading(true)
        }
    }
    const getGenres = async () => {
        const all = await handleGetAllGenre();
        setAllGenre(all.data.data)
    }
    useEffect(() => {
        getGenres()
    }, [])


    return (
        <>
            <div onClick={showModal} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <FaRegEdit style={{ color: 'black', fontSize: '25px' }} />
            </div>

            <Modal style={{ marginTop: '-90px' }}
                closeIcon
                footer={''}
                visible={isModalVisible}>
                <ModalHeader>
                    <a style={{ color: "white", fontSize: '30px' }}>Update Artist</a>
                    <CloseButton onClick={(e) => setIsModalVisible(false)} />
                </ModalHeader>
                <ModalBody>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input
                            value={nameArtist}
                            type='text'
                            placeholder='Enter Artist name!'
                            onChange={handleGetName}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px',
                                paddingLeft: "20px"
                            }}
                        />
                        <br />
                        <input
                            value={gender}
                            type='text'
                            placeholder='Enter gender!'
                            onChange={handleGetGender}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px',
                                paddingLeft: "20px"
                            }}
                        />
                        <br />
                        <input

                            value={age}
                            type='number'
                            placeholder='Enter age, if group age = 0!'
                            onChange={handleGetAge}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px',
                                paddingLeft: "20px"
                            }}
                        />
                        <br />
                        <Select
                            value={genre}
                            showSearch
                            style={{
                                width: '100%',
                            }}
                            onChange={setGenre}
                            placeholder="Search to Select..."
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            {allGenre.map(item => (                              
                                <Select.Option key={item?._id} value={item?.id}>
                                    {item?.zone}
                                </Select.Option>
                            ))}
                           
                        </Select>
                        <br />
                        <input
                            //value={img1}
                            type='file'
                            onChange={(e) => handleGetImage1(e)}

                        />
                        <br />
                        <div style={{ width: '50px', height: '50px' }}>
                            <img style={{ width: '150px', height: '150px' }} src={img} />
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter style={{ marginTop: '90px' }}>
                    <Button onClick={handleCancel}>Cancel</Button>
                    {loading ?
                        <Button onClick={handleOk}>Update</Button>
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
export default EditArtist
