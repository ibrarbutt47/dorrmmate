// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: ''
//   });
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/properties/list',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="propertyName"
//             placeholder="Property Name"
//             value={formData.propertyName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <select
//             name="rent_type"
//             value={formData.rent_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select
//             name="propertyType"
//             value={formData.propertyType}
//             onChange={handleChange}
//             required
//           >
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input
//               type="date"
//               name="available_from"
//               value={formData.available_from}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Available To:
//             <input
//               type="date"
//               name="available_to"
//               value={formData.available_to}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Contact Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="number"
//             name="rent"
//             placeholder="Rent Amount"
//             value={formData.rent}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Property Description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="5"
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';

// // React Leaflet imports
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default icon issues with Leaflet in React (optional but recommended)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// function LocationMarker({ position, setPosition }) {
//   // Allow user to click on map to set marker
//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//     }
//   });

//   return position === null ? null : (
//     <Marker position={position}></Marker>
//   );
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   // position stores lat/lng from map picker
//   const [position, setPosition] = useState(null);

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     // Append latitude and longitude from map picker (or null)
//     if (position) {
//       data.append('latitude', position.lat);
//       data.append('longitude', position.lng);
//     } else {
//       data.append('latitude', '');
//       data.append('longitude', '');
//     }

//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/properties/list',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="propertyName"
//             placeholder="Property Name"
//             value={formData.propertyName}
//             onChange={handleChange}
//             required
//           />

//           {/* Location manual input */}
//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (manual entry)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           {/* Map picker for location */}
//           <div style={{ height: '300px', marginBottom: '20px' }}>
//             <MapContainer
//               center={[31.582045, 74.329376]} // Default center (Lahore, Pakistan)
//               zoom={13}
//               scrollWheelZoom={true}
//               style={{ height: '100%', width: '100%' }}
//             >
//               <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <LocationMarker position={position} setPosition={setPosition} />
//             </MapContainer>
//           </div>

//           {/* Show selected lat/lng */}
//           <div>
//             <strong>Selected Location:</strong>{' '}
//             {position
//               ? `Latitude: ${position.lat.toFixed(5)}, Longitude: ${position.lng.toFixed(5)}`
//               : 'None'}
//           </div>

//           <select
//             name="rent_type"
//             value={formData.rent_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select
//             name="propertyType"
//             value={formData.propertyType}
//             onChange={handleChange}
//             required
//           >
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input
//               type="date"
//               name="available_from"
//               value={formData.available_from}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Available To:
//             <input
//               type="date"
//               name="available_to"
//               value={formData.available_to}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Contact Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="number"
//             name="rent"
//             placeholder="Rent Amount"
//             value={formData.rent}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Property Description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="5"
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
























// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMapEvents,
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix icon issues with Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// function LocationMarker({ position, setPosition }) {
//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [position, setPosition] = useState(null);
//   const [mapCenter, setMapCenter] = useState([31.582045, 74.329376]); // default Lahore
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!position) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const coords = [pos.coords.latitude, pos.coords.longitude];
//           setPosition({ lat: coords[0], lng: coords[1] });
//           setMapCenter(coords);
//         },
//         (err) => {
//           console.error('Geolocation not allowed', err);
//         }
//       );
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     if (position) {
//       data.append('latitude', position.lat);
//       data.append('longitude', position.lng);
//     } else {
//       data.append('latitude', '');
//       data.append('longitude', '');
//     }

//     images.forEach((file) => data.append('images', file));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/properties/list',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       const msg =
//         err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form
//           className="rent-form"
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//         >
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="propertyName"
//             placeholder="Property Name"
//             value={formData.propertyName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (manual entry)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div style={{ height: '300px', marginBottom: '20px' }}>
//             <MapContainer
//               center={mapCenter}
//               zoom={13}
//               scrollWheelZoom={true}
//               style={{ height: '100%', width: '100%' }}
//             >
//               <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <LocationMarker position={position} setPosition={setPosition} />
//             </MapContainer>
//           </div>

//           <div>
//             <strong>Selected Location:</strong>{' '}
//             {position
//               ? `Latitude: ${position.lat.toFixed(5)}, Longitude: ${position.lng.toFixed(5)}`
//               : 'None'}
//           </div>

//           <select
//             name="rent_type"
//             value={formData.rent_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select
//             name="propertyType"
//             value={formData.propertyType}
//             onChange={handleChange}
//             required
//           >
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input
//               type="date"
//               name="available_from"
//               value={formData.available_from}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Available To:
//             <input
//               type="date"
//               name="available_to"
//               value={formData.available_to}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Contact Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="number"
//             name="rent"
//             placeholder="Rent Amount"
//             value={formData.rent}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Property Description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="5"
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }



















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const markerIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// function LocationSelector({ onLocationSelect }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       onLocationSelect(`${lat}, ${lng}`);
//     }
//   });
//   return null;
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [formVisible, setFormVisible] = useState(false);
//   const [markerPosition, setMarkerPosition] = useState(null);
//   const [formData, setFormData] = useState({
//     location: '',
//     propertyName: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: ''
//   });
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationFromMap = () => {
//     setShowMap(true);
//   };

//   const handleUseCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
//         setFormData(prev => ({ ...prev, location: coords }));
//         setMarkerPosition([position.coords.latitude, position.coords.longitude]);
//         setShowMap(false);
//         setFormVisible(true);
//       },
//       () => alert('Unable to retrieve your location')
//     );
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/properties/list',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMapLocationSelect = (coords) => {
//     setFormData(prev => ({ ...prev, location: coords }));
//     setMarkerPosition(coords.split(',').map(Number));
//     setShowMap(false);
//     setFormVisible(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         {!formVisible && (
//           <div className="location-prompt">
//             <h2>Enter Property Location</h2>
//             <input
//               type="text"
//               name="location"
//               placeholder="Location Address (or choose from map)"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//             <div className="map-buttons">
//               <button onClick={handleLocationFromMap}>Choose from Map</button>
//               <button onClick={handleUseCurrentLocation}>Use My Current Location</button>
//             </div>
//           </div>
//         )}

//         {showMap && (
//           <div className="map-modal">
//             <h3>Select Location on Map</h3>
//             <MapContainer
//               center={[30.3753, 69.3451]} // Default: Pakistan center
//               zoom={6}
//               style={{ height: '400px', width: '100%' }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <LocationSelector onLocationSelect={handleMapLocationSelect} />
//               {markerPosition && <Marker position={markerPosition} icon={markerIcon} />}
//             </MapContainer>
//             <button onClick={() => setShowMap(false)}>Cancel</button>
//           </div>
//         )}

//         {formVisible && (
//           <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//             <h2>Rent Your Property</h2>

//             {error && <div className="error">{error}</div>}
//             {loading && <div className="loading">Submitting...</div>}

//             <input
//               type="text"
//               name="propertyName"
//               placeholder="Property Name"
//               value={formData.propertyName}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="text"
//               name="location"
//               placeholder="Location Address"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               disabled
//             />

//             <select
//               name="rent_type"
//               value={formData.rent_type}
//               onChange={handleChange}
//               required
//             >
//               <option value="daily">Daily</option>
//               <option value="weekly">Weekly</option>
//               <option value="monthly">Monthly</option>
//             </select>

//             <select
//               name="propertyType"
//               value={formData.propertyType}
//               onChange={handleChange}
//               required
//             >
//               <option value="Hostel">Hostel</option>
//               <option value="Home">Home</option>
//               <option value="Room">Room</option>
//             </select>

//             <label>
//               Available From:
//               <input
//                 type="date"
//                 name="available_from"
//                 value={formData.available_from}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Available To:
//               <input
//                 type="date"
//                 name="available_to"
//                 value={formData.available_to}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Contact Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="number"
//               name="rent"
//               placeholder="Rent Amount"
//               value={formData.rent}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="file"
//               name="images"
//               accept="image/*"
//               multiple
//               onChange={handleImageChange}
//               required
//             />

//             <textarea
//               name="description"
//               placeholder="Property Description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="5"
//               required
//             />

//             <button type="submit" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit Your Request'}
//             </button>
//           </form>
//         )}
//       </div>
//     </>
//   );
// }



























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const markerIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// function LocationSelector({ onLocationSelect }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       onLocationSelect(`${lat}, ${lng}`);
//     }
//   });
//   return null;
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [formVisible, setFormVisible] = useState(false);
//   const [markerPosition, setMarkerPosition] = useState(null);
//   const [formData, setFormData] = useState({
//     location: '',
//     propertyName: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: ''
//   });
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationFromMap = () => {
//     setShowMap(true);
//   };

//   const handleUseCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
//         setFormData(prev => ({ ...prev, location: coords }));
//         setMarkerPosition([position.coords.latitude, position.coords.longitude]);
//         setShowMap(false);
//         setFormVisible(true);
//       },
//       () => alert('Unable to retrieve your location')
//     );
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/properties/list',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMapLocationSelect = (coords) => {
//     setFormData(prev => ({ ...prev, location: coords }));
//     setMarkerPosition(coords.split(',').map(Number));
//     setShowMap(false);
//     setFormVisible(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         {!formVisible && (
//           <div className="location-prompt">
//             <h2>Enter Property Location</h2>
//             <input
//               type="text"
//               name="location"
//               placeholder="Location Address (or choose from map)"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//             <div className="map-buttons">
//               <button onClick={handleLocationFromMap}>Choose from Map</button>
//               <button onClick={handleUseCurrentLocation}>Use My Current Location</button>
//             </div>
//           </div>
//         )}

//         {showMap && (
//           <div className="map-modal">
//             <h3>Select Location on Map</h3>
//             <MapContainer
//               center={[30.3753, 69.3451]} // Default: Pakistan center
//               zoom={6}
//               style={{ height: '400px', width: '100%' }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <LocationSelector onLocationSelect={handleMapLocationSelect} />
//               {markerPosition && <Marker position={markerPosition} icon={markerIcon} />}
//             </MapContainer>
//             <button onClick={() => setShowMap(false)}>Cancel</button>
//           </div>
//         )}

//         {formVisible && (
//           <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//             <h2>Rent Your Property</h2>

//             {error && <div className="error">{error}</div>}
//             {loading && <div className="loading">Submitting...</div>}

//             <input
//               type="text"
//               name="propertyName"
//               placeholder="Property Name"
//               value={formData.propertyName}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="text"
//               name="location"
//               placeholder="Location Address"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               disabled
//             />

//             <select
//               name="rent_type"
//               value={formData.rent_type}
//               onChange={handleChange}
//               required
//             >
//               <option value="daily">Daily</option>
//               <option value="weekly">Weekly</option>
//               <option value="monthly">Monthly</option>
//             </select>

//             <select
//               name="propertyType"
//               value={formData.propertyType}
//               onChange={handleChange}
//               required
//             >
//               <option value="Hostel">Hostel</option>
//               <option value="Home">Home</option>
//               <option value="Room">Room</option>
//             </select>

//             <label>
//               Available From:
//               <input
//                 type="date"
//                 name="available_from"
//                 value={formData.available_from}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Available To:
//               <input
//                 type="date"
//                 name="available_to"
//                 value={formData.available_to}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Contact Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="number"
//               name="rent"
//               placeholder="Rent Amount"
//               value={formData.rent}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="file"
//               name="images"
//               accept="image/*"
//               multiple
//               onChange={handleImageChange}
//               required
//             />

//             <textarea
//               name="description"
//               placeholder="Property Description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="5"
//               required
//             />

//             <button type="submit" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit Your Request'}
//             </button>
//           </form>
//         )}
//       </div>
//     </>
//   );
// }


























// // RentYourProperty.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for marker icon not displaying
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       setCoordinates(e.latlng);
//       setLocation(`${e.latlng.lat}, ${e.latlng.lng}`);
//     },
//   });
//   return null;
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>Remove Location</button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={[24.8607, 67.0011]} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector setCoordinates={setCoordinates} setLocation={value => setFormData(prev => ({ ...prev, location: value }))} />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }




























// // RentYourProperty.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for marker icon not displaying
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Component to handle manual map clicks
// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setCoordinates([lat, lng]);
//       setLocation(`${lat}, ${lng}`);
//     },
//   });
//   return null;
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);
//   const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Default to Karachi

