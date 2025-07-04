import { LinkToBooking } from "./LinkToBooking";

export const ReservationSection = () => {

	return (
		<section className="reservation-section">
			<h2 className="about-info-section-txt-block-h2 reservation-section-h2">Ready to make a reservation?</h2>
			<div className="booking-reservation-button-container">

			<LinkToBooking transparentBackground={true}/>
			</div>
</section>
	)
}