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
    const [loading, setLoading] = useState(true)
    const handlePlayByPlaylist = (e) => {
        navigate('/playsong/playlist/' + `${e.target.id}`);
    }
    const { Meta } = Card;
    const [playlist, setPlaylist] = useState([])
    const getPlaylist = async () => {
        const pl = await handleGetPlaylistByUser()
        setPlaylist(pl.data.data);
        setLoading(false)
    }
    useEffect(() => {
        getPlaylist()
    }, [])

    return (
        <>
            <Sidebar />
            {!loading ?
                <div
                    className='play-list'
                    style={{
                        width: '1110px',
                        margin: '40px 0 0 340px',
                        display: 'flex'
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
                        <CreatePlayList />
                        <p
                            style={{
                                fontSize:'23px',
                                fontWeight:'400'
                            }}
                        >Create a new playlist</p>
                    </div>
                    {playlist.map(item => (
                        <Card
                            className='card'
                            style={{
                                width: 300,
                                marginRight: 50,
                                marginBottom: 50,
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={item?.song?.[0]?.image?.[0]}
                                    style={{
                                        maxWidth: 300,
                                        maxHeight: 300,
                                        overflow: 'hidden',
                                    }}
                                />
                            }
                            actions={[
                                <Delete value={item?.name} />,
                                <div
                                    id={item._id}
                                    onClick={handlePlayByPlaylist}
                                >
                                    <PlayCircleOutlined key="play" onClick={handlePlayByPlaylist} />
                                </div>,
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
                        </Card>
                    ))}
                </div>
                :
                <SkeletonTheme baseColor="#e6e1e1" highlightColor="#cac8c8" display='flex'>
                    <div style={{
                        display: 'flex',
                        margin: '40px 0 0 340px'
                    }}>
                        
                        <p
                            style={{
                                width: '300px',
                                marginLeft: '0px'
                            }}
                        >
                            <Skeleton
                                height={300}
                            />
                            <Skeleton
                                count={3}
                                height={20}
                            />
                        </p>
                        <p
                            style={{
                                width: '300px',
                                marginLeft: '80px'
                            }}
                        >
                            <Skeleton
                                height={300}
                            />
                            <Skeleton
                                count={3}
                                height={20}
                            />
                        </p>
                        <p
                            style={{
                                width: '300px',
                                marginLeft: '80px'
                            }}
                        >
                            <Skeleton
                                height={300}
                            />
                            <Skeleton
                                count={3}
                                height={20}
                            />
                        </p>
                    </div>
                </SkeletonTheme>
            }

        </>
    )
}

export default AllPlaylists