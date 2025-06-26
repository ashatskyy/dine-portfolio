export const FoodSection = () => {
  return (
		<section className="menu-highlights-section">
			
			<div className="menu-highlights-container">
				
        <div className="menu-highlights-main-info">
          <img
            src="./images/pattern-divide.svg"
            alt="visual divider"
            className="visual-divider"
          />

          <h2 className="menu-highlights-main-info-h2 about-info-section-txt-block-h2">
            A few highlights from our menu
          </h2>

          <p className="menu-highlights-main-info-p about-info-section-txt-block-p">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>

        <div className="menu-highlighted-dishes-list">
          <div className="highlighted-dish">
            <div className="hightlighted-dish-pic-container">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="
                          ./images/salmon-mobile.jpg 1x,
                          ./images/salmon-mobile@2x.jpg 2x"
                />
                <source
                  media="(min-width: 481px)"
                  srcSet="
                          ./images/salmon-desktop-tablet.jpg 1x,
                          ./images/salmon-desktop-tablet@2x.jpg 2x"
                />
                <img
                  className="hightlighted-dish-picture"
                  src="./images/salmon-desktop-tablet.jpg"
                  alt="Delicious beef served on a plate"
                />
              </picture>

              <hr className="decorative-horizontal-line" />
            </div>

            <div className="highlighted-dish-decription">
              <h3 className="highlighted-dish-description-h3">
                Seared Salmon Fillet
              </h3>

              <p className="highlighted-dish-description-p">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <hr className="decorative-horizontal-line-long" />
          <div className="highlighted-dish">
            <div className="hightlighted-dish-pic-container">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="
                          ./images/beef-mobile.jpg 1x,
                          ./images/beef-mobile@2x.jpg 2x"
                />
                <source
                  media="(min-width: 481px)"
                  srcSet="
                          ./images/beef-desktop-tablet.jpg 1x,
                          ./images/beef-desktop-tablet@2x.jpg 2x"
                />
                <img
                  className="hightlighted-dish-picture"
                  src="./images/beef-desktop-tablet.jpg"
                  alt="Delicious beef served on a plate"
                />
              </picture>

              <hr className="decorative-horizontal-line " />
            </div>

            <div className="highlighted-dish-decription">
              <h3 className="highlighted-dish-description-h3">
                Rosemary Filet Mignon
              </h3>

              <p className="highlighted-dish-description-p">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <hr className="decorative-horizontal-line-long" />
          <div className="highlighted-dish">
            <div className="hightlighted-dish-pic-container">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="
                          ./images/chocolate-mobile.jpg 1x,
                          ./images/chocolate-mobile@2x.jpg 2x"
                />
                <source
                  media="(min-width: 481px)"
                  srcSet="
                          ./images/chocolate-desktop-tablet.jpg 1x,
                          ./images/chocolate-desktop-tablet@2x.jpg 2x"
                />
                <img
                  className="hightlighted-dish-picture"
                  src="./images/chocolate-desktop-tablet.jpg"
                  alt="Delicious beef served on a plate"
                />
              </picture>

              <hr className="decorative-horizontal-line" />
            </div>

            <div className="highlighted-dish-decription">
              <h3 className="highlighted-dish-description-h3">
                Summer Fruit Chocolate Mousse
              </h3>

              <p className="highlighted-dish-description-p">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
