import React from 'react'
import ListSongs from './listtable/ListSong'

export default function PlaySong({type}) {
  return (
    <>
        <div className='container-page'>

        <ListSongs type={type} />
    </div> 
    </>
  )
}
