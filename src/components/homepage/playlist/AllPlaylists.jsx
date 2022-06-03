import React, { useEffect, useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { handleGetPlaylistByUser } from '../../../services/Playlist';
import { useNavigate, useParams } from 'react-router-dom';
import Delete from './modal/ModalDeletePlayList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CreatePlayList from './modal/ModalCreatePlayList';
import '../ListAll/album&artist/card/Card.css'
import music from '../../../assets/image/music.png'
import { FaPlay } from "react-icons/fa";



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

            backgroundColor:'rgb(30 41 59)',
            minHeight:'1500px'

        }}>
            <Sidebar />
            
            {
                <div
                    style={{
                        minWidth:'fit-content',
                        backgroundColor:'rgb(30 41 59)',
                        margin: '0 0 0 340px',
                        display: 'flex',
                        flexWrap: 'wrap',
                       
                    }}
                >
                    <div    
                        className='card'
                        style={{
                            height: '458px',
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
                        <CreatePlayList onSuccess={()=>getPlaylist()} playlistUser = { playlist } />
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
                                        src={item?.song?.[0]?.image?.[0] ? item?.song?.[0]?.image?.[0] : music}
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


                                    avatar={<Avatar src={item?.song?.[0]?.image?.[0]?item?.song?.[0]?.image?.[0]
                                        :'https://lh3.googleusercontent.com/T7sdPCzUmJYQwX1aFl6__pbg6XJSt3HY7Nsfqy0QorxUgBilR_5ZixYlX0VM7yjowLHl=w512'} />}

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