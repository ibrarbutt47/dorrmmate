// Before working


// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Signup from './pages/signUp';
// import Home from './pages/Home';
// import Login from './pages/Login';
// // import BookingForm from '../pages/BookingForm';
// import RentYourProperty from './pages/RentYourProperty';
// // import PropertiesList from './pages/propertiespage';
// import SearchResults from './pages/SearchResults';
// import PropertyDetails from './pages/PropertyDetails'; // ✅ NEW
// import BookingForm from './pages/BookingForm';
// import HomeScreen from './components/HomeScreen';
// // import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/rent' element={<RentYourProperty />} />
//         <Route path='/properties' element={<HomeScreen/>} />
//         <Route path='/search' element={<SearchResults />} />
//         <Route path='/search-results' element={<SearchResults />} />
//         <Route path='/property_details' element={<PropertyDetails />} /> {/* ✅ NEW */}
//         <Route path="/bookinform" element={<BookingForm/>} />

//         {/* <Route path='/rent' element={<ProtectedRoute element={<RentYourProperty />} />} />
//         <Route path='/properties' element={<ProtectedRoute element={<PropertiesList />} />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;














import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signUp';
import Home from './pages/Home';
import Login from './pages/Login';
import RentYourProperty from './pages/RentYourProperty';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import BookingForm from './pages/BookingForm';
import HomeScreen from './components/HomeScreen';
import ProtectedRoute from './components/ProtectedRoute';
import MyProperties from './pages/MyProperties';
import FilterResult from './components/FilterResults';
import MyBookings from './components/MyBookings'
// In App.js or your routes file
// import OwnerOrders from './pages/OwnerOrders';
import Bookings from './pages/Bookings';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        {/* Protected routes */}
        <Route path='/rent' element={
          <ProtectedRoute>
            <RentYourProperty />
          </ProtectedRoute>
        } />

        <Route path='/my-properties' element={
          <ProtectedRoute>
            <MyProperties />
          </ProtectedRoute>
        } />

        <Route path='/properties' element={
          <ProtectedRoute>
            <HomeScreen />
          </ProtectedRoute>
        } />

        {/* <Route path='/filter-results' element={
          <ProtectedRoute>
            <FilterResult/>
          </ProtectedRoute>
        } /> */}
        <Route path="/filter-result" element={<FilterResult />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/search-results' element={<SearchResults />} />
        <Route path='/property_details' element={<PropertyDetails />} />
        <Route path='/bookingform' element={<BookingForm />} />
        <Route path="/my-orders" element={<ProtectedRoute><Bookings/></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
