import { Link } from "react-router-dom";

export const LinkToBooking = ({ transparentBackground }) => {
  return (
    <Link to="/booking">
      <button
        className={
          transparentBackground
            ? "book-a-table-button"
            : "book-a-table-button book-a-table-button-opaque-background"
        }
      >
        BOOK A TABLE
      </button>
    </Link>
  );
};
