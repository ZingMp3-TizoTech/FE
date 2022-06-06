import React from "react";
import Homepage from "./components/homepage/Homepage";
import PlaySong from "./components/playsong/PlaySong";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import { ToastContainer, toast } from 'react-toastify';
import Card from "./components/homepage/ListAll/Card";
import ListAll from "./components/homepage/ListAll/ListAll";
import AllPlaylists from "./components/homepage/ListAll/AllPlaylists";
import PrivateRoute from "./components/admin/Privatecomponent";
import HomeAdmin from "./components/admin/HomeAdmin";
import TableGenre from "./components/admin/table/Genre/TableGenres";
import TableArtist from "./components/admin/table/Artist/TableArtist";
import TableAlbum from "./components/admin/table/Album/TableAlbum";

 function App() {
  const NotFound = () => (
    <div>
      <h1 style={{
        color:'red'
      }}>404 - Not Found!</h1>
      
    </div>
  );
  return (
    <>
    <Routes>   
       <Route path="*" element={<NotFound/>} />
       <Route  path="/" element={<Homepage />} />
       <Route path="/playsong/artist/:id" element={<PlaySong type="artists" />} />
       <Route path="/playsong/album/:id" element={<PlaySong type="albums" />} />
       <Route path="/playsong/genre/:id" element={<PlaySong type="genres" />} />
       <Route path="/playsong/playlist/:id" element={<PlaySong type="playlists" />} />
       <Route path="/playsong" element={<PlaySong />} />
       <Route path="/playsong/:id" element={<PlaySong type="songs" />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Register />} />
       <Route path="/artists" element={<ListAll type="artists" />} />
       <Route path="/albums" element={<ListAll type="albums" />} />
       <Route path="/library" element={<AllPlaylists/>}/>
       <Route path="/admin" element={<PrivateRoute><HomeAdmin/></PrivateRoute>}/>
       <Route path="/admin/genres" element={<PrivateRoute><TableGenre/></PrivateRoute>}/>
       <Route path="/admin/albums" element={<PrivateRoute><TableAlbum/></PrivateRoute>}/>
       <Route path="/admin/artists" element={<PrivateRoute><TableArtist/></PrivateRoute>}/>
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
