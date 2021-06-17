import React from "react";
import MapLocationIcon from "./icons/map-location";
import SearchIcon from "./icons/search";
import { MapErrorLocationType } from "./types";
import { loadMessages } from "./languages";
import "./styles/map-error-location.scss";

const MapErrorLocation = ({ locale = "en-GB" }: MapErrorLocationType) => {
    return (
        <div className="map-error-location">
            <div className="container">
                <div className="top-container">
                    <div className="content">
                        <div className="search-icon">
                            <SearchIcon />
                        </div>
                        <div className="message">
                            {loadMessages(locale).TEXT}
                        </div>
                    </div>
                </div>
                <div className="maplocation-icon">
                    <MapLocationIcon />
                </div>
            </div>
        </div>
    );
};

export default MapErrorLocation;
