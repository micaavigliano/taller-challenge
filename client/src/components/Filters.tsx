import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FiltersProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const Filters: React.FC<FiltersProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div>
      <div>
        <label className="form-label">Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
          dateFormat="yyyy-MM-dd"
          className="form-control"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label className="form-label">End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={onEndDateChange}
          dateFormat="yyyy-MM-dd"
          className="form-control"
          placeholderText="Select end date"
        />
      </div>
    </div>
  );
};

export default Filters;
