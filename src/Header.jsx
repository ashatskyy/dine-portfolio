import { Link } from "react-router-dom";
import { LinkToBooking } from "./LinkToBooking";

// export const Header = ({ LinkToBooking }) => {
export const Header = () => {
  // export const Header = () => {
  return (
		// <header className="header-container">
		
	<header className="header-body">
		
    <div className="header-container">
      {/* <p style={{ color: "white" }}>TEST P</p> */}

			<div className="header-logo-info-block">
				
					{/* <Link to="/" className="logo-link"> */}
					<div className="logo-link">
					<img className="logo" src="./images/dine.svg" alt="logo" />
					</div>
        {/* </Link> */}
        <div className="header-info">
          <h1 className="header-main-info-about-restaurant-home-pg-h1">
            Exquisite dining since 1989
          </h1>
           <p className="header-main-appeal-p">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          {/* {LinkToBooking && <LinkToBooking />}  */}
          {<LinkToBooking transparentBackground={true}/>} 
				</div>  
				
      </div>
		</div>
</header>
		
  );
};
