// @ts-nocheck
import "react-dates/initialize";
import moment, { Moment } from "moment";
import { useState } from "react";
import { DayPickerRangeController } from "react-dates";
import Flexible from "../flexible/flexible";

function DatePickerComponent() {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState<"dates" | "flexible" | "months">("dates");

  const handleTabChange = (tab: "dates" | "flexible" | "months", event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveTab(tab);
  };

  return (
    <div className="checkin-container">
      <div className="checkin-header">
        <button className="checkin-date" onClick={(e) => handleTabChange("dates", e)}>
          Dates
        </button>
        <button className="checkin-month" onClick={(e) => handleTabChange("months", e)}>
          Months
        </button>
        <button className="checkin-flex" onClick={(e) => handleTabChange("flexible", e)}>
          Flexible
        </button>
      </div>

      {activeTab === "dates" && (
        <div className="cal-container">
           <div>
            <DayPickerRangeController
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              focusedInput={selectedStartDate ? "startDate" : "endDate"}
              onFocusChange={(focusedInput) => console.log({ focusedInput })}
              onDatesChange={({ startDate, endDate }) => {
                setSelectedStartDate(startDate);
                setSelectedEndDate(endDate);
              }}
              initialVisibleMonth={() => moment().add(2, "M")}
              numberOfMonths={2}
              noBorder={true}
              hideKeyboardShortcutsPanel={true}
              horizontalMargin={50}
              customArrowIcon={<img src="src/assets/icon/search.svg" alt="arrow" />}
            />
          </div>
          <div className="micro-flex">
            <div className="micro-date exact-date">Exact dates</div>
            <div className="micro-date">
              <img src="src/assets/icon/plus-minus-date.svg" alt="icon" />
              <span>1 day</span>
            </div>
            <div className="micro-date">
              <img src="src/assets/icon/plus-minus-date.svg" alt="icon" />
              <span>2 day</span>
            </div>
            <div className="micro-date">
              <img src="src/assets/icon/plus-minus-date.svg" alt="icon" />
              <span>3 day</span>
            </div>
            <div className="micro-date">
              <img src="src/assets/icon/plus-minus-date.svg" alt="icon" />
              <span>7 day</span>
            </div>
            <div className="micro-date">
              <img src="src/assets/icon/plus-minus-date.svg" alt="icon" />
              <span>14 day</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "flexible" && <Flexible />}
    </div>
  );
}

export default DatePickerComponent;