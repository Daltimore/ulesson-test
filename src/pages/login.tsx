import React from 'react';
import { UserProvider } from '../UserContext';
import LoginComponent from '../components/LoginComponent';

const Login: React.FC = () => {

  return (
      <UserProvider>
        <LoginComponent />
      </UserProvider>
  );
}

export default Login