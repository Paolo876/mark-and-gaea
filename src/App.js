import { Routes, Route } from "react-router-dom";
import './App.css';


//pages
import Home from './pages/home/Home';
import Admin from "./pages/Admin/Admin";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
      </Routes>
    </div>
  );
}

export default App;