//   // Auto-detect location when map is first opened
//   useEffect(() => {
//     if (showMap && !coordinates) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const { latitude, longitude } = position.coords;
//             setCoordinates([latitude, longitude]);
//             setMapCenter([latitude, longitude]);
//             setFormData(prev => ({
//               ...prev,
//               location: `${latitude}, ${longitude}`,
//             }));
//           },
//           error => {
//             console.error('Geolocation error:', error);
//             alert('Could not fetch your location. Please select manually.');
//           }
//         );
//       }
//     }
//   }, [showMap, coordinates]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>Remove Location</button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector
//                   setCoordinates={setCoordinates}
//                   setLocation={value =>
//                     setFormData(prev => ({ ...prev, location: value }))
//                   }
//                 />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


























// // RentYourProperty.js
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for marker icon not displaying
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Component to handle manual map clicks
// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setCoordinates([lat, lng]);
//       setLocation(`${lat}, ${lng}`);
//     },
//   });
//   return null;
// }

// // Component to add a locate-me button on the map
// function LocateControl({ setCoordinates, setLocation }) {
//   const map = useMapEvents({});

//   const handleClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         pos => {
//           const { latitude, longitude } = pos.coords;
//           const coords = [latitude, longitude];
//           map.setView(coords, 15);
//           setCoordinates(coords);
//           setLocation(`${latitude}, ${longitude}`);
//         },
//         err => {
//           alert('Unable to fetch your location.');
//           console.error(err);
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser.');
//     }
//   };

