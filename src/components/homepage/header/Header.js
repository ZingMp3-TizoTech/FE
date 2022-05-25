import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";
import './Header.css'
import MainMenu from "./Mainmenu"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Cookies from 'js-cookie'
import { handleSearchByKeyword } from '../../../services/Search';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import {MdLibraryMusic } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";

export default function Header() {
  let navigate = useNavigate();
  const [result, setResult] = useState([])
  const loggedInUser = Cookies.get('token');
  const type=['album','artist']
  
  const handleOnSearch = async (string, results) => {
    
    let handleSearch = await handleSearchByKeyword(string)
   
    handleSearch = handleSearch.data.data;
    let _result = [];
    Object.keys(handleSearch).forEach(key => {
      console.log(key);
      _result = _result?.concat((handleSearch[key] || []).map(item => {
        return {
          id: item?._id,
          name: item?.name,        
          url: item?.url, //song
          age: item?.age, //artist
          artist: item?.artist, //album
          image: item?.image
        }
      }))
    })
    console.log(handleSearch);
    results = _result;
    setResult(results)
  };
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  
  const handleOnSelect = (item) => {
    if(item?.artist)
      navigate(`/playsong/${type[0]}/${item.id}`)
    if(item?.age)
      navigate(`/playsong/${type[1]}/${item.id}`)
    if(item?.url)
      navigate(`/playsong/${item.id}`)
  }

  const handleOnFocus = async(results) => {
    
    let handleSearch = await handleSearchByKeyword(' ')
   
    handleSearch = handleSearch.data.data;
    let _result = [];
    Object.keys(handleSearch).forEach(key => {
      console.log(key);
      _result = _result?.concat((handleSearch[key] || []).map(item => {
        return {
          id: item?._id,
          name: item?.name,        
          url: item?.url, //song
          age: item?.age, //artist
          artist: item?.artist, //album
          image: item?.image
        }
      }))
    })
    console.log(handleSearch);
    results = _result;
    setResult(results);
  }
  const formatResult = (item) => {
   
    return (
         <div>
          {item?.age? <img style={{
      width:"50px",
      height:"50px",
      borderRadius:"50%"
     }} src={item?.image}/> :item?.url?<GiMusicalNotes/>:<MdLibraryMusic/>}  <a>{item?.name}</a>
         </div>
       
       
    );
  };

  
  return (
    <div className='wrapper-navbar' style={{maxWidth:'100%',width:'82%'}}>
      <div style={{ width: 400, marginRight: 300 }}>
     
        <ReactSearchAutocomplete
          items={result}
          showIcon='false'
          showClear='false'
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          formatResult={formatResult}
          styling={{ zIndex: 4 }} // To display it on top of the search box below

        />

      </div>

      <div
        style={{
          marginRight: '10px'
        }}
      >
      
        {!loggedInUser ?
          <>
            <Button style={{ marginRight: '10px' }}
              onClick={(e) => {
                navigate('/signup');
              }}
              variant="outlined" startIcon={<DriveFileRenameOutlineIcon />}>
              Register
            </Button>
            <Button variant="contained" endIcon={<ExitToAppIcon />}
              onClick={(e) => {
                navigate('login');
              }}>
              Login
            </Button>
          </>
          :
          <MainMenu />
        }

      </div>
    </div>
  )
}