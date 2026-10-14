import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
  return <p>this is home</p>;
}
function Page2() {
  return <p>this is page2</p>;
}
function Page1() {
  return <p>this is page1</p>;
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">home</Link>
        <br />
        <Link to="1">page1</Link>
        <br />
        <Link to="2">page2</Link>
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="1" element={<Page1/>}/>
        <Route path="2" element={<Page2/>}/>

      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