//   return (
//     <div className="map-locate-button" onClick={handleClick}>
//       📍
//     </div>
//   );
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);
//   const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Karachi default

//   // Auto-detect location when map is first opened
//   useEffect(() => {
//     if (showMap && !coordinates) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const { latitude, longitude } = position.coords;
//             setCoordinates([latitude, longitude]);
//             setMapCenter([latitude, longitude]);
//             setFormData(prev => ({
//               ...prev,
//               location: `${latitude}, ${longitude}`,
//             }));
//           },
//           error => {
//             console.error('Geolocation error:', error);
//             alert('Could not fetch your location. Please select manually.');
//           }
//         );
//       }
//     }
//   }, [showMap, coordinates]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>Remove Location</button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ position: 'relative', height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 <LocateControl
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }











// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for missing marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Map click handler
// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setCoordinates([lat, lng]);
//       setLocation(`${lat}, ${lng}`);
//     },
//   });
//   return null;
// }

// // Locate button
// function LocateControl({ setCoordinates, setLocation }) {
//   const map = useMapEvents({});

//   const handleClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         pos => {
//           const { latitude, longitude } = pos.coords;
//           const coords = [latitude, longitude];
//           setCoordinates(coords);
//           setLocation(`${latitude}, ${longitude}`);
//           map.setView(coords, 15);
//         },
//         err => {
//           alert('Unable to fetch your location.');
//           console.error(err);
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser.');
//     }
//   };

//   return (
//     <div className="map-locate-button" onClick={handleClick}>
//       📍
//     </div>
//   );
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);
//   const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Karachi default

//   // Detect location when map opens
//   useEffect(() => {
//     if (showMap && !coordinates) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const { latitude, longitude } = position.coords;
//             const coords = [latitude, longitude];
//             setCoordinates(coords);
//             setMapCenter(coords);
//             setFormData(prev => ({
//               ...prev,
//               location: `${latitude}, ${longitude}`,
//             }));
//           },
//           error => {
//             console.error('Geolocation error:', error);
//             alert('Could not fetch your location. Please select manually.');
//           }
//         );
//       }
//     }
//   }, [showMap, coordinates]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>
//                 Remove Location
//               </button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ position: 'relative', height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 <LocateControl
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }



















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix leaflet marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Select location by clicking on map
// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setCoordinates([lat, lng]);
//       setLocation(`${lat}, ${lng}`);
//     },
//   });
//   return null;
// }

// // Button to locate current position
// function LocateControl({ setCoordinates, setLocation }) {
//   const map = useMap();

//   const handleClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         pos => {
//           const { latitude, longitude } = pos.coords;
//           const coords = [latitude, longitude];
//           setCoordinates(coords);
//           setLocation(`${latitude}, ${longitude}`);
//           map.setView(coords, 15);
//         },
//         err => {
//           alert('Unable to fetch your location.');
//           console.error(err);
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser.');
//     }
//   };

//   return (
//     <div className="map-locate-button" onClick={handleClick} title="Locate Me">
//       📍
//     </div>
//   );
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);
//   const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Default Karachi

