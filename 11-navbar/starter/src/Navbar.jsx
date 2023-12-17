import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import { social, links } from "./data.jsx";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const refLinks = useRef(null);
  const refLinksContainer = useRef(null);
  console.log(refLinks.current);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        {/* NavHeader */}
        <div className="nav-header">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />

          <button
            className="nav-toggle"
            onClick={handleToggle}
          >
            <FaBars />
          </button>
        </div>

        {/* NavContainer */}

        <div
          className={showLinks ? "links-container show" : "links-container"}
          ref={refLinksContainer}
        >
          <ul
            className="links"
            ref={refLinks}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
