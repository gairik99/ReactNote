import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Archive } from './pages/Archive/Archive';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <Fragment>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>


    </Fragment>
  );
}

export default App;
