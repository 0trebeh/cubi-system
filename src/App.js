import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'antd/dist/antd.min.css';
import "./App.css";

import LandingPage from './pages/landingpage'
import Perfil from './pages/perfil'
import Pedidos from './pages/pedidos'

import axios from 'axios';
axios.defaults.baseURL = 'localhost:4000';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/Perfil' element={<Perfil/>} />
        <Route exact path='/Pedidos' element={<Pedidos/>} />
      </Routes>
    </Router>
  );
}

export default App;