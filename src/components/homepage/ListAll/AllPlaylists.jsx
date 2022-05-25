import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { handleGetPlaylistByUser } from '../../../services/Playlist';
import { FolderAddFilled, PlayCircleOutlined } from '@ant-design/icons';
import ApiCaller from '../../../utils/callAPI';

import { useNavigate, useParams } from 'react-router-dom';
import { display } from '@mui/system';
import Delete from './ModalDeletePlayList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CreatePlayList from './ModalCreatePlayList';
import './Card.css'


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
        setTimeout(()=>{
            setLoading(true)
        },1000)
       
    }
    useEffect(() => {
        getPlaylist()
    }, [])

    return (
        <>
            <Sidebar />
            {
                <div
                    className='play-list'
                    style={{
                        width: '1110px',
                        margin: '40px 0 0 340px',
                        display: 'flex',
                        flexWrap:'wrap',
                    }}
                >
                    <div
                        className='card'
                        style={{
                            height: '433px',
                            width: '300px',
                            backgroundColor: '#fffff',
                            marginRight:'50px',
                            border:'1px #d9d9d9d9 solid',
                            display:'flex',
                           
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                        }}

                    >
                        <CreatePlayList onSuccess={getPlaylist} />
                        <p
                            style={{
                                fontSize:'23px',
                                fontWeight:'400'
                            }}
                        >Create a new playlist</p>
                    </div>
                    {playlist.map(item => (
                        loading?
                            <Card
                                className='card'
                               
                                cover={
                                    <img
                                        alt="example"
                                        src={item?.song?.[0]?.image?.[0]?item?.song?.[0]?.image?.[0]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCebaMsn7crR47zGdjApJzDoxM0t2-oCEyt07l6Ecvg0-3ZNOwv75SrgRcNKJr6g211a4&usqp=CAU'}
                                        style={{
                                            maxWidth: 300,
                                            maxHeight: 300,
                                            overflow: 'hidden',
                                        }}
                                    />
                                }
                                actions={[
                                    <Delete onSuccess={getPlaylist()}  value={item?.name} id={item?._id}/>,
                                    <div onClick={() => handlePlayByPlaylist(item?._id)} >
                                           <PlayCircleOutlined  key="play"/>
                                    </div>
                                 
                                   
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={item?.song?.[0]?.image?.[0]} />}
                                    title={item?.name}
                                    description={<>
                                        <p>{item?.genre?.zone}</p>
                                        {/* <div className='text-bold'>Age: {item?.age}</div> */}
                                    </>}
                                />
                             </Card>:  
                                <SkeletonTheme baseColor="#e6e1e1" highlightColor="#cac8c8" display='flex'>
                                <div style={{
                                    display: 'flex',
                                    justifyContent:'space-between',
                                    marginRight:'30px'
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

        </>
    )
}

export default AllPlaylists