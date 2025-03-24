import { useState } from "react";

function Flexible() {
  const [stayDuration, setStayDuration] = useState<"Weekend" | "Week" | "Month" | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleDurationClick = (duration: "Weekend" | "Week" | "Month") => {
    setStayDuration(duration);
  };

  const months = [...Array(12)].map((_, i) => {
    const currentMonth = new Date();
    currentMonth.setMonth(currentMonth.getMonth() + i);
    const monthName = currentMonth.toLocaleString("default", { month: "long" });
    const year = currentMonth.getFullYear();
    return { monthName, year, key: i };
  });

  const visibleMonths = 6;
  const maxIndex = Math.ceil(months.length / visibleMonths) - 1; 

  const handlePrev = () => {
    setSliderIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  const displayedMonths = months.slice(sliderIndex * visibleMonths, (sliderIndex + 1) * visibleMonths);

  return (
    <div className="flex-container">
      <div className="flex-center">
        <h1>How long would you like to stay?</h1>
        <div className="duration-btn">
          <button
            className={stayDuration === "Weekend" ? "active" : ""}
            onClick={() => handleDurationClick("Weekend")}
          >
            Weekend
          </button>
          <button
            className={stayDuration === "Week" ? "active" : ""}
            onClick={() => handleDurationClick("Week")}
          >
            Week
          </button>
          <button
            className={stayDuration === "Month" ? "active" : ""}
            onClick={() => handleDurationClick("Month")}
          >
            Month
          </button>
        </div>
        <div className="month-btn">
          <h1>When do you want to go?</h1>
          <div className="slider-container">
            <img className="slider-arrow prev" src="src/assets/icon/prev.svg" alt="" onClick={handlePrev}/>
            <div className="month-buttons">
              {displayedMonths.map((month) => (
                <button key={month.key} className="month-button">
                  <img src="src/assets/icon/date.svg" alt="" className="cal-img" />
                  <div>{month.monthName}</div>
                  <div>{month.year}</div>
                </button>
              ))}
            </div>
            <img className="slider-arrow next" src="src/assets/icon/next.svg" alt="" onClick={handleNext}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexible;