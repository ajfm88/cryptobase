import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
