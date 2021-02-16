import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainHeader from './GlobalComponents/Header.jsx';
import Landing from './landingPage/MainLanding';
import Login from './landingPage/Login.jsx';

import LogoutButton from './login/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const [color, setColor] = useState('berry');

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <main className='main'>
          <MainHeader />
          <Landing />
          <LogoutButton />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
