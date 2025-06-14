// import db from '../config/db.js';

// // Create Property
// const createProperty = (
//   owner_id, name, description, location,
//   rent, rent_type, property_type,
//   available_from, available_to, latitude, longitude
// ) => {
//   return new Promise((resolve, reject) => {
//     const query = `
//       INSERT INTO properties
//         (owner_id, name, description, location,
//          rent, rent_type, property_type,
//          available_from, available_to,
//          latitude, longitude)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
  
//     db.query(query, [
//       owner_id, name, description, location,
//       rent, rent_type, property_type,
//       available_from, available_to,
//       latitude, longitude
//     ], (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// // Get properties by owner
// const getPropertiesByOwner = (owner_id) => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT * FROM properties WHERE owner_id = ?';
//     db.query(query, [owner_id], (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// // Get all properties
// const getAllProperties = () => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT * FROM properties WHERE status = "available"';
//     db.query(query, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// // Get filtered properties
// const getFilteredProperties = (filters) => {
//   return new Promise((resolve, reject) => {
//     let query = 'SELECT * FROM properties WHERE 1=1';
//     const params = [];

//     if (filters.keyword) {
//       query += ' AND name LIKE ?';
//       params.push(`%${filters.keyword}%`);
//     }

//     if (filters.location) {
//       query += ' AND location LIKE ?';
//       params.push(`%${filters.location}%`);
//     }

//     if (filters.startDate && filters.endDate) {
//       query += ' AND available_from <= ? AND available_to >= ?';
//       params.push(filters.endDate, filters.startDate);
//     }

//     if (filters.roomType && filters.roomType !== 'All') {
//       query += ' AND property_type = ?';
//       params.push(filters.roomType);
//     }

//     db.query(query, params, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// export default { createProperty, getPropertiesByOwner, getAllProperties, getFilteredProperties };































// import db from '../config/db.js';

// const createProperty = (
//   owner_id, name, description, location,
//   rent, rent_type, property_type,
//   available_from, available_to, latitude, longitude
// ) => {
//   return new Promise((resolve, reject) => {
//     const query = `
//       INSERT INTO properties
//         (owner_id, name, description, location,
//          rent, rent_type, property_type,
//          available_from, available_to,
//          latitude, longitude)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
  
//     db.query(query, [
//       owner_id, name, description, location,
//       rent, rent_type, property_type,
//       available_from, available_to,
//       latitude, longitude
//     ], (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// const getPropertiesByOwner = (owner_id) => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT * FROM properties WHERE owner_id = ?';
//     db.query(query, [owner_id], (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// const getAllProperties = () => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT * FROM properties WHERE status = "available"';
//     db.query(query, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// // ✅ Updated: Accepts `filters` object and builds dynamic query
// // const getFilteredProperties = (filters) => {
// //   return new Promise((resolve, reject) => {
// //     let query = 'SELECT * FROM properties WHERE 1=1';
// //     const params = [];

// //     if (filters.keyword) {
// //       query += ' AND name LIKE ?';
// //       params.push(`%${filters.keyword}%`);
// //     }

// //     if (filters.location) {
// //       query += ' AND location LIKE ?';
// //       params.push(`%${filters.location}%`);
// //     }

// //     if (filters.startDate && filters.endDate) {
// //       query += ' AND available_from <= ? AND available_to >= ?';
// //       params.push(filters.endDate, filters.startDate);
// //     }

// //     if (filters.roomType && filters.roomType !== 'All') {
// //       query += ' AND property_type = ?';
// //       params.push(filters.roomType);
// //     }

// //     db.query(query, params, (err, result) => {
// //       if (err) return reject(err);
// //       resolve(result);
// //     });
// //   });
// // };






// const getFilteredProperties = (filters) => {
//   return new Promise((resolve, reject) => {
//     let query = 'SELECT * FROM properties WHERE status = "available"';
//     const params = [];

//     if (filters.keyword) {
//       query += ' AND name LIKE ?';
//       params.push(`%${filters.keyword}%`);
//     }

//     if (filters.location) {
//       query += ' AND location LIKE ?';
//       params.push(`%${filters.location}%`);
//     }

//     if (filters.startDate && filters.endDate) {
//       query += ' AND available_from <= ? AND available_to >= ?';
//       params.push(filters.endDate, filters.startDate);
//     }

//     if (filters.roomType && filters.roomType !== 'All') {
//       query += ' AND property_type = ?';
//       params.push(filters.roomType);
//     }

//     db.query(query, params, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };

// export default {
//   createProperty,
//   getPropertiesByOwner,
//   getAllProperties,
//   getFilteredProperties
// };



















import db from '../config/db.js';

const createProperty = (
  owner_id, name, description, location,
  rent, rent_type, property_type,
  available_from, available_to, latitude, longitude
) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO properties
        (owner_id, name, description, location,
         rent, rent_type, property_type,
         available_from, available_to,
         latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
      owner_id, name, description, location,
      rent, rent_type, property_type,
      available_from, available_to,
      latitude, longitude
    ], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getPropertiesByOwner = (owner_id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM properties WHERE owner_id = ?';
    db.query(query, [owner_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getAllProperties = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM properties WHERE status = "available"';
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// ✅ Enhanced filter: keyword can match name, description, or location
const getFilteredProperties = (filters) => {
  return new Promise((resolve, reject) => {
    let query = 'SELECT * FROM properties WHERE status = "available"';
    const params = [];

    if (filters.keyword) {
      query += ` AND (name LIKE ? OR description LIKE ? OR location LIKE ?)`;
      const keywordLike = `%${filters.keyword}%`;
      params.push(keywordLike, keywordLike, keywordLike);
    }

    if (filters.startDate && filters.endDate) {
      query += ' AND available_from <= ? AND available_to >= ?';
      params.push(filters.endDate, filters.startDate);
    }

    if (filters.roomType && filters.roomType !== 'All') {
      query += ' AND property_type = ?';
      params.push(filters.roomType);
    }

    db.query(query, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export default {
  createProperty,
  getPropertiesByOwner,
  getAllProperties,
  getFilteredProperties
};
