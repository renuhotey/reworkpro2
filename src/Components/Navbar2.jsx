import * as React from "react";
import {Link} from 'react-router-dom'

const LogoWithText = ({ logoSrc, text, companySrc }) => (
  <div className="flex gap-2 justify-center items-center text-sm text-black">
    <img loading="lazy" src={logoSrc} alt="Logo" className="shrink-0 self-stretch w-10 aspect-[0.98]" />
    <div className="self-stretch my-auto text-lg">{text}</div>
    <img loading="lazy" src={companySrc} alt="Company" className="shrink-0 self-stretch my-auto aspect-[3.13] w-[98px]" />
  </div>
);

const NavLink = ({ children }) => (
  <div className="self-stretch my-auto text-xl">{children}</div>
);

const navLinks = [
  { label: 'About' },
  { label: 'Features' },
  { label: 'Customers' },
  { label: 'Updates' },
  { label: 'Help' },
];

function MyComponent() {
  return (
    <header className="flex gap-5 justify-between px-4 py-5 bg-indigo-50 backdrop-blur-[7px] max-md:flex-wrap">
      <LogoWithText logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2399e21353466cd56c5250c6af222bef1c918d3290ea987698196295dcb89564?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&" text="made by" companySrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa583df0e18954315559c1589fdd4d2001975811648846c1e57b8c2a3196b943?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&" />
      <nav className="flex gap-12 justify-between items-center self-start text-base tracking-normal leading-6 text-black text-opacity-60 max-md:flex-wrap">
        {navLinks.map((link, index) => (
         <NavLink key={index}><a href="/">{link.label}</a></NavLink>
        ))}
        <button className="justify-center self-stretch px-4 py-2.5 font-medium tracking-tight text-white bg-black rounded-xl">
          Get for free
        </button>
      </nav>
    </header>
  );
}

export default MyComponent;