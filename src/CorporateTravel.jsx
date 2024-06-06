import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSpring } from "framer-motion";

const corporateHeadings = ["Travel Simplified, Business Amplified"];

const CorporateTravel = () => {
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % corporateHeadings.length);
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    keys: index,
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    config: { duration: 500 },
  });

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundColor: `hsl(${colorIndex * 120}, 70%, 60%)`,
      }}
    >
      <div className="relative min-h-screen bg-opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br z-0 from-white via-transparent to-black opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-black opacity-40" />
        <div className="relative z-10 px-4 py-36 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="relative h-20">
              {transitions((style, i) => (
                <animated.h1
                  className="absolute w-full md:text-6xl text-4xl font-bold text-white mb-4 "
                  style={style}
                  key={i}
                >
                  {corporateHeadings[i]}
                </animated.h1>
              ))}
            </div>
            <animated.div className="mt-8 text-base font-bold sm:text-lg text-white py-10" style={fade}>
              <p className="mb-2">Streamline corporate travel with our</p>
              <p className="mb-2">all-in-one platform: flights, hotels, retreats</p>
              <p className="mb-2">events &
more</p>
            </animated.div>
            <div className="mt-8 flex justify-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105"
                onClick={() => navigate("/Coprate-TravelPage")}
              >
                Book Your Next Corporate Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTravel;
