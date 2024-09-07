const DateSelector = () => {
  return (
    <>
      <div className="">
        <label htmlFor="date" className="font-bold">
          Birth Date
        </label>
        <br />
        <input type="date" className="border rounded-2xl w-60 p-2" />
      </div>
    </>
  );
};

export default DateSelector;
