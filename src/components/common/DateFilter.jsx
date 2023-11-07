import React from "react";

const DateFilter = ({
  showDateFilter,
  onDateChange,
  dateFilter,
  clearFilter,
}) => {
  const { startDate, endDate } = dateFilter;

  if (showDateFilter) {
    return (
      <div className="date_block">
        <div className="input_wraper">
          <label>From Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={onDateChange}
          />
        </div>
        <div className="input_wraper">
          <label>To date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={onDateChange}
          />
        </div>
      </div>
    );
  }
};

export default DateFilter;

// <button type="button" onClick={clearFilter}>
//   clear
// </button>
