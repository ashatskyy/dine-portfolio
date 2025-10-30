export const AboutInfoSection = () => {
  return (
    <section className="about-info-section-container">
      <div className="topBackground"></div>
			<div className="bottomBackground"></div>
			
			<div className="landscape-restaurant-location-picture-container"></div>
			<div className="restaurant-most-locly-food-picture-container"></div>
	
			<img className="pattern-lines" src="./images/pattern-lines.svg" alt="pattern lines" />
			
			<div className="about-info-section-txt-block">
			
        <img
  src="./images/pattern-divide.svg"
  alt=""
  className="visual-divider"
/>
        <h2 className="about-info-section-txt-block-h2">
          Enjoyable place for all the family
        </h2>
        <p className="about-info-section-txt-block-p">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>

      <div className="about-info-section-txt-block about-info-section-txt-block-lower">
       <img
            src="./images/pattern-divide.svg"
            alt=""
            className="visual-divider"
          />
          <h2 className="about-info-section-txt-block-h2">
            The most locally sourced food
          </h2>
            <p className="about-info-section-txt-block-p">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p> 
        </div>  
   
    </section>
  );
};
