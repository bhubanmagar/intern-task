const GenderSelect = () => {
  return (
    <>
      <div className="m-1 mt-2">
        <h2 className="text-lg font-semibold mb-2 ml-3">Gender</h2>
        <div className="flex items-center space-x-6 ml-3">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-green-500"
              name="gender"
              value="male"
              checked
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-green-500"
              name="gender"
              value="female"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-green-500"
              name="gender"
              value="others"
            />
            <span className="ml-2 text-gray-700">Others</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default GenderSelect;
