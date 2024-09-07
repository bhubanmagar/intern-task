const ProfileUploader = () => {
  return (
    <>
      <div className="w-1/2 h-80 boarder bg-green-400 rounded-3xl flex justify-center items-center">
        <p className="font-bold text-2xl p-2 text-left mt-4">Attachment:</p>
        <label className="cursor-pointer flex items-center justify-center bg-gray-300 text-white p-2 rounded-full"></label>
        <input type="file" className="bg-white" placeholder="Upload File" />
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg> */}
      </div>
    </>
  );
};
export default ProfileUploader;
