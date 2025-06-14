// import propertyModel from '../models/propertyModel.js';
// import propertyImageModel from '../models/propertyImageModel.js';

// const createProperty = async (req, res) => {
//   const {
//     propertyName,
//     location,
//     description,
//     rent,
//     rent_type,
//     propertyType,
//     available_from,
//     available_to,
//     latitude,
//     longitude
//   } = req.body;

//   const owner_id = req.user.id;
//   const images = req.files || [];

//   try {
//     // Creating the property
//     const result = await propertyModel.createProperty(
//       owner_id,
//       propertyName,
//       description,
//       location,
//       rent,
//       rent_type,
//       propertyType,
//       available_from,
//       available_to,
//       latitude || null,  // latitude can be null if not provided
//       longitude || null  // longitude can be null if not provided
//     );

//     // If images are provided, add them to the property
//     for (let file of images) {
//       await propertyImageModel.addPropertyImage(result.insertId, file.filename);
//     }

//     res.status(201).json({
//       message: 'Property listed successfully',
//       propertyId: result.insertId,
//       images: images.map(file => file.filename)  // Return the image filenames
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'Error listing property',
//       error: error.message
//     });
//   }
// };

// const getFilteredProperties = async (req, res) => {
//   const { name, location } = req.query;  // Extract name and location from query params

//   try {
//     // Build the query dynamically based on provided filters
//     const properties = await propertyModel.getFilteredProperties(name, location);

//     // Add images for each property
//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }

//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };


// // Get property images for a specific property
// const getPropertyImages = async (propertyId) => {
//   try {
//     const images = await propertyImageModel.getImagesByPropertyId(propertyId);
//     return images.map(row => row.image_url);
//   } catch (error) {
//     throw new Error('Error fetching property images');
//   }
// };

// // Get properties by owner
// const getPropertiesByOwner = async (req, res) => {
//   const owner_id = req.user.id;
//   try {
//     const properties = await propertyModel.getPropertiesByOwner(owner_id);
//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };

// // Get all available properties
// const getAllProperties = async (req, res) => {
//   try {
//     const properties = await propertyModel.getAllProperties();
//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };

// export default { createProperty, getPropertiesByOwner, getAllProperties, getFilteredProperties };





























// import propertyModel from '../models/propertyModel.js';
// import propertyImageModel from '../models/propertyImageModel.js';

// // Create new property listing
// const createProperty = async (req, res) => {
//   const {
//     propertyName,
//     location,
//     description,
//     rent,
//     rent_type,
//     propertyType,
//     available_from,
//     available_to,
//     latitude,
//     longitude
//   } = req.body;

//   const owner_id = req.user.id;
//   const images = req.files || [];

//   try {
//     const result = await propertyModel.createProperty(
//       owner_id,
//       propertyName,
//       description,
//       location,
//       rent,
//       rent_type,
//       propertyType,
//       available_from,
//       available_to,
//       latitude || null,
//       longitude || null
//     );

//     for (let file of images) {
//       await propertyImageModel.addPropertyImage(result.insertId, file.filename);
//     }

//     res.status(201).json({
//       message: 'Property listed successfully',
//       propertyId: result.insertId,
//       images: images.map(file => file.filename)
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'Error listing property',
//       error: error.message
//     });
//   }
// };

// // ✅ Updated: Get filtered properties
// // const getFilteredProperties = async (req, res) => {
// //   const {
// //     keyword,
// //     location,
// //     startDate,
// //     endDate,
// //     roomType
// //   } = req.query;

// //   const filters = {
// //     keyword,
// //     location,
// //     startDate,
// //     endDate,
// //     roomType
// //   };

// //   try {
// //     const properties = await propertyModel.getFilteredProperties(filters);

// //     for (let property of properties) {
// //       property.images = await getPropertyImages(property.id);
// //     }

// //     res.status(200).json(properties);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching properties', error: error.message });
// //   }
// // };





// const getFilteredProperties = async (req, res) => {
//   const {
//     keyword,       // name search
//     location,
//     startDate,
//     endDate,
//     roomType       // property_type filter
//   } = req.query;

//   try {
//     const filters = {
//       keyword,
//       location,
//       startDate,
//       endDate,
//       roomType
//     };

//     const properties = await propertyModel.getFilteredProperties(filters);

//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }

//     res.status(200).json(properties);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };

// const getPropertyImages = async (propertyId) => {
//   try {
//     const images = await propertyImageModel.getImagesByPropertyId(propertyId);
//     return images.map(row => row.image_url);
//   } catch (error) {
//     throw new Error('Error fetching property images');
//   }
// };

// const getPropertiesByOwner = async (req, res) => {
//   const owner_id = req.user.id;
//   try {
//     const properties = await propertyModel.getPropertiesByOwner(owner_id);
//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };

// const getAllProperties = async (req, res) => {
//   try {
//     const properties = await propertyModel.getAllProperties();
//     for (let property of properties) {
//       property.images = await getPropertyImages(property.id);
//     }
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching properties', error: error.message });
//   }
// };

// export default {
//   createProperty,
//   getPropertiesByOwner,
//   getAllProperties,
//   getFilteredProperties
// };

















import propertyModel from '../models/propertyModel.js';
import propertyImageModel from '../models/propertyImageModel.js';

const createProperty = async (req, res) => {
  const {
    propertyName,
    location,
    description,
    rent,
    rent_type,
    propertyType,
    available_from,
    available_to,
    latitude,
    longitude
  } = req.body;

  const owner_id = req.user.id;
  const images = req.files || [];

  try {
    const result = await propertyModel.createProperty(
      owner_id,
      propertyName,
      description,
      location,
      rent,
      rent_type,
      propertyType,
      available_from,
      available_to,
      latitude || null,
      longitude || null
    );

    for (let file of images) {
      await propertyImageModel.addPropertyImage(result.insertId, file.filename);
    }

    res.status(201).json({
      message: 'Property listed successfully',
      propertyId: result.insertId,
      images: images.map(file => file.filename)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error listing property',
      error: error.message
    });
  }
};

// ✅ Enhanced filter controller using keyword (searches name, description, location)
const getFilteredProperties = async (req, res) => {
  const {
    keyword,
    startDate,
    endDate,
    roomType
  } = req.query;

  try {
    const filters = {
      keyword,
      startDate,
      endDate,
      roomType
    };

    const properties = await propertyModel.getFilteredProperties(filters);

    for (let property of properties) {
      property.images = await getPropertyImages(property.id);
    }

    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};

const getPropertyImages = async (propertyId) => {
  try {
    const images = await propertyImageModel.getImagesByPropertyId(propertyId);
    return images.map(row => row.image_url);
  } catch (error) {
    throw new Error('Error fetching property images');
  }
};

const getPropertiesByOwner = async (req, res) => {
  const owner_id = req.user.id;
  try {
    const properties = await propertyModel.getPropertiesByOwner(owner_id);
    for (let property of properties) {
      property.images = await getPropertyImages(property.id);
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await propertyModel.getAllProperties();
    for (let property of properties) {
      property.images = await getPropertyImages(property.id);
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};

export default {
  createProperty,
  getPropertiesByOwner,
  getAllProperties,
  getFilteredProperties
};
