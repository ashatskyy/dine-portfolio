import { useState } from "react";
import { LinkToBooking } from "./LinkToBooking";

export const EventsInfoSection = () => {
  const [activeSection, setActiveSection] = useState("Family Gathering");

  return (
    <section className="events-section">
      <img
        className="pattern-lines pattern-lines-events-section"
        src="./images/pattern-lines.svg"
        alt="pattern lines"
      />
      {activeSection === "Family Gathering" && (
        <FamilyGathering setActiveSection={setActiveSection} />
      )}
      {activeSection === "Special Events" && (
        <SpecialEvents setActiveSection={setActiveSection} />
      )}
      {activeSection === "Social Events" && (
        <SocialEvents setActiveSection={setActiveSection} />
      )}
    </section>
  );
};

function FamilyGathering({ setActiveSection }) {
  return (
    <div className="events-info-container">
      <div className="events-picture-container">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="./images/family-gathering-mobile.jpg 1x, ./images/family-gathering-mobile@2x.jpg 2x"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="./images/family-gathering-tablet.jpg 1x, ./images/family-gathering-tablet@2x.jpg 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="./images/family-gathering-desktop.jpg 1x, ./images/family-gathering-desktop@2x.jpg 2x"
          />
          <img
            className="event-picture"
            src="./images/family-gathering-desktop.jpg"
            alt="Family enjoying a meal together at the table"
          />
        </picture>
        <hr className="decorative-horizontal-line decorative-horizontal-line-for-events-section-famaly" />
      </div>

      <div className="events-info-text-booking-nav-container">
        <div className="events-info-text-booking-container-part">
          <h2 className="about-info-section-txt-block-h2 events-section-h2">
            Family Gathering
          </h2>
          <p className="about-info-section-txt-block-p events-section-p">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            <br className="event-mobile-br" />
            experience for all.
          </p>
          <LinkToBooking />
        </div>
        <div className="events-info-nav-container-part">
          <Navigation
            setActiveSection={setActiveSection}
            activeSection={"Family Gathering"}
          />
        </div>
      </div>
    </div>
  );
}

function SpecialEvents({ setActiveSection }) {
  return (
    <div className="events-info-container">
      <div className="events-picture-container">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="./images/special-events-mobile.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="./images/special-events-tablet.jpg"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="./images/special-events-desktop.jpg"
          />
          <img
            className="event-picture"
            src="./images/special-events-desktop.jpg"
            alt="Delicious beef served on a plate"
          />
        </picture>
        <hr className="decorative-horizontal-line decorative-horizontal-line-for-events-section-special" />
      </div>

      <div className="events-info-text-booking-nav-container">
        <div className="events-info-text-booking-container-part">
          <h2 className="about-info-section-txt-block-h2 events-section-h2">
            Special Events
          </h2>
          <p className="about-info-section-txt-block-p events-section-p events-section-p-small-buttom-margin-one">
            Whether it’s a romantic dinner or special date you’re celebrating
            with others, we’ll look after you. We’ll be sure to mark your special
            date with an unforgettable meal.
          </p>
          <LinkToBooking />
        </div>
        <div className="events-info-nav-container-part">
          <Navigation
            setActiveSection={setActiveSection}
            activeSection={"Special Events"}
          />
        </div>
      </div>
    </div>
  );
}

function SocialEvents({ setActiveSection }) {
  return (
    <div className="events-info-container">
      <div className="events-picture-container">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="./images/social-events-mobile.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="./images/social-events-tablet.jpg"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="./images/social-events-desktop.jpg"
          />
          <img
            className="event-picture"
            src="./images/social-events-desktop.jpg"
            alt="Guests enjoying a lively social event"
          />
        </picture>
        <hr className="decorative-horizontal-line decorative-horizontal-line-for-events-section-social" />
      </div>

      <div className="events-info-text-booking-nav-container">
        <div className="events-info-text-booking-container-part">
          <h2 className="about-info-section-txt-block-h2 events-section-h2">
            Social Events
          </h2>
          <p className="about-info-section-txt-block-p events-section-p events-section-p-small-buttom-margin-two">
            Are you looking to have a larger social event? <br className="event-mobile-br" />
            No problem! We’re more than happy to cater for big parties. We’ll work with you to
            make your event a hit with everyone.
          </p>
          <LinkToBooking />
        </div>
        <div className="events-info-nav-container-part">
          <Navigation
            setActiveSection={setActiveSection}
            activeSection={"Social Events"}
          />
        </div>
      </div>
    </div>
  );
}

function Navigation({ setActiveSection, activeSection }) {
  const handleKeyDown = (e, section) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveSection(section);
    }
  };

  return (
    <nav className="home-page-section-navigation" role="tablist">
      <div
        role="tab"
        tabIndex={0}
        aria-selected={activeSection === "Family Gathering"}
        onClick={() => setActiveSection("Family Gathering")}
        onKeyDown={(e) => handleKeyDown(e, "Family Gathering")}
        className={
          activeSection === "Family Gathering"
            ? "nav-bullet nav-bullet-action"
            : "nav-bullet"
        }
      >
        FAMILY GATHERING
      </div>
      <div
        role="tab"
        tabIndex={0}
        aria-selected={activeSection === "Special Events"}
        onClick={() => setActiveSection("Special Events")}
        onKeyDown={(e) => handleKeyDown(e, "Special Events")}
        className={
          activeSection === "Special Events"
            ? "nav-bullet nav-bullet-action"
            : "nav-bullet"
        }
      >
        SPECIAL EVENTS
      </div>
      <div
        role="tab"
        tabIndex={0}
        aria-selected={activeSection === "Social Events"}
        onClick={() => setActiveSection("Social Events")}
        onKeyDown={(e) => handleKeyDown(e, "Social Events")}
        className={
          activeSection === "Social Events"
            ? "nav-bullet nav-bullet-action"
            : "nav-bullet"
        }
      >
        SOCIAL EVENTS
      </div>
    </nav>
  );
}
