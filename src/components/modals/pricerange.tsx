// @ts-ignore
import ReactSlider from "react-slider";
import { useState } from "react";
import "../../app.css";

function PriceRange() {
  const [range, setRange] = useState([40, 1400]);

  return (
    <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={40}
        max={1400}
        value={range}
        onChange={setRange}
        pearling
        minDistance={10}
      />
      <div className="range-btn">
        <div>
          <span>Minimum</span>
          <button> £{range[0]}</button>
        </div>
        <div>
          <span>Maximum</span>
          <button>£{range[1]}+</button>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
