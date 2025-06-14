// import React, { useState } from 'react';
// import './Login.css';
// import Navbar from "../components/Navbar";
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('isAuthenticated', 'true');
//         localStorage.setItem('token', data.token);
//         alert('Login successful!');
//         navigate('/properties');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       // alert('Something went wrong!');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2>Login to your account</h2>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

//           <Link to="/signup">Don't have an account? Sign Up</Link>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;











// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';
import Navbar from "../components/Navbar";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/properties');
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to your account</h2>

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

          <Link to="/signup">Don't have an account? Sign Up</Link>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
