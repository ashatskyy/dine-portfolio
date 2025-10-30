import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { Header } from "./Header";
import { Main } from "./Main";
import { BookingPage } from "./BookingPage";
import { Footer } from "./Footer";

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
  useEffect(() => {
    document.title = "dine – Fine Dining in Cumbria. Portfolio by Oleksandr S";
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
