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
import NuwaraEliya from "../assets/NuwaraEliya.png";
import Hotel from "../assets/NuwaraEliyaHotel.png";
import Lake from "../assets/Lake-Gregory.png";
import Kandy1 from "../assets/Kandy.png";
import Kandy2 from "../assets/Kandy2.png";
import Kandy3 from "../assets/Kandy3.png";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p1>Make you happy</p1>

      <DestinationData
        className="des"
        heading="Kandy: Temple of the Tooth & Cultural Heritage"
        text="Kandy, the last royal capital of Sri Lanka, is a captivating city rich in history, culture, and natural beauty. Nestled among lush hills and tea plantations, it blends traditional charm with modern appeal. At its heart stands the sacred Temple of the Tooth Relic (Sri Dalada Maligawa), a UNESCO World Heritage Site that draws pilgrims and visitors from around the world. Nearby, the serene Kandy Lake offers the perfect spot for peaceful walks and scenic sunsets. Kandy also comes alive during the Esala Perahera, a spectacular cultural festival featuring dancers, drummers, and majestic elephants. Nature lovers can explore the Royal Botanical Gardens, tea museums, and stunning viewpoints that highlight the region's beauty. Whether you're seeking spirituality, culture, or relaxation, Kandy delivers an unforgettable experience. Let us guide you through this iconic hill country destination and discover the timeless grace of Sri Lanka’s cultural heart."
        img1={Kandy1}
        img2={Kandy2}
        img3={Kandy3}
      />
      <DestinationData
        className="des-reverse"
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

      <DestinationData
        className="des"
        heading="Ella Sri Lanaka:Nine Arch & Ravana Falls"
        text="Ella, a charming mountain town in Sri Lanka’s Uva Province, is renowned for its cool climate, lush greenery, and breathtaking landscapes. Surrounded by tea plantations and misty hills, it's a haven for nature lovers and adventurers alike. One of Ella’s top attractions is the iconic Nine Arch Bridge, a colonial-era marvel with nine elegant arches set amidst dense jungle and tea fields. The best time to visit is when a train crosses, creating a magical, picture-perfect scene. Just a short drive away lies the stunning Ravana Falls, plunging from a height of about 25 meters. Steeped in legend, the falls are linked to the epic tale of King Ravana and Princess Sita. Visitors can enjoy the views, take memorable photos, and even cool off in the refreshing pools. With its scenic hikes, cultural landmarks, and peaceful ambiance, Ella offers a unique escape into the natural and historical wonders of Sri Lanka’s hill country.
Together, Ella, Nine Arch Bridge, and Ravana Falls offer a perfect combination of natural beauty, adventure, and cultural significance, making them must-see destinations for anyone exploring Sri Lanka’s hill country."
        img1={NineArch}
        img2={HotelView}
        img3={Ravana}
      />

      <DestinationData
        className="des-reverse"
        heading="Sigiriya: Lion Rock & Ancient Wonders"
        text="Sigiriya, located in Sri Lanka’s Cultural Triangle, is an ancient rock fortress and one of the country's most iconic historical landmarks. Also known as Lion Rock, it rises 200 meters and was transformed into a royal palace by King Kashyapa in the 5th century AD. Now a UNESCO World Heritage Site, Sigiriya attracts visitors with its rich history, engineering marvels, and breathtaking views. The climb to the top leads through landscaped royal gardens and the famous Lion’s Gate to the ruins of the palace. Midway, visitors encounter the stunning Sigiriya frescoes—vibrant 1,500-year-old paintings of beautifully adorned women, believed to be celestial or royal figures. These artworks, along with the site’s impressive architecture and legends, make Sigiriya a true cultural treasure and a must-see destination for anyone exploring Sri Lanka’s ancient heritage.
Sigiriya is not just a historic site—it's a cultural treasure. From its ancient art to its panoramic views, this iconic landmark offers an unforgettable experience that blends legend, architecture, and beauty."
        img1={Sigiriya}
        img2={Sigiriya2}
        img3={SigiriArt}
      />

      <DestinationData
        className="des"
        heading="Nuwara Eliya & Gregory Lake: Tea Country Serenity"
        text="Nestled in Sri Lanka’s central highlands, Nuwara Eliya often called Little England boasts cool weather, colonial charm, and scenic beauty. Surrounded by tea plantations and misty mountains, it’s a favorite escape for nature lovers and adventure seekers. A highlight of the town is Gregory Lake, a tranquil spot built in 1873 during British rule. Today, it’s a lively hub for outdoor fun, offering boat rides, paddle boating, and jet skiing. The lake’s walking paths, cycling trails, and picnic spots attract families, couples, and solo travelers alike. With horse rides, food stalls, and stunning mountain views, it’s perfect for a relaxing day out. As the sun sets, the lake transforms into a serene, golden oasis. Whether you're after peace or play, Nuwara Eliya and Gregory Lake promise a refreshing and memorable highland retreat.
Plan your trip with us and experience the timeless beauty, fresh air, and relaxing vibes of Nuwara Eliya and Gregory Lake — where nature meets tranquility."
        img1={NuwaraEliya}
        img2={Hotel}
        img3={Lake}
      />
    </div>
  );
};

export default Destination;
