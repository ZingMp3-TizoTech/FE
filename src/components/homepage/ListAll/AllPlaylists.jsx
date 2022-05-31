import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { handleGetPlaylistByUser } from '../../../services/Playlist';
import { FolderAddFilled, PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import Delete from './ModalDeletePlayList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CreatePlayList from './ModalCreatePlayList';
import './Card.css'
<<<<<<< HEAD
import { FaPlay } from "react-icons/fa";
=======

import { FaPlay,FaRegTrashAlt } from "react-icons/fa";
import Cookies from 'js-cookie'
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde

function AllPlaylists() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
   
    const handlePlayByPlaylist = (id) => {
        navigate('/playsong/playlist/' + `${id}`);
    }
 
    const { Meta } = Card;
    const [playlist, setPlaylist] = useState([])
    const getPlaylist = async () => {
        const pl = await handleGetPlaylistByUser()
        setPlaylist(pl.data.data);
        if (pl) {
            setTimeout(() => {
                setLoading(true)
            }, 100)
        }
        else {
            setLoading(false)
        }
    }   
    
    useEffect(()=>{
        getPlaylist()

    },[])
    return (
        <div style={{
<<<<<<< HEAD
            backgroundColor:'rgb(30 41 59)',
            minHeight:'1500px'
=======

            backgroundColor:'#1e293b',
            minHeight:'100%',
            minWidth:'100%',
            position:'absolute',
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
        }}>
            <Sidebar />
            
            {
                <div
                    style={{
                        minWidth:'fit-content',
<<<<<<< HEAD
                        backgroundColor:'rgb(30 41 59)',
                        // backgroundImage: 'linear-gradient(to right, rgb(30 41 59) , rgb(43 60 87))',
=======

                        backgroundColor: '#1e293b',
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
                        margin: '0 0 0 340px',
                        display: 'flex',
                        flexWrap: 'wrap',
                       
                    }}
                >
                    <div    
                        className='card'
                        style={{
                            height: '433px',
                            width: '300px',
                            backgroundColor: 'rgb(71 85 105)',
                            marginRight: '50px',
                            border: '1px #d9d9d9d9 solid',
                            display: 'flex',                         
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop:'62px'
                        }}
                       
                    >
                        <CreatePlayList onSuccess={()=>getPlaylist()} />
<<<<<<< HEAD
                      
=======
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
                    </div>
                   
                    {playlist.map(item => (
                        loading ?
                            <Card
                                className='card'
                                style={{ 
                                    marginTop:'60px',
                                    backgroundColor:'rgb(71 85 105)',
                                    border:'1px #ffff solid'
                                    }}
                                cover={
                                    <img
                                        alt="example"
                                        src={item?.song?.[0]?.image?.[0] ? item?.song?.[0]?.image?.[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCebaMsn7crR47zGdjApJzDoxM0t2-oCEyt07l6Ecvg0-3ZNOwv75SrgRcNKJr6g211a4&usqp=CAU'}
                                        style={{
                                            maxWidth: 300,
                                            maxHeight: 300,
                                            overflow: 'hidden',
                                        }}
                                    />
                                }
                                actions={[
                                    <Delete  onSuccess={()=> getPlaylist()} value={item?.name} id={item?._id} />,
                                    <div onClick={() => handlePlayByPlaylist(item?._id)} >
                                        <FaPlay 
                                        style={{
                                            width:'20px',
                                            height:'20px',
                                            color:'#ffff'
                                            
                                        }}
                                         key="play" />
                                    </div>


                                ]}
                            >
                                <Meta
<<<<<<< HEAD
                                    avatar={<Avatar src={item?.song?.[0]?.image?.[0]} />}
                                    color={'#ffff'}
=======

                                    avatar={<Avatar src={item?.song?.[0]?.image?.[0]?item?.song?.[0]?.image?.[0]
                                        :'https://lh3.googleusercontent.com/T7sdPCzUmJYQwX1aFl6__pbg6XJSt3HY7Nsfqy0QorxUgBilR_5ZixYlX0VM7yjowLHl=w512'} />}
>>>>>>> 0d1be6faaba6908c0afdf6cfcdca782b8fc05fde
                                    title={item?.name}
                                    description={<>
                                        <p>{item?.genre?.zone}</p>
                                        {/* <div className='text-bold'>Age: {item?.age}</div> */}
                                    </>}
                                />
                            </Card> :
                            <SkeletonTheme baseColor="#e6e1e1" highlightColor="#cac8c8" display='flex'
                                style={{ marginLeft:'-20px'}}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginRight: '35px',
                                    marginTop:'39px',
                                   
                                }}>

                                    <p
                                        style={{
                                            width: '300px',
                                            marginLeft: '0px'
                                        }}
                                    >
                                        <Skeleton
                                            height={350}
                                        />
                                        <Skeleton
                                            count={3}
                                            height={20}
                                        />
                                    </p>


                                </div>
                            </SkeletonTheme>


                    )

                    )}
                </div>
            }
           
        </div>
    )
}

export default AllPlaylists