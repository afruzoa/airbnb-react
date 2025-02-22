// import "react-dates/initialize";
// import moment, { Moment } from "moment";
// import { useState } from "react";
// import { DayPickerRangeController } from "react-dates";

function Checkin() {
  // const [startDate, setStartDate] = useState<Moment | null>(null);
  // const [endDate, setEndDate] = useState<Moment | null>(null);
  return (
    <div className="cal-container">
      {/* <div>
        <DayPickerRangeController
          startDate={startDate} // momentPropTypes.momentObj or null,
          endDate={endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({
            startDate,
            endDate,
          }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
        />
      </div> */}
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
  );
}
export default Checkin;
