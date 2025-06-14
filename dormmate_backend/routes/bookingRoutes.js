// import express from 'express';
// import verifyToken from '../middleware/authMiddleware.js';
// import {
//   bookProperty,
//   fetchOwnerBookings,
//   approveBooking,
//   declineBooking
// } from '../controllers/bookingController.js';

// const router = express.Router();

// router.post('/book', verifyToken, bookProperty); // Seeker books
// router.get('/owner', verifyToken, fetchOwnerBookings); // Owner sees bookings
// router.put('/confirm/:bookingId', verifyToken, approveBooking); // Owner confirms
// router.put('/confirm/:bookingId', verifyToken, approveBooking); // Approve
// router.put('/reject/:bookingId', verifyToken, declineBooking);  // Reject
// export default router;









import express from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {
  bookProperty,
  fetchOwnerBookings,
  approveBooking,
  declineBooking,
  fetchMyBookings,  // import new controller
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/book', verifyToken, bookProperty);              // Seeker books
router.get('/owner', verifyToken, fetchOwnerBookings);        // Owner sees bookings
router.put('/confirm/:bookingId', verifyToken, approveBooking); // Owner confirms
router.put('/reject/:bookingId', verifyToken, declineBooking); // Owner rejects

// New route: Get bookings made by logged-in user
router.get('/my', verifyToken, fetchMyBookings);

export default router;
