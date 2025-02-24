import { useEffect, useRef, useState } from "react";
import Where from "./wheresection/where";
import Who from "./whosection/who";

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
  const handleClickOutside = (event: MouseEvent) => {
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
      console.log("close who");
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

  return (
    <div className="search-box">
      <div className="search-bar">
        <div
          className={`where-box ${openSection !== "where" && "bg-gray"}`}
          onClick={() => {
            // setWhereSectionIsOpen(true);
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
            <div className="checkin-box search-item">
              <p className="checkin">Check in</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                readOnly
              />
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
            <div
              className="guests-box"
              ref={whoRef}
              onClick={() => setOpenSection("who")}
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
              {openSection === "who" && <Who setGuestInput={setGuestInput} />}
            </div>

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
}

export default Search;
