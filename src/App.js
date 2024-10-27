// src/App.js
import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import axios from "axios";

const App = () => {
  const [pins, setPins] = useState([]);
  const [focusPin, setFocusPin] = useState(null);

  // Load pins from local storage on component mount
  useEffect(() => {
    const savedPins = JSON.parse(localStorage.getItem("pins")) || [];
    setPins(savedPins);
  }, []);

  // Save pins to local storage whenever pins array updates
  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  // Handler for adding a new pin
  const handlePinDrop = async ({ lat, lng }) => {
    const address = await fetchAddress(lat, lng);
    const remark = prompt("Enter remark for this location:");
    if (remark) {
      const newPin = { lat, lng, remark, address };
      setPins([...pins, newPin]);
    }
  };

  // Fetch address using Nominatim API
  const fetchAddress = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      return response.data.display_name || "Address not found";
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Address not found";
    }
  };

  // Handler for focusing on a specific pin
  const handlePinClick = (pin) => {
    setFocusPin(pin);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* MapComponent now receives pins and focusPin */}
      <MapComponent onPinDrop={handlePinDrop} pins={pins} focusPin={focusPin} />
      <Sidebar pins={pins} onPinClick={handlePinClick} />
    </div>
  );
};

// Sidebar component to list and navigate to saved pins
const Sidebar = ({ pins, onPinClick }) => (
  <div style={{ width: "300px", padding: "10px", borderLeft: "1px solid #ccc", overflowY: "auto" }}>
    <h3>Saved Pins</h3>
    <ul>
      {pins.map((pin, index) => (

        <li key={index} onClick={() => onPinClick(pin)} style={{ cursor: "pointer", marginBottom: "10px" }}>
          <p><strong>Remark:</strong> {pin.remark}</p>
          <p><strong>Address:</strong> {pin.address}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
