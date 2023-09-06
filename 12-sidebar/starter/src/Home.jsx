import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={openSidebar}
      >
        <FaBars />
      </button>

      <button
        className="btn"
        onClick={openModal}
      >
        show modal
      </button>
    </main>
  );
}
