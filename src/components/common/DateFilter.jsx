import React, { useEffect, useState } from "react";

const DateFilter = ({ show, onDateFilter }) => {
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const { startDate, endDate } = dateFilter;

  //Methods
  useEffect(() => {
    if (startDate !== "" && endDate !== "") {
      onDateFilterhandler(dateFilter);
    }
  }, [startDate, endDate]);

  const onDateFilterhandler = (values) => {
    onDateFilter(values);
  };

  const onDateChange = (e) => {
    const { value, name } = e.target;
    setDateFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  if (show) {
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
