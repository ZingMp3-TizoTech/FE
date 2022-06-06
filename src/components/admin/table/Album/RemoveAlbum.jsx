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
import { handleRemoveAlbum} from '../../../../services/Album';


const RemoveAlbum = ({onCall,id,name}) => {
  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      
    };
    const handleOk = async () => {
        if (Cookies.get('token')) {
            //const created = await handleCreatePlaylist(name, date_create, song)
             const update = await handleRemoveAlbum(id);
             console.log(update);
             setIsModalVisible(false)
             onCall && onCall()
           
        }
        else setIsModalVisible(true)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  

    return (
        <>
            <div onClick={showModal} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>         
            <FaRegTrashAlt color='red' fontSize={'20px'}/>  
            </div>

            <Modal
                closeIcon
                footer
                visible={isModalVisible}>
                <ModalHeader>
                    <a style={{color:"white",fontSize:'30px'}}>Delete artist</a>
                    <CloseButton onClick={(e)=>setIsModalVisible(false)} />
                </ModalHeader>
                <ModalBody>
                   <p>Do you want delete {name} ?</p>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleCancel}>Cancel</Button>
                   
                        <Button onClick={handleOk}>Remove</Button>
                                       
                </ModalFooter>
            </Modal>
        </>
    );
}
export default RemoveAlbum
