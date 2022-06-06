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
import { handleCreateAlbum} from '../../../../services/Album';
import Select from 'react-select';
import ApiCaller from '../../../../utils/callAPI';


const CreateAlbum = ({ onCall }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nameArtist, setNameArtist] = useState('')
    const [age, setAge] = useState()
    const [genre, setGenre] = useState('')
    const [allArtist, setAllArtist] = useState([])
    const [gender, setGender] = useState('')
    const [nameAlbum, setNameAlbum] = useState('')
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const showModal = () => {
        setIsModalVisible(true);
        setLoading(true)
    };

    const handleOk = async () => {
        console.log('oke');
        if (Cookies.get('token')) {
            //const created = await handleCreatePlaylist(name, date_create, song)
           let created= ' ';
           let songs=[];
           console.log(nameAlbum,created,selectedOption?.value,songs);
        //    name,created,artist,songs
            const create = await handleCreateAlbum(nameAlbum,created,selectedOption?.value,songs);
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
        setNameAlbum(e.target.value)
    }
    const handleGetAge = (e) => {
        setAge(e.target.value)
    }
    const handleGetGender = (e) => {
        setGender(e.target.value)
    }
    const callAll=()=>{
        ApiCaller('artists', 'GET')
        .then(res => {
          setAllArtist(res.data.data)
        })
    }   
      useEffect(() => {
        callAll()
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
                <Button  >Create Album</Button>
            </div>

            <Modal
            style={{marginTop:'-90px'}}
                closeIcon
                footer=''
                visible={isModalVisible}>
                <ModalHeader>
                    <a style={{ color: "white", fontSize: '30px' }}>Create Album</a>
                    <CloseButton onClick={(e) => setIsModalVisible(false)} />
                </ModalHeader>
                <ModalBody>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input
                            value={nameAlbum}
                            type='text'
                            placeholder='Enter Album name!'
                            onChange={handleGetName}
                            style={{
                                height: '40px',
                                border: '1px solid rgb(0 0 0 / 10%)',
                                borderRadius: '50px'
                            }}
                        />
                      
                  
                        <br />                    
                        <Select
                            defaultValue={selectedOption}
                            name="form-field-name"
                            //value="one"
                            options={options}
                            onChange={setSelectedOption}
                        />
                        <br />
                      
                        
                    </div>
                </ModalBody>

                <ModalFooter style={{marginTop:'90px'}}>
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
export default CreateAlbum
