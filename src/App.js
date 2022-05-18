import React from "react";
import Homepage from "./components/homepage/Homepage";
import PlaySong from "./components/playsong/PlaySong";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import { ToastContainer, toast } from 'react-toastify';
import Card from "./components/homepage/ListAll/Card";
import ListAll from "./components/homepage/ListAll/ListAll";
import ChangePassword from "./components/account/ChangePassword"
// import Demo from "./components/account/Register";

function App() {
  const log = ()=>{
    console.log("heroku");
  }
  return (
    <>
    <Routes>
    <Route path="/changepassword" element={  <ChangePassword/>} />
    
       <Route path="/" element={<Homepage />} />
       <Route path="/playsong/artist/:id" element={<PlaySong type="artists" />} />
       {/* /:type */}
       <Route path="/playsong/album/:id" element={<PlaySong type="albums" />} />

       <Route path="/playsong/genre/:id" element={<PlaySong type="gerens" />} />
       <Route path="/playsong" element={<PlaySong />} />

       <Route path="/playsong/:id" element={<PlaySong type="songs" />} />

       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Register />} />
       <Route path="/artists" element={<ListAll />} />
       <Route path="/albums" element={<ListAll type="albums" />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
