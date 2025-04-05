import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("Form submitted", event.target[0].value, event.target[1].value);
    event.preventDefault();

    const username = event.target[0].value;
    if (username === "admin" && event.target[1].value === "admin") {
      alert("Login Successful");
      navigate(`/dashboard/${username}`);
    } else {
      alert("Login Failed");
      navigate('/form');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
        </label>
        <input type="text" name="username" placeholder="UserName" />
        <br />
        <label>
          Password:
        </label>
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}