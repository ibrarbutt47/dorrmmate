// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './PropertyDetails..css'
// function PropertyDetails() {
//   const { state } = useLocation();
//   const property = state?.property;
//   const navigate = useNavigate();

//   if (!property) return <p>No property details found.</p>;

//   return (
//     <div className="property-details-container">
//       <div className="property-header">
//         <h2>{property.name}</h2>
//         <button className="close-btn" onClick={() => navigate(-1)}>✖</button>
//       </div>

//       {/* Image Banner/Carousel */}
//       <div className="image-banner">
//         {property.images?.map((img, index) => (
//           <img key={index} src={img.url} alt={`Slide ${index}`} className="banner-image" />
//         ))}
//       </div>

//       <div className="property-info">
//         <p><strong>Address:</strong> {property.address}</p>
//         <p><strong>Max Guests:</strong> {property.max_count}</p>
//         <p><strong>Phone Number:</strong> {property.phone_number}</p>
//         <p><strong>Type:</strong> {property.type}</p>
//         <p><strong>Features:</strong> Parking, Reception, Free Wifi</p>
//       </div>
//     </div>
//   );
// }

// export default PropertyDetails;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PropertyDetails.css';
function PropertyDetails() {
  const { state } = useLocation();
  const property = state?.property;
  const navigate = useNavigate();

  if (!property) return <p>No property details found.</p>;

  // Helper to extract filename if needed
  const getImageName = (path) => path?.split('/').pop();

  return (
    <div className="property-details-container">
      <div className="property-header">
        <h2>{property.name}</h2>
        <button className="close-btn" onClick={() => navigate(-1)}>✖</button>
      </div>

      {/* Image Banner */}
      <div className="image-banner">
        {property.images?.map((img, index) => (
          <img
            key={index}
            src={`http://localhost:5000/uploads/${getImageName(img)}`}
            alt={`Slide ${index}`}
            className="banner-image"
          />
        ))}
      </div>

      <div className="property-info">
        <p><strong>Address:</strong> {property.address}</p>
        <p><strong>Max Guests:</strong> {property.max_count}</p>
        <p><strong>Phone Number:</strong> {property.phone_number}</p>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Features:</strong> Parking, Reception, Free Wifi</p>
      </div>
    </div>
  );
}

export default PropertyDetails;
