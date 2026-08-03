import React, { useState } from "react";
import { Link } from "react-scroll";

import data from "../data/content.json";

/* Anchor names must match the <Element name="..."> wrappers in App.js */
const NAV_ITEMS = [
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "stack", label: "Stack" },
  { to: "about", label: "About" },
  { to: "education", label: "Education" },
  { to: "contact", label: "Contact" },
];

const SCROLL_PROPS = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: -64, // height of the sticky navbar
  duration: 500,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbardiv" aria-label="Main">
      <div className="navbar-inner">
        <Link className="navbar-brand-link" to="home" {...SCROLL_PROPS}>
          {data.profile.name}
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <div id="nav-links" className={`navbar-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              className="navbar-link"
              to={item.to}
              onClick={() => setOpen(false)}
              {...SCROLL_PROPS}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
