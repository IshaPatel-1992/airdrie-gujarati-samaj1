import React, { useState } from 'react';
import { LinkButton } from '../components/ui/LinkButton.jsx';
import logo from '../assets/Airdrie-Samaj-Logo-png-512x128.png'; // Replace with your actual logo path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    // { to: '/contact', label: 'Contact' },
    { to: '/membershipdetails', label: 'Membership Info' },
  ];

  return (
    <nav className="bg-brand text-brand-text shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Airdrie Gujarati Samaj Logo"
            className="h-[72px] w-auto bg-white rounded p-1"
          />
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden focus:outline-none z-50 cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-6">
          {menuItems.map(({ to, label }) => (
            <LinkButton key={to} to={to}>
              {label}
            </LinkButton>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile sliding drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-brand text-white z-50 transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg flex flex-col p-6 space-y-4`}
      >
        {/* Close button */}
        <button
          className="self-end text-white hover:text-yellow-400"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Menu items */}
        {menuItems.map(({ to, label }) => (
          <LinkButton
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="transition-colors duration-200 hover:#823939"
          >
            {label}
          </LinkButton>
        ))}
      </div>
    </nav>
  );
}
