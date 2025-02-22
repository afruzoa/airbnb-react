import { useState } from "react";
import logo from "/src/assets/images/logo.svg";
import global from "/src/assets/icon/global.svg";
import menu from "/src/assets/icon/menu.svg";
import avatar from "/src/assets/icon/avatar.svg";
import Search from "./searchbox/search";

function Header() {
  const [activeTab, setActiveTab] = useState<"Stays" | "Experiences">("Stays");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="header-center">
          <button
            className={`stay ${activeTab === "Stays" ? "Active" : ""}`}
            onClick={() => setActiveTab("Stays")}
          >
            Stays
          </button>
          <button
            className={`exp ${activeTab === "Experiences" ? "Active" : ""}`}
            onClick={() => setActiveTab("Experiences")}
          >
            Experiences
          </button>
        </div>

        <div className="right-header">
          <div className="home-container">
            <a href="#" className="home">
              Airbnb your home
            </a>
            <a href="#" className="global">
              <img className="global-logo" src={global} alt="Global icon" />
            </a>
          </div>

          <div className="menu">
            <button
              className="hamburger-menu"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <img className="menu-img" src={menu} alt="Menu icon" />
              <img className="avatar" src={avatar} alt="User avatar" />
            </button>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul className="nav-menu">
                <li>Sign up</li>
                <li>Log in</li>
                <hr />
                <li>Gift cards</li>
                <li>Airbnb your home</li>
                <li>Host an Experience</li>
                <li>Help</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Search activeTab={activeTab} />
    </div>
  );
}

export default Header;
