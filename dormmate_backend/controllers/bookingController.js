// import { createBooking, createPayment, getBookingsByOwner, confirmBooking, rejectBooking } from '../models/bookingModel.js';

// export const declineBooking = async (req, res) => {
//   const { bookingId } = req.params;

//   try {
//     await rejectBooking(bookingId);
//     res.status(200).json({ message: 'Booking rejected' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to reject booking', error: error.message });
//   }
// };

// export const bookProperty = async (req, res) => {
//   const userId = req.user.id;
//   const { propertyId, startDate, endDate, numPersons, numRooms, amount, paymentMethod } = req.body;

//   if (!propertyId || !startDate || !endDate || !numPersons || !numRooms || !amount || !paymentMethod) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     const bookingId = await createBooking(userId, propertyId, startDate, endDate, numPersons, numRooms);
//     const paymentId = await createPayment(bookingId, amount, paymentMethod);

//     res.status(201).json({
//       message: 'Booking and payment successful',
//       bookingId,
//       paymentId,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Booking or payment failed', error: err.message });
//   }
// };

// export const fetchOwnerBookings = async (req, res) => {
//   const ownerId = req.user.id;
//   try {
//     const bookings = await getBookingsByOwner(ownerId);
//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
//   }
// };

// export const approveBooking = async (req, res) => {
//   const { bookingId } = req.params;

//   try {
//     await confirmBooking(bookingId);
//     res.status(200).json({ message: 'Booking confirmed' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to confirm booking', error: error.message });
//   }
// };

























import {
  createBooking,
  createPayment,
  getBookingsByOwner,
  confirmBooking,
  rejectBooking,
  getBookingsByUser,  // import new model method
} from '../models/bookingModel.js';

export const declineBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    await rejectBooking(bookingId);
    res.status(200).json({ message: 'Booking rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to reject booking', error: error.message });
  }
};

export const bookProperty = async (req, res) => {
  const userId = req.user.id;
  const { propertyId, startDate, endDate, numPersons, numRooms, amount, paymentMethod } = req.body;

  if (!propertyId || !startDate || !endDate || !numPersons || !numRooms || !amount || !paymentMethod) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const bookingId = await createBooking(userId, propertyId, startDate, endDate, numPersons, numRooms);
    const paymentId = await createPayment(bookingId, amount, paymentMethod);

    res.status(201).json({
      message: 'Booking and payment successful',
      bookingId,
      paymentId,
    });
  } catch (err) {
    res.status(500).json({ message: 'Booking or payment failed', error: err.message });
  }
};

export const fetchOwnerBookings = async (req, res) => {
  const ownerId = req.user.id;
  try {
    const bookings = await getBookingsByOwner(ownerId);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
  }
};

export const approveBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    await confirmBooking(bookingId);
    res.status(200).json({ message: 'Booking confirmed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to confirm booking', error: error.message });
  }
};

// New: Fetch bookings made by logged-in user (seeker)
export const fetchMyBookings = async (req, res) => {
  const userId = req.user.id;

  try {
    const bookings = await getBookingsByUser(userId);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch your bookings', error: error.message });
  }
};
