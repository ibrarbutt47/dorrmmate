import React, { useEffect, useState } from 'react';
import './MyBookings.css';
import Navbar from './Navbar';
import { data } from 'react-router-dom';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchMyBookings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bookings/my', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    setBookings(data);
                } else {
                    console.error('Failed to fetch bookings:', data.message);
                }
            } catch (err) {
                console.error('Error:', err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMyBookings();
    }, [token]);

    if (loading) return <p>Loading your bookings...</p>;
    return (
        <>
            <Navbar />
            <div className="my-bookings-container">
                <h2>My Bookings</h2>
                {bookings.length === 0 ? (
                    <p>You have no bookings yet.</p>
                ) : (
                    <table className="bookings-table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Property Name</th>
                                <th>Location</th>
                                <th>Booking Dates</th>
                                <th>Persons</th>
                                <th>Rooms</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.property_name}</td>
                                    <td>{booking.location}</td>
                                    <td>
                                        {new Date(booking.start_date).toLocaleDateString()} to{' '}
                                        {new Date(booking.end_date).toLocaleDateString()}
                                    </td>
                                    <td>{booking.num_persons}</td>
                                    <td>{booking.num_rooms}</td>
                                    <td>
                                        {booking.booking_status === 'pending' ? (
                                            <span className="status-pending">Pending</span>
                                        ) : booking.booking_status === 'confirmed' ? (
                                            <span className="status-confirmed">Confirmed</span>
                                        ) : (
                                            <span className="status-cancelled">Cancelled</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default MyBookings;
