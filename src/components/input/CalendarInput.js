import React from "react";

const CalenderInput = ({ setDate, defaultValue, placeHolder }) => {
  return (
    <div>
      <div className="px-3 py-2 cursor-pointer">
        <p className="text-[#5F6369] text-[12.5px] font-bold font-serif">
          {placeHolder}
        </p>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={defaultValue}
          className="relative text-[15px] font-bold bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CalenderInput;
