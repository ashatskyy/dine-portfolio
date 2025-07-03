import { AboutInfoSection } from "./AboutInfoSection";
import { FoodInfoSection } from "./FoodInfoSection";
import { EventsInfoSection } from "./EventsInfoSection";
import { CallToActionSection } from "./CallToActionSection";

export const Main = () => {
  return (
    <>
      <AboutInfoSection />
      <FoodInfoSection />
			<EventsInfoSection />
			<CallToActionSection/>
    </>
  );
};
