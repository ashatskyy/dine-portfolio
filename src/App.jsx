import { HashRouter, Routes, Route} from "react-router-dom";

import { Header } from "./Header";
import { Main } from "./Main";

import { BookingPage } from "./BookingPage";
import { Footer } from "./Footer";

// import { LinkToBooking } from "./LinkToBooking";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </HashRouter>
  );
}

const Home = () => {
  return (
    <>
      {/* <Header LinkToBooking={LinkToBooking} /> */}
      <Header />

      <Main />
     
      {/* <nav>
        <Link to="/">Family Gathering</Link> |
        <Link to="/special-events">Special Events</Link> |
        <Link to="/social-events">Social Events</Link>
			</nav>
			
      <p>PIC</p>
      <p>are you not booking alredy? :</p>
      <LinkToBooking /> */}

      <Footer />
    </>
  );
};
