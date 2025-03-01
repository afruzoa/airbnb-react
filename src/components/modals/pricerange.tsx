// @ts-ignore
import ReactSlider from "react-slider";
import { useState } from "react";

function PriceRange() {
  const [range, setRange] = useState([10, 100]);

  return (
    <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        max={500}
        value={range}
        onChange={setRange}
        pearling
        minDistance={10}
      />
      <div className="range-btn">
        <div>
          <button> ${range[0]}</button>
        </div>
        <div>${range[1]}</div>
      </div>
    </div>
  );
}

export default PriceRange;
