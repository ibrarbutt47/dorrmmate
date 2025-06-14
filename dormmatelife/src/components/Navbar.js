// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className='navbar-logo'><h2 className="navbar-logo">DormMate Life</h2></Link>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//         {/* <li><Link to="/login">Login</Link></li>s */}
//         <li><Link to="/properties">Find Property</Link></li>
//         <li><Link to="/rent">Rent Your Property</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//       </ul>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search..." />
//         <button>🔍</button>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUserPlus, FaSignInAlt, FaSearchLocation, FaRegBuilding, FaInfoCircle } from 'react-icons/fa';
// import './Navbar.css'; // Keep using your existing CSS or upgrade later

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         <h2 className="navbar-logo">DormMate Life</h2>
//       </Link>
      
//       <ul className="navbar-links">
//         <li>
//           <Link to="/"><FaHome className="icon" /> Home</Link>
//         </li>
//         <li>
//           <Link to="/properties"><FaSearchLocation className="icon" /> Find Property</Link>
//         </li>
//         <li>
//           <Link to="/rent"><FaRegBuilding className="icon" /> Rent Property</Link>
//         </li>
//         <li>
//           <Link to="/about"><FaInfoCircle className="icon" /> About Us</Link>
//         </li>
//                 {/* <li>
//           <Link to="/signup"><FaUserPlus className="icon" /> Signup</Link>
//         </li> */}
//         <li>
//           <Link to="/login"><FaSignInAlt className="icon" /> Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;













// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaUserPlus, FaSignInAlt, FaSearchLocation, FaRegBuilding, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
// import './Navbar.css';

// function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userName, setUserName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated') === 'true';
//     const storedUserName = localStorage.getItem('userName');
//     setIsAuthenticated(authStatus);
//     setUserName(storedUserName || '');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');
//     setIsAuthenticated(false);
//     setUserName('');
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         <h2 className="navbar-logo">DormMate Life</h2>
//       </Link>

//       <ul className="navbar-links">
//         <li>
//           <Link to="/"><FaHome className="icon" /> Home</Link>
//         </li>
//         <li>
//           <Link to="/properties"><FaSearchLocation className="icon" /> Find Property</Link>
//         </li>
//         <li>
//           <Link to="/rent"><FaRegBuilding className="icon" /> Rent Property</Link>
//         </li>
//         <li>
//           <Link to="/about"><FaInfoCircle className="icon" /> About Us</Link>
//         </li>
//         {isAuthenticated ? (
//           <>
//             <li className="navbar-user">{userName}</li>
//             <li>
//               <button onClick={handleLogout} className="logout-button">
//                 <FaSignOutAlt className="icon" /> Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/signup"><FaUserPlus className="icon" /> Signup</Link>
//             </li>
//             <li>
//               <Link to="/login"><FaSignInAlt className="icon" /> Login</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;







import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaSearchLocation,
  FaRegBuilding,
  FaInfoCircle,
  FaSignOutAlt,
  FaMoneyBill,
} from 'react-icons/fa';
import './Navbar.css';
import { Fa42Group } from 'react-icons/fa6';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
      setUserName(localStorage.getItem('userName') || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2 className="navbar-logo">DormMate Life</h2>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/properties">
            <FaSearchLocation className="icon" /> Find Property
          </Link>
        </li>
        <li>
          <Link to="/rent">
            <FaRegBuilding className="icon" /> Rent Property
          </Link>
        </li>
        <li>
          <Link to="/my-properties">
            <FaMoneyBill className="icon" /> Your Property
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle className="icon" /> About Us
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="navbar-user">{userName}</li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <FaSignOutAlt className="icon" /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {/* <li>
              <Link to="/signup">
                <FaUserPlus className="icon" /> Signup
              </Link>
            </li> */}
            <li>
              <Link to="/login">
                <FaSignInAlt className="icon" /> Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
