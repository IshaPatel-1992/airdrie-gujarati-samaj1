import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto animate-fadeIn text-brand">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center text-brand mb-8">
        About Us
      </h2>
      <div className="space-y-6 text-gray-800 text-base leading-relaxed font-sans max-w-2xl mx-auto text-center">
        <p>
          <strong className="text-brand">Airdrie Gujarati Samaj</strong> is a nonprofit cultural association
          dedicated to fostering <strong>community spirit</strong>, preserving our vibrant
          <strong> Gujarati heritage</strong>, and creating a warm, inclusive environment
          for families and individuals of all ages.
        </p>
        <p>
          We celebrate our culture through <strong>festivals</strong>, <strong>workshops</strong>,
          and <strong>community events</strong> that bridge generations, support newcomers,
          and strengthen the ties that bind us.
        </p>
        <p>
          Join us in honoring our <strong>traditions</strong>, sharing our stories, and building a
          united and culturally rich Gujarati community in Airdrie — and beyond.
        </p>
      </div>
      <div className="bg-brand text-white p-6 rounded-2xl shadow-md text-center mt-10">
        <h3 className="text-xl font-semibold mb-2">Become a Member</h3>
        <p className="mb-4">
          Ready to be part of something meaningful? Enjoy exclusive events and
          community programs.
        </p>
        <Link
          to="/membershipdetails"
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}
