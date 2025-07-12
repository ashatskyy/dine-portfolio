import { Link } from "react-router-dom";

export const LinkToBooking = ({ transparentBackground }) => {
// 	const scrollToTop = () => {

//   window.scrollTo({ top: 240 });
// };
  return (
    <Link to="/booking"  state={{ scrollTo: 240 }}>
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
