import { useEffect, useRef, useState } from "react";
import logo from "/src/assets/images/logo.svg";
import global from "/src/assets/icon/global.svg";
import menu from "/src/assets/icon/menu.svg";
import avatar from "/src/assets/icon/avatar.svg";
import Search from "./searchbox/search";
import Signup from "./modals/login";

function Header() {
  const [activeTab, setActiveTab] = useState<"Stays" | "Experiences">("Stays");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false)
   const profileRef = useRef<HTMLButtonElement | null>(null);
   const openModal = () => {
    setIsModalOpen(true);
};
const closeModal = () => {
    setIsModalOpen(false);
};
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event?.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
  
    useEffect(() => {
      if (isDropdownOpen) {
        document.addEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isDropdownOpen]);
    console.log(isDropdownOpen)

  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="header-center">
          <button
            className={`stay ${activeTab === "Stays" ? "header-tab-active" : ""}`}
            onClick={() => setActiveTab("Stays")}
          >
            Stays
          </button>
          <button
            className={`exp ${activeTab === "Experiences" ? "header-tab-active" : ""}`}
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

          <div className="menu" >
            <button
              className="hamburger-menu"
              onClick={() => setIsDropdownOpen((prev) => !prev) }
              ref={profileRef}
            >
              <img className="menu-img" src={menu} alt="Menu icon" />
              <img className="avatar" src={avatar} alt="User avatar" />
            </button>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul className="nav-menu">
                <li onClick={openModal}>Sign up</li>
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Signup closeModal={closeModal} /> 
          </div>
          <div className="modal-overlay" onClick={closeModal}></div> 
        </div>
      )}
    </div>
  );
}

export default Header;
