import { useEffect, useRef, useState } from "react";
import Where from "./wheresection/where";
import Who from "./whosection/who";
import Checkin from "./checkin/checkin";

function Search({ activeTab }: { activeTab: "Stays" | "Experiences" }) {
  console.log({ activeTab });
  // const [whereSectionIsOpen, setWhereSectionIsOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [openSection, setOpenSection] = useState("");
  const [guestInput, setGuestInput] = useState<string>("");

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setOpenSection("");
  };
  console.log({ openSection });
  // const handleGuestInputChange = (input: string) => {
  //   setGuestInput(input);
  //   setOpenSection("");
  // };
  const whereRef = useRef<HTMLDivElement | null>(null);
  const whoRef = useRef<HTMLDivElement | null>(null);
  const checkinRef = useRef<HTMLDivElement | null>(null);
console.log(openSection)
  const handleClickOutside = (event:MouseEvent) => {
    if (
      openSection === "where" &&
      !whereRef?.current?.contains(event?.target as Node)
    ) {
      console.log("close where");
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
  }


  useEffect(() => {
    if (openSection !== "") {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSection]);

  return (
    <div className="search-box">
      <div className="search-bar">
        <div
          className={`where-box ${openSection !== "where" && "bg-gray"}`}
          onClick={() => {
            setOpenSection("where");
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
            <div className="checkin-box search-item" 
            ref={checkinRef}
              onClick={() => setOpenSection("checkin")}>
              <p className="checkin">Check in</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                readOnly
              />
              {openSection === "checkin" && (
          <Checkin />
        )}
            </div>
            <div className="checkout-box search-item">
              <p className="checkout">Check Out</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                readOnly
              />
            </div>
          </>
        ) : (
          <div className="search-item date-box">
            <p className="date">Date</p>
            <input type="text" name="" id="" placeholder="Add dates" readOnly />
          </div>
        )}

        {/* <!-- guest box --> */}
        <div>
          <div className="guests-search search-item">
            <>
            <div
              className="guests-box"
              onClick={() => {
                setOpenSection("who");
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
            {openSection === "who" && <Who setGuestInput={setGuestInput} />}
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
        </div>
      </div>
    </div>
  );
};

export default Search;
