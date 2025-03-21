'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      if (email === 'admin@travelbuddy.com' && password === 'password123') {
        alert('Login Successful!');
        router.push('/dashboard');
      } else {
        setMessage('Invalid Email or Password');
      }
    } else {
      if (password !== confirmPassword) {
        setMessage('Passwords do not match');
        return;
      }
      alert('Signup Successful! Please login.');
      setIsLogin(true);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="container bg-gradient-to-b from-white to-blue-100 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg text-center w-80 text-blue-900">
        <h2 className="text-2xl font-semibold mb-4">{isLogin ? 'Login to Travel Buddy' : 'Sign Up for Travel Buddy'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-3 border border-blue-300 rounded-lg"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border border-blue-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border border-blue-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-3 border border-blue-300 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        {message && <p className="text-red-500 mt-3">{message}</p>}
        <p className="switch mt-3 text-blue-600 cursor-pointer" onClick={handleToggleForm}>
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default Login;