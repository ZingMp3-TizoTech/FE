import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css'
import moment from 'moment';
export default function CardItem({ artist, album, type = 'artist', loading }) {
    const { Meta } = Card;
    let navigate = useNavigate();
    const handlePlayByArtist = (e) => {
        navigate('/playsong/artist/' + `${e.target.id}`);
    }
    const handlePlayByAlbum = (e) => {
        navigate('/playsong/album/' + `${e.target.id}`);
    }
    console.log(loading);
    return (
        <>
            {type == 'artist' && !loading ?
                <Card
                className='card'
                   
                    cover={
                        <img
                            alt="example"
                            src={artist?.image}
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
                            id={artist._id}
                            onClick={handlePlayByArtist}
                        >
                            <PlayCircleOutlined key="play" />
                        </div>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={artist?.image[0]} />}
                        title={artist?.name}
                        description={<>
                            <p>{artist?.genre?.zone}</p>
                            <div className='text-bold'>Age: {artist?.age}</div>
                        </>}
                    />
                </Card>
                : type == 'album' && !loading ?
                    <Card
                        className='card'
                       
                        cover={
                            <img
                                alt="example"
                                src={album?.artist != null ? album?.artist?.image[0] : "https://play-lh.googleusercontent.com/aA2rpO5sXUJmnkB-H9GlLz8BqhpIw27wG2xc1-9j5rg1h_LmcGxnAd6vOVXTZO8F-D0"}
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
                                id={album._id}
                                onClick={handlePlayByAlbum}
                            >
                                <PlayCircleOutlined key="play" />
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