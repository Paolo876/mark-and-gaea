import './App.css';
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