//   // Get current location on map open
//   useEffect(() => {
//     if (showMap && !coordinates) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const { latitude, longitude } = position.coords;
//             const coords = [latitude, longitude];
//             setCoordinates(coords);
//             setMapCenter(coords);
//             setFormData(prev => ({
//               ...prev,
//               location: `${latitude}, ${longitude}`,
//             }));
//           },
//           error => {
//             console.error('Geolocation error:', error);
//             alert('Could not fetch your location. Please select manually.');
//           }
//         );
//       }
//     }
//   }, [showMap]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>
//                 Remove Location
//               </button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ position: 'relative', height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 <LocateControl
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }






















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RentYourProperty.css';
// import Navbar from '../components/Navbar';
// import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix leaflet marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Reverse geocode helper
// const reverseGeocode = async (lat, lon, setLocation) => {
//   try {
//     const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
//     const data = await res.json();
//     const address = data.display_name || `${lat}, ${lon}`;
//     setLocation(address);
//   } catch (err) {
//     console.error('Reverse geocoding failed:', err);
//     setLocation(`${lat}, ${lon}`);
//   }
// };

// // Select location by clicking on map
// function LocationSelector({ setCoordinates, setLocation }) {
//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setCoordinates([lat, lng]);
//       reverseGeocode(lat, lng, setLocation);
//     },
//   });
//   return null;
// }

// // Button to locate current position
// function LocateControl({ setCoordinates, setLocation }) {
//   const map = useMap();

//   const handleClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async pos => {
//           const { latitude, longitude } = pos.coords;
//           const coords = [latitude, longitude];
//           setCoordinates(coords);
//           map.setView(coords, 15);
//           await reverseGeocode(latitude, longitude, setLocation);
//         },
//         err => {
//           alert('Unable to fetch your location.');
//           console.error(err);
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser.');
//     }
//   };

//   return (
//     <div className="map-locate-button" onClick={handleClick} title="Locate Me">
//       📍
//     </div>
//   );
// }

// export default function RentYourProperty() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     propertyName: '',
//     location: '',
//     rent: '',
//     rent_type: 'monthly',
//     propertyType: 'Hostel',
//     email: '',
//     phone: '',
//     description: '',
//     available_from: '',
//     available_to: '',
//   });

//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState(null);
//   const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Default Karachi

//   // Get current location on map open
//   useEffect(() => {
//     if (showMap && !coordinates) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async position => {
//             const { latitude, longitude } = position.coords;
//             const coords = [latitude, longitude];
//             setCoordinates(coords);
//             setMapCenter(coords);
//             await reverseGeocode(latitude, longitude, location =>
//               setFormData(prev => ({ ...prev, location }))
//             );
//           },
//           error => {
//             console.error('Geolocation error:', error);
//             alert('Could not fetch your location. Please select manually.');
//           }
//         );
//       }
//     }
//   }, [showMap]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = e => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleLocationRemove = () => {
//     setFormData(prev => ({ ...prev, location: '' }));
//     setCoordinates(null);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to list a property.');
//       setLoading(false);
//       return navigate('/login');
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     images.forEach(file => data.append('images', file));

//     try {
//       const res = await axios.post('http://localhost:5000/api/properties/list', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert(res.data.message);
//       navigate('/my-properties');
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.message || 'Error submitting property data!';
//       setError(msg);
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="rent-form-container">
//         <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
//           <h2>Rent Your Property</h2>

//           {error && <div className="error">{error}</div>}
//           {loading && <div className="loading">Submitting...</div>}

//           <input
//             type="text"
//             name="location"
//             placeholder="Location Address (or pick from map)"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />

//           <div className="map-buttons">
//             <button type="button" onClick={() => setShowMap(!showMap)}>
//               {showMap ? 'Hide Map' : 'Choose from Map'}
//             </button>
//             {formData.location && (
//               <button type="button" onClick={handleLocationRemove}>
//                 Remove Location
//               </button>
//             )}
//           </div>

//           {showMap && (
//             <div className="map-container" style={{ position: 'relative', height: '400px', marginBottom: '1rem' }}>
//               <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <LocationSelector
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 <LocateControl
//                   setCoordinates={setCoordinates}
//                   setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
//                 />
//                 {coordinates && <Marker position={coordinates} />}
//               </MapContainer>
//             </div>
//           )}

//           <input type="text" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} required />

//           <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>

//           <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
//             <option value="Hostel">Hostel</option>
//             <option value="Home">Home</option>
//             <option value="Room">Room</option>
//           </select>

//           <label>
//             Available From:
//             <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
//           </label>

//           <label>
//             Available To:
//             <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
//           </label>

//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
//           <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

//           <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

//           <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleChange} rows="5" required />

