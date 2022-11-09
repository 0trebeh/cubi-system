import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'antd/dist/antd.min.css';
import "./App.css";

import LandingPage from './pages/landingpage'
import Home from './pages/home'
import Perfil from './pages/perfil'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Perfil' element={<Perfil/>} />
      </Routes>
    </Router>
  );
}

export default App;