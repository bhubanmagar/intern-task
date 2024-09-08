import React from "react";

interface DateSelectorProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date" className="font-bold">
        Birth Date
      </label>
      <br />
      <input
        type="date"
        className="border rounded-2xl w-60 p-2"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateSelector;
