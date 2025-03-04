import { useEffect, useRef, useState } from "react";
import Where from "./wheresection/where";
import Who from "./whosection/who";
import DatePicker from "./checkin/checkin";

function Search({ activeTab }: { activeTab: "Stays" | "Experiences" }) {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [openSection, setOpenSection] = useState("");
  const [guestInput, setGuestInput] = useState<string>("");

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setOpenSection("");
  };
  const whereRef = useRef<HTMLDivElement | null>(null);
  const whoRef = useRef<HTMLDivElement | null>(null);
  const checkinRef = useRef<HTMLDivElement | null>(null);
  const checkoutRef = useRef<HTMLDivElement | null>(null);
const dateRef =useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      openSection === "where" &&
      !whereRef?.current?.contains(event?.target as Node)
    ) {
      setOpenSection("");
    }
    if (
      openSection === "who" &&
      !whoRef?.current?.contains(event?.target as Node)
    ) {
      setOpenSection("");
    }

    if (
      openSection === "checkin" &&
      !checkinRef?.current?.contains(event?.target as Node)
    ) {
      setOpenSection("");
    }
    if (
      openSection === "checkout" &&
      !checkoutRef?.current?.contains(event?.target as Node)
    ) {
      setOpenSection("");
    }
    if (
      openSection === "date" &&
      !dateRef?.current?.contains(event?.target as Node)
    ) {
      setOpenSection("");
    }
  };

  useEffect(() => {
    if (openSection !== "") {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSection]);
  const handleSectionClick = (section: string) => {
    if (openSection === section) {
      setOpenSection(""); 
    } else {
      setOpenSection(section); 
    }
  };

  return (
    <div className="search-box">
      <div className={`search-bar ${openSection && "bg-grey"}`}>
        <div
          className={`where-box ${openSection === "where" && "bg-white"}`}
          onClick={() => {
            handleSectionClick("where");
          }}
          ref={whereRef}
        >
          <div className="search-item">
            <p className="where">Where</p>
            <input
              type="text"
              value={selectedRegion || ""}
              placeholder="Search destinations"
              readOnly
            />
          </div>
        </div>
        {openSection === "where" && (
          <Where onRegionSelect={handleRegionSelect} />
        )}
        {activeTab === "Stays" ? (
          <>
            <div
              className={`checkin-box search-item ${
                openSection === "checkin" && "bg-white"
              }`}
              ref={checkinRef}
              onClick={() =>  handleSectionClick("checkin")}
            >
              <p className="checkin">Check in</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                readOnly
              />
            </div>
            <div
              className={`checkout-box search-item ${
                openSection === "checkout" && "bg-white"
              }`}
              ref={checkoutRef}
              onClick={() =>  handleSectionClick("checkout")}
            >
              <p className="checkout">Check Out</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                readOnly
              />
            </div>
            {(openSection === "checkin" || openSection === "checkout") && (
          <DatePicker />
        )}
          </>
        ) : (
          <div className={`search-item date-box ${
            openSection === "date" && "bg-white"
          }`}
          ref={dateRef}
          onClick={() =>  handleSectionClick("date")}>
            <p className="date">Date</p>
            <input type="text" name="" id="" placeholder="Add dates" readOnly />
          </div>
        )}
        {(openSection === "date") && (
          <DatePicker />
        )}
        {/* <!-- guest box --> */}
        <div>
          <div
            className={`guests-search search-item ${
              openSection === "who" && "bg-white"
            }`}
          >
            <>
              <div
                className={`guests-box `}
                onClick={() => {
                   handleSectionClick("who");
                }}
                ref={whoRef}
              >
                <p className="who">Who</p>
                <input
                  type="text"
                  name=""
                  id="whoInput"
                  placeholder="Add guests"
                  value={guestInput}
                  readOnly
                />
              </div>
            </>
            <div className="search-bt">
              <div className="search-button">
                <img
                  src="src/assets/icon/search.svg"
                  alt=""
                  className="search-icon"
                />
              </div>
            </div>
          </div>
          {openSection === "who" && <Who setGuestInput={setGuestInput} />}
        </div>
      </div>
    </div>
  );
}

export default Search;
