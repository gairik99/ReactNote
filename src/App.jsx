import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Archive } from './pages/Archive/Archive';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
import { Important } from './pages/Important/Important';
import { Bin } from './pages/Bin/Bin';

function App() {
  return (
    <Fragment>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/important' element={<Important />} />
        <Route path='/bin' element={<Bin />} />
      </Routes>


    </Fragment>
  );
}

export default App;
