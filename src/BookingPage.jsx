import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Form } from "./Form";
import { Footer } from "./Footer";

export const BookingPage = () => {
  const [trigerDecorativeBookingSection, setTrigerDecorativeBookingSection] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.title = "Booking - dine.";
  }, []);

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      window.scrollTo({ top: scrollTarget });
    }
  }, [location.state]);

  return (
    <>
      <BookingPageHeader
        trigerDecorativeBookingSection={trigerDecorativeBookingSection}
        setTrigerDecorativeBookingSection={setTrigerDecorativeBookingSection}
      />
      <DecorativeBookingSection trigerDecorativeBookingSection={trigerDecorativeBookingSection} />
      <Footer />
    </>
  );
};

const BookingPageHeader = ({ trigerDecorativeBookingSection, setTrigerDecorativeBookingSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="booking-header-container">
      <Form setTrigerDecorativeBookingSection={setTrigerDecorativeBookingSection} />
      <Link to="/" className="logo-link" onClick={scrollToTop}>
        <img className="logo" src="./images/dine.svg" alt="logo" />
      </Link>
      {trigerDecorativeBookingSection && (
        <div className="booking-header-text-block">
          <h1 className="header-main-info-about-restaurant-home-pg-h1 booking-header-h1">Reservations</h1>
          <p className="header-main-appeal-p booking-header-p">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
      )}
    </header>
  );
};

const DecorativeBookingSection = ({ trigerDecorativeBookingSection }) => {
  return (
    trigerDecorativeBookingSection && (
      <section className="decorative-booking-section-container">
      <img
  className="pattern-lines pattern-lines-static-booking-pg"
  src="./images/pattern-lines.svg"
  alt=""
/>
      </section>
    )
  );
};
