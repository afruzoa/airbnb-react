// @ts-nocheck
import "react-dates/initialize";
import moment, { Moment } from "moment";
import { useState } from "react";
import { DayPickerRangeController } from "react-dates";

function DatePicker() {
  const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Moment | null>(null);
  console.log({ selectedEndDate, selectedStartDate });
  return (
    <div className="checkin-container">
      <div className="checkin-header">
        <button className="checkin-date">Dates</button>
        <button className="checkin-month">Months</button>
        <button className="checkin-flex">Flexible</button>
      </div>
      <div className="cal-container">
        <div>
          <DayPickerRangeController
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            focusedInput={selectedStartDate} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => console.log({ focusedInput })} // PropTypes.func.isRequired,
            onDatesChange={(dates) => {
              console.log(dates);
              setSelectedStartDate(startDate);
              setSelectedEndDate(endDate);
            }}
            initialVisibleMonth={() => moment().add(2, "M")}
            numberOfMonths={2}
            noBorder={true}
            hideKeyboardShortcutsPanel={true}
            horizontalMargin={50}
            customArrowIcon={<img src="src/assets/icon/search.svg" />}
          />
        </div>
        <div className="micro-flex">
          <div className="micro-date exact-date">Exact dates</div>
          <div className="micro-date">
            <img src="src/assets/icon/plus-minus-date.svg" alt="" />
            <span>1 day</span>
          </div>
          <div className="micro-date">
            <img src="src/assets/icon/plus-minus-date.svg" alt="" />
            <span>2 day</span>
          </div>
          <div className="micro-date">
            <img src="src/assets/icon/plus-minus-date.svg" alt="" />
            <span>3 day</span>
          </div>
          <div className="micro-date">
            <img src="src/assets/icon/plus-minus-date.svg" alt="" />
            <span>7 day</span>
          </div>
          <div className="micro-date">
            <img src="src/assets/icon/plus-minus-date.svg" alt="" />
            <span>14 day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DatePicker;
