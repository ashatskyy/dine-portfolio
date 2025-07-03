import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Booking = () => {
  return (
    <>
      <div style={{ background: "black" }}>
        <Link to="/" className="logo-link">
          <img className="logo" src="./images/dine.svg" alt="logo" />
        </Link>
      </div>
      <p>WILL BE SPACIAL HEADER</p>

      <p>!!! HERE YOU CAN BOOOKING !!!</p>

      <BookingForm />

      <Footer />
    </>
  );
};

const BookingForm = () => {
  return (
    <div className="form-cont">
      <form action="">
        <input type="text" className="input_name" />
      </form>
    </div>
  );
};
