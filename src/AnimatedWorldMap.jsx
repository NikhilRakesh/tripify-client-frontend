import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from './world-110m.json';
import './styles.css';

const AnimatedWorldMap = () => {
    const [highlightedCountryIndex, setHighlightedCountryIndex] = useState(0);
    const [highlightedCountryName, setHighlightedCountryName] = useState('');
    const countries = feature(worldData, worldData.objects.countries).features;

    const highlightedCountries = [
        "India", "Bhutan", "Nepal", "Thailand", "Malaysia", "Sri Lanka",
        "Indonesia", "Vietnam", "Cambodia", "Singapore", "Hong Kong",
        "New Zealand", "Australia", "Maldives", "United Arab Emirates",
        "Oman", "Mauritius", "Turkey", "Georgia", "Azerbaijan",
        "Kazakhstan", "Uzbekistan", "Tanzania", "Greece", "Switzerland",
        "France", "Germany", "Austria", "Spain", "Italy", "Sweden",
        "Denmark", "Norway"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedCountryIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % countries.length;
                const countryName = countries[newIndex].properties.name;
                if (highlightedCountries.includes(countryName)) {
                    setHighlightedCountryName(countryName);
                } else {
                    setHighlightedCountryName('');
                }
                return newIndex;
            });
        }, 1500); 

        return () => clearInterval(interval);
    }, [countries]);

    return (
        <div className="relative ">
            <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 150, // Adjust scale as needed
                center: [85, 40] // Center on Asia, adjust as needed
            }}
            >
                <Geographies geography={worldData}>
                    {({ geographies }) =>
                        geographies.map((geo, index) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={index === highlightedCountryIndex ? "#ffcf15" : "#b5c4df"} // Set fill to orange for highlighted country
                                className={index === highlightedCountryIndex ? "pulse-glow" : ""}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
            {highlightedCountryName && (
                <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded shadow-lg border text-lg font-bold text-gray-800 z-10">
                    {highlightedCountryName}
                </div>
            )}
        </div>
    );
};

export default AnimatedWorldMap;
