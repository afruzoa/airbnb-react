import PriceRange from "./pricerange";

const Essentials = [
  { name: "Wifi", icon: <img src="src/assets/icon/filter/wifi.svg" /> },
  { name: "Kitchen", icon: <img src="src/assets/icon/filter/kitchen.svg" /> },
  {
    name: "Washing machine",
    icon: <img src="src/assets/icon/filter/washing.svg" />,
  },
  { name: "Dryer", icon: <img src="src/assets/icon/filter/dryer.svg" /> },
  {
    name: "Air conditioning",
    icon: <img src="src/assets/icon/filter/ac.svg" />,
  },
  { name: "Heating", icon: <img src="src/assets/icon/filter/heat.svg" /> },
  {
    name: "Dedicated workspace",
    icon: <img src="src/assets/icon/filter/workspace.svg" />,
  },
  { name: "TV", icon: <img src="src/assets/icon/filter/tv.svg" /> },
  {
    name: "Hair dryer",
    icon: <img src="src/assets/icon/filter/hairdryer.svg" />,
  },
  { name: "Iron", icon: <img src="src/assets/icon/filter/iron.svg" /> },
];
const Features = [
  { name: "Pool", icon: <img src="src/assets/icon/filter/pool.svg" /> },
  { name: "Hot tub", icon: <img src="src/assets/icon/filter/hottub.svg" /> },
  {
    name: "Free parking",
    icon: <img src="src/assets/icon/filter/parking.svg" />,
  },
  { name: "EV charger", icon: <img src="src/assets/icon/filter/ev.svg" /> },
  { name: "Cot", icon: <img src="src/assets/icon/filter/cot.svg" /> },
  { name: "King bed", icon: <img src="src/assets/icon/filter/kingbed.svg" /> },
  { name: "Gym", icon: <img src="src/assets/icon/filter/gym.svg" /> },
  { name: "BBQ grill", icon: <img src="src/assets/icon/filter/grill.svg" /> },
  {
    name: "Breakfast",
    icon: <img src="src/assets/icon/filter/breakfast.svg" />,
  },
  {
    name: "Indoor fireplace",
    icon: <img src="src/assets/icon/filter/fire.svg" />,
  },
  {
    name: "Smoking allowed",
    icon: <img src="src/assets/icon/filter/smoke.svg" />,
  },
];
const Guest = [
  { text: "Step-free access", id: "1" },
  { text: "Disabled parking spot", id: "2" },
  { text: "Guest entrance wider than 32 inches (81 centimetres)", id: "3" },
];
const Bathroom = [
  { text: "Step-free bathroom access", id: "1" },
  { text: "Bathroom entrance wider than 32 inches (81 centimetres)", id: "2" },
  { text: "Toilet grab bar", id: "3" },
  { text: "Shower grab bar", id: "4" },
  { text: "Step-free shower", id: "5" },
  { text: "Shower or bath chair", id: "6" },
];
const Host = [
  { text: "Chinese", id: "1" },
  { text: "English", id: "2" },
  { text: "French", id: "3" },
  { text: "German", id: "4" },
  { text: "Italian", id: "5" },
  { text: "Japanese", id: "6" },
  { text: "Korean", id: "7" },
  { text: "Portuguese", id: "8" },
  { text: "Russian", id: "9" },
  { text: "Spanish", id: "10" },
  { text: "Arabic", id: "11" },
  { text: "Danish", id: "12" },
  { text: "Dutch", id: "13" },
  { text: "Finnish", id: "14" },
  { text: "Greek", id: "15" },
  { text: "Hebrew", id: "16" },
  { text: "Hindi", id: "17" },
  { text: "Hungarian", id: "18" },
  { text: "Indonesian", id: "19" },
  { text: "Norwegian", id: "20" },
  { text: "Polish", id: "21" },
  { text: "Swedish", id: "22" },
  { text: "Turkish", id: "23" },
  { text: "Afrikaans", id: "24" },
  { text: "Albanian", id: "25" },
  { text: "Bengali", id: "26" },
  { text: "Filipino", id: "27" },
  { text: "Gujarati", id: "28" },
  { text: "Lithuanian", id: "29" },
  { text: "Punjabi", id: "30" },
  { text: "Romanian", id: "31" },
  { text: "Vietnamese", id: "32" },
  { text: "Sign Language", id: "33" },
];
function Filter({ closeFilter }: { closeFilter: () => void }) {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <img
          src="src/assets/icon/close.svg"
          alt="Close"
          onClick={closeFilter}
        />{" "}
        <div>Filter</div>
        <hr />
      </div>
      <hr />
      <div className="filter-dropdown">
        <div className="filter-section">
          <h1>Type of place</h1>
          <div className="type-of-place">
            <div>Any type</div>
            <div>Room</div>
            <div>Entire home</div>
          </div>
        </div>
        <hr />
        <div className="filter-section">
          <h1>Price range</h1>
          <p>Total prices for 5 nights including fees and taxes</p>
          <div>
            <PriceRange/>
          </div>
        </div>
        <hr />
        <div className="filter-section">
          <h1>Rooms and beds</h1>
          <div className="room-count">
            <div className="bed-room">
              <div className="bed-room-text">Bedrooms</div>
              <div className="plus-minus">
                <button className="minus-button">
                  <img src="src/assets/icon/minus.svg" alt="" />
                </button>
                <div className="count">Any</div>
                <button className="plus-button">
                  <img src="src/assets/icon/plus.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="bed-room">
              <div className="bed-room-text">Beds</div>
              <div className="plus-minus">
                <button className="minus-button">
                  <img src="src/assets/icon/minus.svg" alt="" />
                </button>
                <div className="count">Any</div>
                <button className="plus-button">
                  <img src="src/assets/icon/plus.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="bed-room">
              <div className="bed-room-text">Bathrooms</div>
              <div className="plus-minus">
                <button className="minus-button">
                  <img src="src/assets/icon/minus.svg" alt="" />
                </button>
                <div className="count">Any</div>
                <button className="plus-button">
                  <img src="src/assets/icon/plus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="filter-section">
          <div className="amenities">
            <h1>Amenities</h1>
            <div className="essentials">
              <h2>Essentials</h2>
              {Essentials.map((item) => (
                <button className="essential-button">
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
            <div className="features">
              <h2>Features</h2>
              {Features.map((item) => (
                <button className="features-btn">
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
            <div className="safety">
              <h2>Safety</h2>
              <button>
                <img src="src/assets/icon/filter/smokealarm.svg" alt="" />
                <span>Smoke alarm</span>
              </button>
              <button>
                <img src="src/assets/icon/filter/carbonalarm.svg" alt="" />
                <span>Carbon monoxide alarm</span>
              </button>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <div className="booking">
            <h1>Booking options</h1>
            <button>
              <img src="src/assets/icon/filter/instant.svg" alt="" />
              <span>Instant Book</span>
            </button>
            <button>
              <img src="src/assets/icon/filter/selfcheck.svg" alt="" />
              <span>Self check-in</span>
            </button>
            <button>
              <img src="src/assets/icon/filter/pet.svg" alt="" />
              <span>Allows pets</span>
            </button>
          </div>
        </div>

        <div className="filter-section">
          <div className="favourite">
             <h1>Standout stays</h1>
             <button>
              <img src="src/assets/icon/filter/favourite.svg" alt="" />
              <div className="favourite-text">
                <p>Guest favourite</p>
              <span>The most loved homes on Airbnb</span></div>
             </button>
          </div>
         
        </div>

        <div className="filter-section">
          <div className="property">
            <h1>Property type</h1>
            <button>
              <img src="src/assets/icon/filter/house.jpg" alt="" />
              <span>House</span>
            </button>
            <button>
              <img src="src/assets/icon/filter/guest.jpg" alt="" />
              <span>Guest house</span>
            </button>
            <button>
              <img src="src/assets/icon/filter/hotel.jpg" alt="" />
              <span>Hotel</span>
            </button>
          </div>
        </div>

        <div className="filter-section">
          <div className="access">
            <h1>Accessibility features</h1>
            <div className="entrance">
              <h1>Guest entrance and parking</h1>
              <div className="check">
                {Guest.map((item) => (
                  <div key={item.id} className="checkbox-wrapper">
                    <input type="checkbox" id={item.id} name={item.text} />
                    <label htmlFor={item.id}>{item.text}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="bed-acces">
              <h1>Bedroom</h1>
              <div className="check">
                <div className="checkbox-wrapper">
                  <input type="checkbox" />
                  <label>Step-free bedroom access</label>
                </div>
                <div className="checkbox-wrapper">
                  {" "}
                  <input type="checkbox" />
                  <label>
                    Bedroom entrance wider than 32 inches (81 centimetres)
                  </label>
                </div>
              </div>
            </div>
            <div className="bath-access">
              <h1>Bathroom</h1>
              <div className="check">
                {Bathroom.map((item) => (
                  <div key={item.id} className="checkbox-wrapper">
                    <input type="checkbox" id={item.id} name={item.text} />
                    <label htmlFor={item.id}>{item.text}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="adaptive">
              <h1>Adaptive equipment</h1>

              <div className="check">
                <div className="checkbox-wrapper">
                  {" "}
                  <input type="checkbox" />
                  <label>Ceiling or mobile hoist</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-section">
          <div className="host">
            <h1>Host language</h1>
            <div className="check">
              {Host.map((item) => (
                <div key={item.id} className="checkbox-wrapper">
                  <input type="checkbox" id={item.id} name={item.text} />
                  <label htmlFor={item.id}>{item.text}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
