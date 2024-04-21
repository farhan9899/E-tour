
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //       const response = await axios.post('http://localhost:8080/api/admin/login', {
  //           username,
  //           password
  //         });
  //        console.log("Response : "+ response.success);
  //         // Store the token in session storage instead of local storage
  //        // navigate("/LinkData");
          
  //   } catch (err) {
  //     setError('Invalid username or password');
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Inside fetch");
      console.log("Response : " + data.success);
      if(data.success)
      {
            navigate("/LinkData");
      }
      else{
        setError("Invalid username or password");
      }

     
    })
    .catch(err => {
      setError('Invalid username or password');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
