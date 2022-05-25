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
// import Demo from "./components/account/Register";

function App() {
  
  return (
    <>
    <Routes>
  
    
       <Route path="/" element={<Homepage />} />
       <Route path="/playsong/artist/:id" element={<PlaySong type="artists" />} />
       {/* /:type */}
       <Route path="/playsong/album/:id" element={<PlaySong type="albums" />} />
       <Route path="/playsong/genre/:id" element={<PlaySong type="genres" />} />
       <Route path="/playsong/playlist/:id" element={<PlaySong type="playlists" />} />
       <Route path="/playsong" element={<PlaySong />} />
       <Route path="/playsong/:id" element={<PlaySong type="songs" />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Register />} />
       <Route path="/artists" element={<ListAll type="artists" />} />
       <Route path="/albums" element={<ListAll type="albums" />} />
       <Route path="/Library" element={<AllPlaylists/>}/>
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
