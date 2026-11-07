import { Navigate } from 'react-router-dom';

/** Booking now lives on the Lodge page. */
export default function BookRoomNow() {
  return <Navigate to="/lodge#book-room" replace />;
}
