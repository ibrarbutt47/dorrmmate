// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomeScreen.css';
// import Navbar from './Navbar';

// function HomeScreen() {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Filter states
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [roomType, setRoomType] = useState('All');

//   const navigate = useNavigate();

//   // Fetch all rooms initially
//   const fetchRooms = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/properties');
//       if (!response.ok) throw new Error('Failed to fetch properties');
//       const data = await response.json();
//       setRooms(data);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'search') setSearchKeyword(value);
//     if (name === 'start-date') setStartDate(value);
//     if (name === 'end-date') setEndDate(value);
//     if (name === 'room-type') setRoomType(value);
//   };

//   const handleFindRooms = () => {
//     const filters = {
//       keyword: searchKeyword.trim(),
//       location: searchKeyword.trim(), // optional
//       startDate,
//       endDate,
//       roomType,
//     };

//     navigate('/filter-result', {
//       state: filters,
//     });
//   };

//   const handleResetFilters = () => {
//     setSearchKeyword('');
//     setStartDate('');
//     setEndDate('');
//     setRoomType('All');
//     fetchRooms();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="filter-bar">
//         <div className="filter-item">
//           <label htmlFor="search">Search Rooms (Name or Location)</label>
//           <input
//             id="search"
//             type="text"
//             name="search"
//             placeholder="Search by name or location"
//             value={searchKeyword}
//             onChange={handleFilterChange}
//           />
//         </div>

//         <div className="filter-item">
//           <label htmlFor="start-date">Start Date</label>
//           <input
//             id="start-date"
//             type="date"
//             name="start-date"
//             value={startDate}
//             onChange={handleFilterChange}
//           />
//         </div>

//         <div className="filter-item">
//           <label htmlFor="end-date">End Date</label>
//           <input
//             id="end-date"
//             type="date"
//             name="end-date"
//             value={endDate}
//             onChange={handleFilterChange}
//           />
//         </div>

//         <div className="filter-item">
//           <label htmlFor="room-type">Room Type</label>
//           <select
//             id="room-type"
//             name="room-type"
//             value={roomType}
//             onChange={handleFilterChange}
//           >
//             <option value="All">All</option>
//             <option value="Deluxe">Hostel</option>
//             <option value="Non-Deluxe">Hotel</option>
//             <option value="Non-Deluxe">Home</option>
//           </select>
//         </div>

//         <button className="filter-btn" onClick={handleFindRooms}>Find Rooms</button>
//         <button className="reset-btn" onClick={handleResetFilters}>Reset Filters</button>
//       </div>

//       {/* Properties Grid */}
//       <div className="properties-grid">
//         {loading && <p>Loading rooms...</p>}
//         {error && <p className="error">{error}</p>}
//         {!loading && rooms.length === 0 && <p>No rooms available.</p>}
//         {!loading && rooms.map((room) => (
//           <div key={room.id} className="room-card">
//             <img
//               src={`http://localhost:5000/uploads/${room.images?.[0] || 'default.jpg'}`}
//               alt={room.name}
//               className="room-image"
//             />
//             <div className="room-details">
//               <h3>{room.name}</h3>
//               <p>{room.location}</p>
//               <p><strong>Rent:</strong> {room.rent} ({room.rent_type})</p>
//               <p><strong>Available From:</strong> {new Date(room.available_from).toLocaleDateString()}</p>
//               <p><strong>Type:</strong> {room.property_type}</p>
//               <div className="card-btn">
//                 <button
//                   className="details-btn"
//                   onClick={() => navigate('/property_details', { state: { property: room } })}
//                 >
//                   View Details
//                 </button>
//                 <button
//                   className="details-btn"
//                   onClick={() => navigate('/bookingform', { state: { property: room } })}
//                 >
//                   Book Now
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default HomeScreen;

























import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';
import Navbar from './Navbar';

function HomeScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filter states
  const [searchKeyword, setSearchKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomType, setRoomType] = useState('All');

  const navigate = useNavigate();

  // Fetch all rooms on load
  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/properties');
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      setRooms(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'search') setSearchKeyword(value);
    if (name === 'start-date') setStartDate(value);
    if (name === 'end-date') setEndDate(value);
    if (name === 'room-type') setRoomType(value);
  };

  const handleFindRooms = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();

      if (searchKeyword) {
        queryParams.append('keyword', searchKeyword.trim());
        queryParams.append('location', searchKeyword.trim()); // optional for your backend
      }

      if (startDate && endDate) {
        queryParams.append('startDate', startDate);
        queryParams.append('endDate', endDate);
      }

      if (roomType && roomType !== 'All') {
        queryParams.append('roomType', roomType);
      }

      const response = await fetch(`http://localhost:5000/api/properties/search?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch filtered properties');

      const data = await response.json();
      setRooms(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetFilters = () => {
    setSearchKeyword('');
    setStartDate('');
    setEndDate('');
    setRoomType('All');
    fetchRooms();
  };

  const roomTypeOptions = ['All', 'Hostel', 'Hotel', 'Home'];

  return (
    <>
      <Navbar />
      <div className="filter-bar">
        <div className="filter-item">
          <label htmlFor="search">Search Rooms (Name or Location)</label>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search by name or location"
            value={searchKeyword}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-item">
          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            name="start-date"
            value={startDate}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-item">
          <label htmlFor="end-date">End Date</label>
          <input
            id="end-date"
            type="date"
            name="end-date"
            value={endDate}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-item">
          <label htmlFor="room-type">Room Type</label>
          <select
            id="room-type"
            name="room-type"
            value={roomType}
            onChange={handleFilterChange}
          >
            {roomTypeOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <button className="filter-btn" onClick={handleFindRooms}>Find Rooms</button>
        <button className="reset-btn" onClick={handleResetFilters}>Reset Filters</button>
      </div>

      <div className="properties-grid">
        {loading && <p>Loading rooms...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && rooms.length === 0 && <p>No rooms available.</p>}
        {!loading && rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img
              src={`http://localhost:5000/uploads/${room.images?.[0] || 'default.jpg'}`}
              alt={room.name}
              className="room-image"
            />
            <div className="room-details">
              <h3>{room.name}</h3>
              <p>{room.location}</p>
              <p><strong>Rent:</strong> {room.rent} ({room.rent_type})</p>
              <p><strong>Available From:</strong> {new Date(room.available_from).toLocaleDateString()}</p>
              <p><strong>Type:</strong> {room.property_type}</p>
              <div className="card-btn">
                <button
                  className="details-btn"
                  onClick={() => navigate('/property_details', { state: { property: room } })}
                >
                  View Details
                </button>
                <button
                  className="details-btn"
                  onClick={() => navigate('/bookingform', { state: { property: room } })}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
