// src/components/MapComponent.js
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ onPinDrop, pins, focusPin }) => {
    // Custom hook to handle map events and focus on the selected pin
    const MapEvents = () => {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                onPinDrop({ lat, lng });
            },
        });

        useEffect(() => {
            if (focusPin) {
                map.setView([focusPin.lat, focusPin.lng], 13); // Center on the selected pin
            }
        }, [focusPin, map]);

        return null;
    };

    return (
        <MapContainer center={[20, 78]} zoom={5} className="map-container" style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Render markers based on pins */}
            {pins.map((pin, index) => (
                <Marker key={index} position={[pin.lat, pin.lng]}>
                    <Popup>{pin.remark}</Popup>
                </Marker>
            ))}

            <MapEvents />
        </MapContainer>
    );
};

export default MapComponent;
