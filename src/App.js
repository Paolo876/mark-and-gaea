import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppContext } from "./hooks/useAppContext";
import './App.css';

import WelcomeLoader from "./components/WelcomeLoader";

//pages
import Home from './pages/home/Home';
import Admin from "./pages/Admin/Admin";


function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3500)
  }, [])
  const { imagekitKeys, isLoading } = useAppContext();

  return (
    <div className="App">
      <Routes>
      {/* <Route element={ <>{isLoading || !isLoaded ? <WelcomeLoader/> : <Home/>}</> } path="/"/> */}
        <Route element={<Home/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
      </Routes>
    </div>
  );
}

export default App;
