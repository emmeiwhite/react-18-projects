import React from "react";
import { useState, useRef } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggle = () => {
    console.log("button clicked!");
    // const linksContainer = document.querySelector(".links-container");
    // linksContainer.classList.toggle("show-links");
    setShowLinks(!showLinks);

    console.log(linksContainerRef.current.getBoundingClientRect().height);
    console.log(linksRef.current.getBoundingClientRect().height);
  };

  const styles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };
  return (
    <nav>
      <div className="nav-center">
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
      </div>

      {/* {showLinks && ( */}
      {/* <div className={`links-container ${showLinks ? "show-container" : ""}`}>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div> */}
      {/* )} */}

      {/* Now with useRef Logic */}

      <div
        className={"links-container"}
        style={styles}
        ref={linksContainerRef}
      >
        <ul
          className="links"
          ref={linksRef}
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
    </nav>
  );
}
