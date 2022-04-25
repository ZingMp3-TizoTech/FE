import React from "react";
import Homepage from "./components/homepage/Homepage";
import PlaySong from "./components/playsong/PlaySong";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/playsong" element={<PlaySong />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
