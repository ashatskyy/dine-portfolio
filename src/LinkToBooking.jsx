import { Link } from "react-router-dom";

export const LinkToBooking = () => {
  return (
		// <div>{<Link to="/booking">BOOKING</Link>}</div>
		<Link to="/booking"><button className="book-a-table-button">BOOK A TABLE</button></Link>
  );
};
