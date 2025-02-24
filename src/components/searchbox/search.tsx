import { useState } from "react";
import Where from "./wheresection/where";
import Who from "./whosection/who";

function Search({ activeTab }: { activeTab: "Stays" | "Experiences" }) {
  console.log({ activeTab });
  const [whereSectionIsOpen, setWhereSectionIsOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setWhereSectionIsOpen(false);
  };
  return (
    <div className="search-box">
      <div className="search-bar">
        <div className="where-box" onClick={() => setWhereSectionIsOpen(true)}>
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
        {whereSectionIsOpen && <Where onRegionSelect={handleRegionSelect} />}
        {/* <!-- check in box --> */}
        <div className="checkin-box search-item">
          <p className="checkin">Check in</p>
          <input type="text" name="" id="" placeholder="Add dates" readOnly />
        </div>
        {/* <!-- check out box --> */}
        <div className="checkout-box search-item">
          <p className="checkout">Check Out</p>
          <input type="text" name="" id="" placeholder="Add dates" readOnly />
        </div>
        {/* <!-- date box for exp --> */}
        <div className="search-item display-none date-box">
          <p className="date">Date</p>
          <input type="text" name="" id="" placeholder="Add dates" readOnly />
        </div>
        {/* <!-- guest box --> */}
        <div>
          <div className="guests-search search-item">
            <div className="guests-box">
              <p className="who">Who</p>
              <input
                type="text"
                name=""
                id="whoInput"
                placeholder="Add guests"
                readOnly
              />
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
        <Who />
      </div>
    </div>
  );
}

export default Search;
