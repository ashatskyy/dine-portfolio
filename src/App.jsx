import { HashRouter, Routes, Route, Link } from "react-router-dom";

import { Header } from "./Header";
import { Main } from "./Main";

import { Booking } from "./Booking";
import { Footer } from "./Footer";
import { SpecialEvents } from "./SpecialEvents";
import { SocialEvents } from "./SocialEvents";
import { LinkToBooking } from "./LinkToBooking";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="/social-events" element={<SocialEvents />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </HashRouter>
  );
}

const Home = () => {
  return (
    <>
      <Header LinkToBooking={LinkToBooking} />
      {/* <Header /> */}

      <Main />
     
      <nav>
        <Link to="/">Family Gathering</Link> |
        <Link to="/special-events">Special Events</Link> |
        <Link to="/social-events">Social Events</Link>
      </nav>
      <p>PIC</p>
      <p>are you not booking alredy? :</p>
      <LinkToBooking />

      <Footer />
    </>
  );
};
