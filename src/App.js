import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login/Login"
import Register from './components/Register/Register'
import Home from "./components/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
const App=()=>{
  return(<>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  exact path="/"  element={<Login />} /> 
        <Route  path="Login" element={<Login />} />
        <Route  path="Register" element={<Register />} />
        <Route path="Home" element={<Home /> } />
      </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}
export default App;