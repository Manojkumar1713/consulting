import React, { useState, useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.error('Login Failed:', error),
    prompt: 'select_account', // Force user to select an account
  });

  useEffect(() => {
    if (user?.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('google-user', JSON.stringify(res.data));
          navigate('/dashboard');
        })
        .catch((err) => console.error(err));
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome</h1>
        <p>Please sign in using your Google Account</p>
        <button onClick={() => login()} className="login-button">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
