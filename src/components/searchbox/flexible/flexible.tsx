import { useState } from "react";

function Flexible() {
  const [stayDuration, setStayDuration] = useState<"Weekend" | "Week" | "Month" | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0); // برای مدیریت موقعیت اسلایدر

  const handleDurationClick = (duration: "Weekend" | "Week" | "Month") => {
    setStayDuration(duration);
  };

  // تولید لیست ماه‌ها
  const months = [...Array(12)].map((_, i) => {
    const currentMonth = new Date();
    currentMonth.setMonth(currentMonth.getMonth() + i);
    const monthName = currentMonth.toLocaleString("default", { month: "long" });
    const year = currentMonth.getFullYear();
    return { monthName, year, key: i };
  });

  // مدیریت فلش‌های اسلایدر
  const visibleMonths = 6; // تعداد ماه‌های قابل مشاهده
  const maxIndex = Math.ceil(months.length / visibleMonths) - 1; // حداکثر اندیس اسلایدر

  const handlePrev = () => {
    setSliderIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  // نمایش 6 ماه بر اساس اندیس اسلایدر
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
            <button className="slider-arrow prev" onClick={handlePrev}>
              ←
            </button>
            <div className="month-buttons">
              {displayedMonths.map((month) => (
                <button key={month.key} className="month-button">
                  <img src="src/assets/icon/date.svg" alt="" className="cal-img" />
                  <div>{month.monthName}</div>
                  <div>{month.year}</div>
                </button>
              ))}
            </div>
            <button className="slider-arrow next" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexible;