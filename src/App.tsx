import React from 'react';
import { Home } from './screens/Home';
import { Projets } from './screens/Projets';
import { Bio } from './screens/Biographie';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NavBar } from './components/Navigation';
import { Distributions } from './screens/Distributions';


function App() {
  return (
    <body className='w-dvh bg-gray-900 h-screen text-white'>
    <NavBar/>
      <div className='container mt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projets' element={<Projets />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/dist' element={<Distributions />} />
        </Routes>
      </div>
    </body>
  );
}


export default App;
