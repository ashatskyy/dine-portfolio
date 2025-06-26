
import { Link } from "react-router-dom";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { LinkToBooking } from "./LinkToBooking";

export const SpecialEvents = () => {
	return (<>
	<Header LinkToBooking = {LinkToBooking} />
			<Main/>
		<nav>
      <Link to="/">Family Gathering</Link> |  
        <Link to="/special-events">Special Events</Link> |  
        <Link to="/social-events">Social Events</Link>
		</nav>
		<p>it is about Special Events {<Link to="/booking">BOOKING</Link> }</p>
<Footer/>
	</>)

};
