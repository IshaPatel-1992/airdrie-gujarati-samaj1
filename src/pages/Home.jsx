import React from "react";
import heroImage from "../assets/GujC1Resized.jpg";
import Sponsors from "../components/Sponsors.jsx";
import EventsComponent from "../components/EventsComponent.jsx";

export default function Home() {
  

  return (
    <div className="font-sans text-brand">
      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="animate-fadeIn text-4xl md:text-5xl font-heading font-bold text-brand bg-white/70 px-4 py-2 rounded shadow-md">
          Celebrating Culture, Community & Unity.
        </h1>

        <h3 className="animate-fadeIn mt-4 text-2xl md:text-3xl font-heading font-bold text-brand bg-white/60 px-4 py-1 rounded shadow-sm">
          Let's grow together, Let's glow together
        </h3>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="uppercase tracking-wide bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded shadow transition transform hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="/events"
            className="uppercase tracking-wide bg-[#4b1d1d] hover:bg-[#5e2a2a] text-white font-semibold px-6 py-2 rounded shadow transition transform hover:scale-105"
          >
            Upcoming Events
          </a>
        </div>
      </section>

      {/* Upcoming Events */}
      <EventsComponent />

      {/* Sponsors */}
      <Sponsors />
    </div>
  );
}
