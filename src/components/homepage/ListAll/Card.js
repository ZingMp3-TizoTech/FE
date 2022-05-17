import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';


export default function CardItem({artist, album, type='artist'}) {
    const { Meta } = Card;
    return (
        <>
            {type == 'artist'?
            <Card
            style={{ width: 300,
            marginRight:50,
            marginBottom:50,
            }}
            cover={
                <img
                    alt="example"
                    src={artist?.image}
                    style={{ maxWidth: 300,
                             maxHeight: 300,
                             overflow:'hidden',
                        }}
                />
            }
            actions={[
                <HeartOutlined key="like" />,
                <PlayCircleOutlined key="play" />,
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
        :
        <Card
            style={{ width: 300,
            marginRight:50,
            marginBottom:50,
            }}
            cover={
                <img
                    alt="example"
                    src={ album?.artist != null? album?.artist?.image[0] : "https://play-lh.googleusercontent.com/aA2rpO5sXUJmnkB-H9GlLz8BqhpIw27wG2xc1-9j5rg1h_LmcGxnAd6vOVXTZO8F-D0"}
                    style={{ maxWidth: 300,
                             maxHeight: 300,
                             overflow:'hidden',
                        }}
                />
            }
            actions={[
                <HeartOutlined key="like" />,
                <PlayCircleOutlined key="play" />,
            ]}
        >
            <Meta
                avatar={<Avatar src={album?.artist?.image[0]} />}
                title={album?.name}
                description={<>
                    <p>{album?.artist?.name}</p>
                    <div>Date: {album?.date_create}</div>
                </>}
            />
        </Card>
            }
        </>
    )
}