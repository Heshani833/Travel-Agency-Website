import React from "react";
import "../Style/Destination.css";
import DestinationData from "./DestinationData";
import pasikuda from "../assets/Pasikuda.png";
import trinco from "../assets/Trinco.png";
import map from "../assets/map.png";
import NineArch from "../assets/NineArch.png";
import HotelView from "../assets/Hotel.png";
import Ravana from "../assets/Ravana.png";
import Sigiriya from "../assets/Sigiriya.png";
import Sigiriya2 from "../assets/Sigiriya2.png";
import SigiriArt from "../assets/SigiriArt.png";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p1>Make you happy</p1>
      <DestinationData
        heading="East Coast Sri Lanka:Trinco & Pasikuda"
        text="Discover the untouched allure of Sri Lanka’s East Coast, where the hidden gems of Trincomalee and Pasikuda await. Trincomalee, with its
              pristine beaches like Nilaveli and Uppuveli, offers a perfect blend
              of relaxation and adventure. Dive into the vibrant coral reefs of
              Pigeon Island, explore the historic Koneswaram Temple, or embark on
                a whale-watching tour from May to September. Just south, Pasikuda
                enchants with its crescent-shaped bay and calm, shallow waters,
                ideal for families and snorkeling enthusiasts. This serene coastal
                haven, framed by golden sands and luxury resorts, promises
                tranquility away from the crowds. Experience authentic Sri Lankan
                culture, savor fresh seafood, and uncover the East Coast’s unspoiled
                beauty a true paradise for travelers seeking both serenity and
                exploration."
        img1={pasikuda}
        img2={trinco}
        img3={map}
      />
      <br />
      <br />
      <DestinationData
        heading="Ella Sri Lanaka:Nine Arch & Ravana Falls"
        text="Ella is a beautiful mountain town in Sri Lanka’s Uva Province, known for its cool climate, lush greenery, and stunning natural scenery. Surrounded by tea plantations and misty hills, Ella is a popular destination for nature lovers and adventure seekers. The town offers breathtaking views, hiking trails, and a peaceful atmosphere that makes it a must-visit spot in Sri Lanka's hill country.One of the most famous landmarks in Ella is the Nine Arch Bridge, an architectural marvel built during the British colonial period. Also known as the “Bridge in the Sky,” this stone bridge has nine graceful arches and is surrounded by dense jungle and rolling tea fields. It's located between Ella and Demodara railway stations and is best visited when a train is crossing, creating a picture-perfect moment. The bridge is easily accessible by foot and offers a scenic walk through the countryside.
Another highlight near Ella is the magnificent Ravana Falls, one of Sri Lanka’s most popular waterfalls. It cascades down from a height of about 25 meters and is especially beautiful during the rainy season when water flow is strong. The falls are named after the legendary King Ravana from the Ramayana epic, and local legends say he once used the nearby cave to hide Princess Sita. Today, Ravana Falls is a favorite stop for travelers to enjoy the views, take photos, and cool off in the natural pools.
Together, Ella, Nine Arch Bridge, and Ravana Falls offer a perfect combination of natural beauty, adventure, and cultural significance, making them must-see destinations for anyone exploring Sri Lanka’s hill country."
        img1={NineArch}
        img2={HotelView}
        img3={Ravana}
      />

      <DestinationData
        heading="Sigiriya"
        text="Located in Sri Lanka’s Cultural Triangle, Sigiriya is an ancient rock fortress and one of the most remarkable historical sites in the country. Also known as the Lion Rock, this towering 200-meter-high rock was transformed into a royal palace by King Kashyapa in the 5th century AD. Today, Sigiriya is a UNESCO World Heritage Site and a must-visit destination for travelers seeking history, culture, and stunning views.
Climbing Sigiriya is a journey through time. The path to the top takes visitors through beautifully designed royal gardens, water features, and terraces that highlight the advanced engineering of ancient Sri Lanka. As you ascend, you’ll pass the iconic Lion’s Gate, once guarded by a giant lion-shaped structure, and arrive at the summit where the ruins of the king’s palace still stand.
One of the most captivating highlights of Sigiriya is the Sigiriya frescoes, found on a sheltered rock face halfway up the climb. These 1,500-year-old paintings are known for their vibrant colors and graceful figures, often referred to as the “Sigiriya Maidens.” The frescoes depict beautifully adorned women and are believed to represent celestial beings or royal attendants. Their artistic detail and preservation continue to fascinate visitors and scholars alike.
Sigiriya is not just a historic site—it's a cultural treasure. From its ancient art to its panoramic views, this iconic landmark offers an unforgettable experience that blends legend, architecture, and beauty."
        img1={Sigiriya}
        img2={Sigiriya2}
        img3={SigiriArt}
      />
    </div>
  );
};

export default Destination;
