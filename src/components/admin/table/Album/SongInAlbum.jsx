import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { FolderAddFilled } from '@ant-design/icons';
import { handleCreatePlaylist, handleGetPlaylistByUser } from '../../../../services/Playlist';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Sidebar from '../../../Sidebar';
import SideBarAdmin from '../../SideBarAdmin';
import Cookies from 'js-cookie';
import { ButtonGroup, CloseButton, ModalBody, ModalFooter, ModalHeader, Spinner } from 'react-bootstrap';
import { handleUpload } from '../../../../services/Upload';
import { handleCreateGenre, handleGetAllGenre } from '../../../../services/Genres';
import { handleRemoveSongFromAlbum,handleAddSongToAlbum} from '../../../../services/Album';
import { Hidden } from '@mui/material';
import { handleCreateArtist, handleUpdateArtist } from '../../../../services/Artist';
import { FaPlus } from "react-icons/fa";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import 'react-select/dist/css/react-select.css';
import { Select } from 'antd';
import ApiCaller from '../../../../utils/callAPI';
const { Option } = Select;

const ViewSong = ({ idArtist, onCall, name, old, sex, zone, image, songs,idAlbum,callAll}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [allsongs, setAllSongs] = useState([])
    const [nameArtist, setNameArtist] = useState(name)
    const [age, setAge] = useState(old)
    const [genre, setGenre] = useState(zone)
    const [allGenre, setAllGenre] = useState([])
    const [gender, setGender] = useState(sex)
    const [artist, setArtist] = useState('')
    const [img, setImg] = useState(image)
    const [loading, setLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    
    const [allArtist, setAllArtist] = useState([])
    //const [selectedOption, setSelectedOption] = useState(zone);
    const showModal = () => {
        setIsModalVisible(true);       
        setLoading(true)
        callAll&&callAll()
    };
    const handleOk = async () => {
        if (Cookies.get('token')) {
            //id,name,gender,image,age,genre
            //const create = await handleUpdateArtist(idArtist,nameArtist, gender,img, age, genre );
            setIsModalVisible(false)
           

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
        ApiCaller('artists', 'GET')
        .then(res => {
          setAllArtist(res.data.data)
        })
        setAllGenre(all.data.data)
    }
    const removeSong = async(idAlbum,song)=>{ 
        let id = idAlbum;    
         const remove = await handleRemoveSongFromAlbum(id,song)
         console.log(remove);
         callAll&&callAll()
    }
    const addSong = async(idAlbum,song)=>{  
        let id = idAlbum;   
         const add = await handleAddSongToAlbum(id,song)
         console.log(add);
         callAll&&callAll()
    }
    useEffect(() => {
        getGenres()
        callAll&&callAll()
    }, [])
    // console.log(songs.map((song)=>console.log(song?.name)))
  
    useEffect(() => {
       
        ApiCaller('songs', 'GET')
            .then(res => {
                setAllSongs(res.data.data)
            })
    }, [])
    let value = ''
    let label = ''
    let options = [{
        value: 'value', label: '---'
    }]
    allArtist.forEach(i => {
        value = i?._id;
        label = i?.name
        return options.push({ value: value, label: label })

    })
    return (
        <>
            <div onClick={showModal} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Button>View Songs</Button>
            </div>

            <Modal style={{ marginTop: '-60px', marginLeft: '380px' }}
                closeIcon
                footer={''}
                visible={isModalVisible}
                width={1000}
            >
                <ModalHeader>
                    <a style={{ color: "white", fontSize: '30px' }}>View Songs</a>
                    <CloseButton onClick={(e) => setIsModalVisible(false)} />
                </ModalHeader>
                <ModalBody>
                    <div>
                    <input
                            //value={nameArtist}
                            type='text'
                            placeholder='Enter Album name!'
                            //onChange={handleGetName}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px',
                                paddingLeft: "20px"
                            }}
                        />
                        <Select
                        style={{width:'300px',marginLeft:'32%'}}
                            defaultValue={selectedOption}
                            name="form-field-name"
                            //value="one"
                            options={options}
                            onChange={setSelectedOption}
                        />
                    </div>
               
                    <ListGroup variant="flush">
                        <table width='100%'>
                            <thead>
                                <tr>

                                    <th >In album</th>
                                    <th>Songs</th>
                                </tr>
                            </thead>
                            <tbody >
                                <td >

                                {songs.map(song =>
                                (
                                    <>
                                        <td style={{ display: 'flex', flexDirection: 'row' }}>
                                         

                                                <ListGroup.Item style={{ backgroundColor: 'gray', width: '280px' }} >{song?.name}</ListGroup.Item>
                                                <div style={{ marginLeft: '10px' }}>
                                                    <FaRegTrashAlt onClick={(e)=>{removeSong(idAlbum,song?._id)}} />
                                                </div>
                                           
                                        </td>
                                    </>
                                )
                                
                                )}
                                </td>
                                <td>

                                    {allsongs.map(song =>
                                    (
                                        <>

                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                               
                                                    <FaPlus onClick={(e)=>addSong(idAlbum,song?._id)} />
                                             
                                                <ListGroup.Item  style={{ backgroundColor: 'gray', width: '220px', marginLeft: '10px'  }} >{song?.name}</ListGroup.Item>
                                            </div>
                                        </>
                                    ))}
                                </td>
                            </tbody>


                        </table>
                        {/* <td>

                                    {allsongs.map(allsong => {
                                        <a>{allsong?.name}</a>
                                            // console.log(allsong?.name);
                                    })}
                                </td> */}




                    </ListGroup>
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
export default ViewSong

