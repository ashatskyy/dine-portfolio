import { Link } from "react-router-dom";

export const Footer = () => {
	const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <section className="footer">
      <div className="footer-main-container">
        <Link to="/" className="logo-link" onClick={scrollToTop}>
          <img className="logo" src="./images/dine.svg" alt="logo" />
				</Link>
				
				<div className="footer-info-container">
					
          <div className="footer-address-container">
            MARTHWAITE, SEDBERGH
            <br />
            CUMBRIA
            <br />
            +00 44 123 4567
          </div>
          <div className="footer-open-times-container">
            OPEN TIMES
            <br /> MON - FRI: 09:00 AM - 10:00 PM
            <br /> SAT - SUN: 09:00 AM - 11:30 PM
          </div>
				</div>
				
		</div> 
		
    </section>
  );
};
