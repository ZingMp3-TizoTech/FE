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
import { FaPlay,FaRegTrashAlt } from "react-icons/fa";

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
            backgroundColor:'#1e293b',
            minHeight:'100%',
            minWidth:'100%',
            position:'absolute',
         

        }}>
            <Sidebar />
            
            {
                <div
                   
                    style={{
                        minWidth:'fit-content',
                        backgroundColor: '#1e293b',
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
                            backgroundColor: '#48589c',
                            marginRight: '50px',
                            border: '1px #d9d9d9d9 solid',
                            display: 'flex',                         
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop:'40px'
                        }}
                       
                    >   
                        <CreatePlayList  onSuccess={()=>getPlaylist()} />
                       
                    </div>
                    {loading ? "" :
                <div style={{  
                   
                    margin: '0 100px 0 340px',
                }}>
                    <SkeletonTheme baseColor="#9c9c9c" highlightColor="#cac8c8" display='flex' >
                        <div>
                            <p style={{
                                    width: '300px',
                                    marginTop: '30px'
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
                </div>}
                    {playlist.map(item => (
                        loading ?
                            <Card
                                className='card'
                                style={{ marginTop:'40px'}}
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
                                            height:'20px'
                                            
                                        }}
                                         key="play" />
                                    </div>


                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={item?.song?.[0]?.image?.[0]?item?.song?.[0]?.image?.[0]
                                        :'https://lh3.googleusercontent.com/T7sdPCzUmJYQwX1aFl6__pbg6XJSt3HY7Nsfqy0QorxUgBilR_5ZixYlX0VM7yjowLHl=w512'} />}
                                    title={item?.name}
                                    description={<>
                                        <p>{item?.genre?.zone}</p>
                                        {/* <div className='text-bold'>Age: {item?.age}</div> */}
                                    </>}
                                />
                            </Card> :
                            <SkeletonTheme baseColor="#9c9c9c" highlightColor="#cac8c8" display='flex'>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginRight: '30px'
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