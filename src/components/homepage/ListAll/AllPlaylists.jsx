import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'

import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { handleGetPlaylistByUser } from '../../../services/Playlist';
import { HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';
import ApiCaller from '../../../utils/callAPI';
import { useParams } from 'react-router-dom';
function AllPlaylists() {
    const { Meta } = Card;
    const [playlist, setPlaylist] = useState([])
    const getPlaylist = async () => {
        const pl = await handleGetPlaylistByUser()

        setPlaylist(pl.data.data);
    }

    useEffect(() => {
        getPlaylist()
    }, [])          //setPlaylist(res.data.data)
    console.log(playlist);


    return (
        <>
            <Sidebar />
            {playlist.map(item =>(

                <>
            
                    <Card
                        style={{
                            width: 300,
                            marginRight: 50,
                            marginBottom: 50,
                            marginTop: 50,
                            marginLeft: 300
                        }}
                        cover={
                            <img
                                alt="example"
                                src={item ? item?.song[0]?.image[0] : "https://play-lh.googleusercontent.com/aA2rpO5sXUJmnkB-H9GlLz8BqhpIw27wG2xc1-9j5rg1h_LmcGxnAd6vOVXTZO8F-D0"}
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
                                <PlayCircleOutlined key="play" onClick={(e)=>console.log(item?._id)} />
                            </div>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={item ? item?.song[0]?.image[0] : "https://play-lh.googleusercontent.com/aA2rpO5sXUJmnkB-H9GlLz8BqhpIw27wG2xc1-9j5rg1h_LmcGxnAd6vOVXTZO8F-D0"} />}
                        />

                    </Card>
                </>
           

                
            ))}

        </>
    )
}

export default AllPlaylists