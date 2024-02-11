import React, { useEffect, useRef, useState } from "react";

const PassengerInput = ({ passenger, setPassenger }) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleChange = (name, perform) => {
    setPassenger((prev) => {
      return {
        ...prev,
        [name]: perform === "inc" ? passenger[name] + 1 : passenger[name] - 1,
      };
    });
  };

  return (
    <div className="w-full" ref={wrapperRef}>
      <div className="px-3 py-2 cursor-pointer" onClick={() => setShow(!show)}>
        <p className="text-[#5F6369] text-[12.5px] font-bold font-serif">
          {passenger.adult} Adult, {passenger.children} Children
        </p>
        <p className="text-[15px] font-bold">
          {passenger.adult + passenger.children} Passenger
        </p>
      </div>
      {show && (
        <div className="absolute w-full md:top-[61px] top-[58px] bg-gray-400 rounded-md py-2 z-20">
          <div className="flex text-[16px] font-serif font-bold lg:px-10 px-10 md:px-3 lg:gap-[50px] gap-[50px] md:gap-[30px]">
            <p>Adult</p>
            <div className="flex justify-between w-full">
              <button onClick={() => handleChange("adult", "inc")}>+</button>
              <p>{passenger.adult}</p>
              <button
                disabled={passenger.adult <= 1}
                onClick={() => handleChange("adult", "dec")}
                className="disabled:cursor-not-allowed"
              >
                -
              </button>
            </div>
          </div>

          <div className="flex text-[16px] font-serif font-bold lg:px-10 px-10 md:px-3 lg:gap-[28px] gap-[28px] md:gap-[10px] mt-2">
            <p>Children</p>
            <div className="flex justify-between w-full">
              <button onClick={() => handleChange("children", "inc")}>+</button>
              <p>{passenger.children}</p>
              <button
                disabled={passenger.children <= 0}
                onClick={() => handleChange("children", "dec")}
                className="disabled:cursor-not-allowed"
              >
                -
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerInput;
