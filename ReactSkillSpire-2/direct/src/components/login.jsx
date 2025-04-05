import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLogin }) {
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (username === "admin" && password === "admin") {
      setIsLogin(true);
      navigate(`/userProfile/${username}`);
    } else {
      alert("Invalid credentials");
    }
    console.log(username);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handle}>
        <label>
          Username:
          <input type="text" name="username" placeholder="Username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}