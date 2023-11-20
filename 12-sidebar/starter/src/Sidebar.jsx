import logo from "./logo.svg";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Sidebar() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();

  return (
    // <aside className="sidebar show-sidebar">
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img
          src={logo}
          alt="coding addict"
          className="logo"
        />

        <button
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, icon, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, icon, url } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
