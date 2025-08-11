import React from "react";
import diya from "../assets/Events/Diwali1 (3).jpg";
import garba from "../assets/Events/Navratri.png";
import picnic from "../assets/Events/Picnic.jpg";
export default function EventsComponent() {
    const events = [
        {
          title: "Community Picnic",
          date: "July 20, 2025",
          location: "Nose Creek Park",
          image: picnic,
        },  
        {
          title: "Diwali Celebration",
          date: "Nov. 8, 2025",
          location: "Airdrie Town Hall",
          image: diya,
        },
        {
          title: "Navaratri Garba",
          date: "Oct. 3, 2025",
          location: "Airdrie Community Centre",
          image: garba,
        },
      ];
  return (
    <section className="bg-[#f8eedf] py-16 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand mb-12">
        Upcoming Events
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-bold text-brand mb-1">
                {event.title}
              </h3>
              <p className="text-sm font-medium">{event.date}</p>
              <p className="text-sm text-gray-600 mb-4">{event.location}</p>
              <a
                href="/events"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-4 py-2 rounded-full transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
