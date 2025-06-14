// import React, { useState } from 'react';
// import './signUp.css';
// import Navbar from "../components/Navbar";
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('isAuthenticated', 'true');
//         localStorage.setItem('token', data.token);
//         alert('Signup successful!');
//         navigate('/properties');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert('Something went wrong.');
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signup-container">
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h2>Create an Account</h2>

//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

//           <Link to="/login">Already have an account? Login</Link>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signup;
















// // src/pages/Signup.js
// import React, { useState } from 'react';
// import './signUp.css';
// import Navbar from "../components/Navbar";
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, password })
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('isAuthenticated', 'true');
//         localStorage.setItem('token', data.token);
//         alert('Signup successful!');
//         navigate('/properties');
//       } else {
//         alert(data.message || 'Signup failed.');
//       }
//     } catch (error) {
//       alert('Something went wrong.');
//       console.error('Signup error:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signup-container">
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h2>Create an Account</h2>

//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

//           <Link to="/login">Already have an account? Login</Link>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signup;










// src/pages/Signup.js
import React, { useState } from 'react';
import './signUp.css';
import Navbar from "../components/Navbar";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', data.token);
        alert('Signup successful!');
        navigate('/properties');
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (error) {
      alert('Something went wrong.');
      console.error('Signup error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

          <Link to="/login">Already have an account? Login</Link>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
