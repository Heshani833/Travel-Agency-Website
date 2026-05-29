import React from "react";
import "../Style/Trip.css";
import "../Components/TripData.jsx";
import TripData from "../Components/TripData.jsx";
import bangkok from "../assets/Bangkok.png";
import dubai from "../assets/dubai.png";
import france from "../assets/france.png";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={bangkok}
          heading="Trip in Bangkok"
          text="Bangkok is Thailand’s lively capital, known for its vibrant street life, grand palaces, and ornate temples. Modern skyscrapers blend with traditional markets and Buddhist shrines. The Chao Phraya River cuts through the city, offering scenic boat rides. Bangkok is also famous for its delicious street food, bustling nightlife, and rich cultural heritage, making it a top travel destination."
        />
        <TripData
          image={dubai}
          heading="Trip in dubai"
          text="Dubai, a dazzling city in the United Arab Emirates, combines ultramodern architecture with rich Arabian heritage. Iconic landmarks like the Burj Khalifa, Palm Jumeirah, and Dubai Mall attract visitors worldwide. The desert landscape offers thrilling safaris, while luxury resorts and gold souks showcase opulence. With sunshine, vibrant nightlife, diverse population, Dubai is a thriving global hub for tourism and finance."
        />
        <TripData
          image={france}
          heading="Trip in france"
          text="France, known for its diverse, dramatic landscapes, vibrant culture, and rich history, stretches from the Mediterranean coast to the Alps. Its iconic landmarks include the Eiffel Tower, Louvre Museum, and Palace of Versailles. French cuisine, celebrated for wine, cheese, and pastries, influences global gastronomy. The French language, art, literature, and influential fashion contribute significantly to world heritage and contemporary creativity."
        />
      </div>
    </div>
  );
};

export default Trip;
