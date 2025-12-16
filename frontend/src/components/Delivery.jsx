import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../styles/delivery.css";

const mapContainerStyle = {
  width: "80%",
  height: "500px",
  margin: "0 auto",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.12)",
};

const center = { lat: -1.286389, lng: 36.817223 }; // Nairobi center

const locations = [
  { name: "Nairobi", position: { lat: -1.286389, lng: 36.817223 } },
  { name: "Kiambu", position: { lat: -1.1689, lng: 36.836 } },
  { name: "Ruiru", position: { lat: -1.1421, lng: 36.9387 } },
  { name: "Thika", position: { lat: -1.0333, lng: 37.0695 } },
  { name: "Mombasa", position: { lat: -4.0435, lng: 39.6682 } },
];

export default function Delivery() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section className="delivery-section">
      <h2 className="delivery-title">Select Your Delivery Location</h2>
      <p className="delivery-subtitle">
        {selectedLocation
          ? `📍 You selected: ${selectedLocation}`
          : "Click a marker to select your area."}
      </p>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={8}
        >
          {locations.map((loc) => (
            <Marker
              key={loc.name}
              position={loc.position}
              onClick={() => setSelectedLocation(loc.name)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedLocation && (
        <div className="order-button-container">
          <button className="order-button">
            Order Now in {selectedLocation}
          </button>
        </div>
      )}
    </section>
  );
}
