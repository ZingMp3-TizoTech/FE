import React from "react";
import Homepage from "./components/homepage/Homepage";
import PlaySong from "./components/playsong/PlaySong";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/playsong" element={<PlaySong />} />
    </Routes>
  );
}

export default App;
