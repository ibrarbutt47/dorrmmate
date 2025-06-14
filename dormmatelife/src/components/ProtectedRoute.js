// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element }) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

//   if (!isAuthenticated) {
//     alert("Please register yourself firstly.");
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;









// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
