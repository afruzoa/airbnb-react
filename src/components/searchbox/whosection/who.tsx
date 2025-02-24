import { useEffect, useState } from "react";

interface WhoProps {
  setGuestInput: (input: string) => void;
}
function Who({ setGuestInput }: WhoProps) {
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  useEffect(() => {
    let guestSummary = `${adultCount + childCount} Guest${adultCount + childCount !== 1 ? "s" : ""}`;
    
    if (infantCount > 0) {
      guestSummary += `, ${infantCount} Infant${infantCount !== 1 ? "s" : ""}`;
    }

    if (petCount > 0) {
      guestSummary += `, ${petCount} Pet${petCount !== 1 ? "s" : ""}`;
    }

    setGuestInput(guestSummary);
  }, [adultCount, childCount, infantCount, petCount, setGuestInput]);
  const handleAdultCountChange = (type: string) => {
    setAdultCount((prevCount) =>
      type === "increase" ? prevCount + 1 : Math.max(0, prevCount - 1)
    );
  };


  const handleChildCountChange = (type: string) => {
    setChildCount((prevCount) =>
      type === "increase" ? prevCount + 1 : Math.max(0, prevCount - 1)
    );
  };

  const handleInfantCountChange = (type: string) => {
    setInfantCount((prevCount) =>
      type === "increase" ? prevCount + 1 : Math.max(0, prevCount - 1)
    );
  };

  const handlePetCountChange = (type: string) => {
    setPetCount((prevCount) =>
      type === "increase" ? prevCount + 1 : Math.max(0, prevCount - 1)
    );
  };

  return (
    <div className="who-menu">
      <div className="inner-who-menu">
        <div className="age">
          <div className="adult-text">
            <div className="bold-adults bold-who-text">Adults</div>
            <div className="age-range">Ages 13 or above</div>
          </div>
          <div className="right-who-menu">
            <div className="plus-minus">
              <button
                className={`minus-button-adult minus-button ${
                  adultCount === 0 ? "disabled" : ""
                }`}
                onClick={() => handleAdultCountChange("decrease")}
                disabled={adultCount === 0}
              >
                <img src="/src/assets/icon/minus.svg" alt="" />
              </button>
              <div className="count">{adultCount}</div>
              <button
                className="plus-button-adult plus-button"
                onClick={() => handleAdultCountChange("increase")}
              >
                <img src="/src/assets/icon/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="age">
          <div className="Child-text">
            <div className="bold-child bold-who-text">Children</div>
            <div className="age-range">Age 2-12</div>
          </div>
          <div className="right-who-menu">
            <div className="plus-minus">
              <button
                className="minus-button minus-button-child"
                onClick={() => handleChildCountChange("decrease")}
              >
                <img src="/src/assets/icon/minus.svg" alt="" />
              </button>
              <div className="count">{childCount}</div>
              <button
                className="plus-button plus-button-child"
                onClick={() => handleChildCountChange("increase")}
              >
                <img src="/src/assets/icon/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="age">
          <div className="Infants-text">
            <div className="bold-Infants bold-who-text">Infants</div>
            <div className="age-range">Under 2</div>
          </div>
          <div className="right-who-menu">
            <div className="plus-minus">
              <button
                className="minus-button minus-button-infant"
                onClick={() => handleInfantCountChange("decrease")}
              >
                <img src="/src/assets/icon/minus.svg" alt="" />
              </button>
              <div className="count">{infantCount}</div>
              <button
                className="plus-button plus-button-infant"
                onClick={() => handleInfantCountChange("increase")}
              >
                <img src="/src/assets/icon/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="pet age">
          <div className="pet-text">
            <div className="bold-pet bold-who-text">Pets</div>
            <div>
              <a href="http://" className="pet-q">
                Bringing a service animal?
              </a>
            </div>
          </div>
          <div className="right-who-menu">
            <div className="plus-minus">
              <button
                className="minus-button minus-button-pet"
                onClick={() => handlePetCountChange("decrease")}
              >
                <img
                  src="/src/assets/icon/minus.svg"
                  alt=""
                  className="minus-button"
                />
              </button>
              <div className="count">{petCount}</div>
              <button
                className="plus-button plus-button-pet"
                onClick={() => handlePetCountChange("increase")}
              >
                <img src="/src/assets/icon/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
