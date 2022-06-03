import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css'
import music from '../../../../../assets/image/music.png'
import moment from 'moment';
export default function CardItem({ artist, album, type = 'artist', loading }) {
    const { Meta } = Card;
    let navigate = useNavigate();
    const handlePlayByArtist = (idArtist) => {
        navigate('/playsong/artist/' + `${idArtist}`);
    }
    const handlePlayByAlbum = (idAlbum) => {
        navigate('/playsong/album/' + `${idAlbum}`);
    }
    return (
        <>
            {type == 'artist' && !loading ?
                <Card
                className='card'                   
                    cover={
                        <img
                            alt="example"
                            src={artist?.image ? artist?.image : music}
                            style={{
                                maxWidth: 300,
                                height: 300,                              
                                overflow: 'hidden',
                            }}
                        />
                    }
                    actions={[
                        <HeartOutlined key="like" style={{
                            width:'20px',
                            height:'20px',
                            color:'#ffff',
                            fontSize:'23px'
                            
                        }}/>,
                        <div 
                            >
                            <PlayCircleOutlined key="play" style={{
                                            width:'20px',
                                            height:'20px',
                                            color:'#ffff',
                                            fontSize:'23px'
                                            
                                        }}
                             onClick={(e)=>handlePlayByArtist(artist?._id)}
                             />
                        </div>
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={artist?.image[0]} />}
                        title={artist?.name}
                        description={<>
                            <p style={{color:'#fff', fontWeight:'600'}}>{artist?.genre?.zone}</p>
                            <div style={{color:'#ffff', fontWeight:'600'}}>Age: {artist?.age}</div>
                        </>}
                    />
                </Card>
                : type == 'album' && !loading ?
                    <Card
                        className='card'                       
                        cover={
                            <img
                                alt="example"
                                src={album?.artist != null ? album?.artist?.image[0] : music}
                                style={{
                                    maxWidth: 300,
                                    maxHeight: 300,
                                    overflow: 'hidden',
                                }}
                            />
                        }
                        actions={[
                            <HeartOutlined key="like" />,
                            <div
                            
                                
                            >
                                <PlayCircleOutlined key="play" onClick={(e)=>handlePlayByAlbum(album?._id)} />
                            </div>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={album?.artist?.image[0]} />}
                            title={album?.name}
                            description={<>
                                <p>{album?.artist?.name}</p>
                                <div>Date: {moment(album?.date_create).format("ddd MM yyyy")}</div>
                            </>}
                        />
                    </Card> :
                    <SkeletonTheme baseColor="#e6e1e1" highlightColor="#cac8c8" display='flex'>
                        <p
                            style={{
                                width: '300px',
                                marginLeft: '50px'
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
                    </SkeletonTheme>
            }
        </>
    )
}