import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About
from './Components/About';
import ReactDOM from "react-dom/client"
import React from "react";
import {
  BrowserRouter,
  
  Route,Routes,

} from "react-router-dom";




function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=> {
    if (theme==='light'){

              setTheme('dark')
              document.body.style.backgroundColor= 'black';

            }
      else {
        setTheme('light')
        document.body.style.backgroundColor= 'white';

          }
  }
  return (
    <>
    <title>Text Genie Created by Hamza Butt</title>
        <BrowserRouter>
        <Navbar Title="Home" Theme={theme} Toggle= {toggleTheme}/>
        
        <Routes>
                <Route path="/about" element={<About />} />
 
 <Route path="/TextGenie" element={<TextForm SampleText="Enter Text Area" Theme={theme}/>} />

                 </Routes>

</BrowserRouter>

</>
  );

}

export default App;