//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit Your Request'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }































































































































// this is fully working code but the wrong locaiton

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RentYourProperty.css';
import Navbar from '../components/Navbar';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Reverse geocode helper
const reverseGeocode = async (lat, lon, setLocation) => {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const data = await res.json();
    const address = data.display_name || `${lat}, ${lon}`;
    setLocation(address);
  } catch (err) {
    console.error('Reverse geocoding failed:', err);
    setLocation(`${lat}, ${lon}`);
  }
};

// Component to select location by clicking map
function LocationSelector({ setCoordinates, setLocation }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoordinates([lat, lng]);
      reverseGeocode(lat, lng, setLocation);
    },
  });
  return null;
}

// Button to locate current position
function LocateControl({ setCoordinates, setLocation }) {
  const map = useMap();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          const { latitude, longitude } = pos.coords;
          const coords = [latitude, longitude];
          setCoordinates(coords);
          map.setView(coords, 15);
          await reverseGeocode(latitude, longitude, setLocation);
        },
        err => {
          alert('Unable to fetch your location.');
          console.error(err);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="map-locate-button" onClick={handleClick} title="Locate Me">
      📍
    </div>
  );
}

export default function RentYourProperty() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyName: '',
    location: '',
    rent: '',
    rent_type: 'monthly',
    propertyType: 'Hostel',
    email: '',
    phone: '',
    description: '',
    available_from: '',
    available_to: '',
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [mapCenter, setMapCenter] = useState([24.8607, 67.0011]); // Default to Karachi

  // Get current location when map is shown
  useEffect(() => {
    if (showMap && !coordinates) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async position => {
            const { latitude, longitude } = position.coords;
            const coords = [latitude, longitude];
            setCoordinates(coords);
            setMapCenter(coords);
            await reverseGeocode(latitude, longitude, location =>
              setFormData(prev => ({ ...prev, location }))
            );
          },
          error => {
            console.error('Geolocation error:', error);
            alert('Could not fetch your location. Please select manually.');
          }
        );
      }
    }
  }, [showMap]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = e => {
    setImages(Array.from(e.target.files));
  };

  const handleLocationRemove = () => {
    setFormData(prev => ({ ...prev, location: '' }));
    setCoordinates(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to list a property.');
      setLoading(false);
      return navigate('/login');
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    images.forEach(file => data.append('images', file));

    try {
      const res = await axios.post('http://localhost:5000/api/properties/list', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.message);
      navigate('/my-properties');
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || 'Error submitting property data!';
      setError(msg);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="rent-form-container">
        <form className="rent-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Rent Your Property</h2>

          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">Submitting...</div>}

          <input
            type="text"
            name="location"
            placeholder="Location Address (or pick from map)"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <div className="map-buttons">
            <button type="button" onClick={() => setShowMap(!showMap)}>
              {showMap ? 'Hide Map' : 'Choose from Map'}
            </button>
            {formData.location && (
              <button type="button" onClick={handleLocationRemove}>
                Remove Location
              </button>
            )}
          </div>

          {showMap && (
            <div className="map-container" style={{ position: 'relative', height: '400px', marginBottom: '1rem' }}>
              <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationSelector
                  setCoordinates={setCoordinates}
                  setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
                />
                <LocateControl
                  setCoordinates={setCoordinates}
                  setLocation={value => setFormData(prev => ({ ...prev, location: value }))}
                />
                {coordinates && <Marker position={coordinates} />}
              </MapContainer>
            </div>
          )}

          <input
            type="text"
            name="propertyName"
            placeholder="Property Name"
            value={formData.propertyName}
            onChange={handleChange}
            required
          />

          <select name="rent_type" value={formData.rent_type} onChange={handleChange} required>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
            <option value="Hostel">Hostel</option>
            <option value="Home">Home</option>
            <option value="Room">Room</option>
          </select>

          <label>
            Available From:
            <input type="date" name="available_from" value={formData.available_from} onChange={handleChange} required />
          </label>

          <label>
            Available To:
            <input type="date" name="available_to" value={formData.available_to} onChange={handleChange} required />
          </label>

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
          <input type="number" name="rent" placeholder="Rent Amount" value={formData.rent} onChange={handleChange} required />

          <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} required />

          <textarea
            name="description"
            placeholder="Property Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Your Request'}
          </button>
        </form>
      </div>
    </>
  );
}
