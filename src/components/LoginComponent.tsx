import React from 'react';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom'

const LoginComponent: React.FC = () => {
  const { isLoggedIn, login, claimDailyReward } = useUser();

  const navigate = useNavigate()

  const handleLogin = () => {
    login();
  };

  const handleClaimDailyReward = () => {
    claimDailyReward();
    navigate('/dashboard')
  };

  return (
    <div className='flex justify-center items-center m-auto h-full'>
      {isLoggedIn ? (
        <div className='flex justify-center flex-col items-center my-auto h-full'>
          <p className='text-2xl font-medium'>Welcome! You are logged in.</p>
          <button onClick={handleClaimDailyReward} className='bg-[#313848] text-white rounded px-5 py-2 mt-4'>Claim Daily Reward</button>
        </div>
      ) : (
        <div className='text-center'>
          <p>Please log in to claim your daily reward.</p>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default LoginComponent