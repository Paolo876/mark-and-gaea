import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import { Box } from "@mui/material";
import WelcomeLoader from "./components/WelcomeLoader";

//pages
import Home from './pages/home/Home';
import Admin from "./pages/Admin/Admin";


function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000)
  }, [])


  return (
    <div className="App">
        {/* <WelcomeLoader isLoaded={isLoaded}/> */}
      {/* {isLoaded && <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>} */}
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
      </Routes>
    </div>
  );
}

export default App;
