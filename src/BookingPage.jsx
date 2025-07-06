import { Link } from "react-router-dom";

import { Form } from "./Form";
import { Footer } from "./Footer";

export const BookingPage = () => {
  return (
    <>


      <BookingPageHeader />
      <DecorativeBookingSection />
      <Footer />
    </>
  );
};

const BookingPageHeader = () => {
  return (
		<header className="booking-header-container">
			<Form />
      <Link to="/" className="logo-link">
				<img className="logo" src="./images/dine.svg" alt="logo" />
				  </Link>
        <div className="booking-header-text-block">
          <h1 className="header-main-info-about-restaurant-home-pg-h1 booking-header-h1">Reservations</h1>
          <p className="header-main-appeal-p booking-header-p">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
   
    </header>
  );
};

const DecorativeBookingSection = () => {
  return (
    <section className="decorative-booking-section-container">
      <img
        className="pattern-lines pattern-lines-static-booking-pg"
        src="./images/pattern-lines.svg"
        alt="pattern lines"
      />
    </section>
  );
};
