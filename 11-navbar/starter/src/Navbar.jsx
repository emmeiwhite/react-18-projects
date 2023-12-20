import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import { social, links } from "./data.jsx";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const refLinks = useRef(null);
  // const refLinksContainer = useRef(null);
  console.log(refLinks.current);

  const handleToggle = () => {
    console.log(social);
    setShowLinks(!showLinks);
  };

  // We are handling the toggle of nav's with inline style  and useRef
  const linksStyle = {
    height: showLinks
      ? `${refLinks.current.getBoundingClientRect().height}px`
      : "0px",
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
          className="links-container"
          // ref={refLinksContainer}
          style={linksStyle}
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

        {/* Social links */}

        <ul className="social-icons">
          {social.map((socialLink) => {
            console.log(socialLink);
            return (
              <li key={socialLink.id}>
                <a href={socialLink.url}>{socialLink.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
