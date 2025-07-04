import { AboutInfoSection } from "./AboutInfoSection";
import { FoodInfoSection } from "./FoodInfoSection";
import { EventsInfoSection } from "./EventsInfoSection";

import { ReservationSection } from "./ReservationSection";

export const Main = () => {
  return (
    <>
      <AboutInfoSection />
      <FoodInfoSection />
			<EventsInfoSection />
			<ReservationSection />
    </>
  );
};
