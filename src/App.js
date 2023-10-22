import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

//pages
import Home from './pages/home/Home';
import { Box } from "@mui/material";
import WelcomeLoader from "./components/WelcomeLoader";


function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000)
  }, [])


  return (
    <div className="App">
        <WelcomeLoader isLoaded={isLoaded}/>
      {isLoaded && <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>}
    </div>
  );
}

export default App;
