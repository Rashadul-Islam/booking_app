import React, { useEffect, useRef, useState } from "react";
import { city } from "./City";

const Select = ({ setSelect, defaultValue, placeHolder }) => {
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

  return (
    <div ref={wrapperRef}>
      <div className="px-3 py-2 cursor-pointer" onClick={() => setShow(!show)}>
        <p className="text-[#5F6369] text-[12.5px] font-bold font-serif">
          {placeHolder}
        </p>
        <p className="text-[15px] font-bold">{defaultValue}</p>
      </div>
      {show && (
        <div className="absolute md:top-[61px] top-[58px] w-full bg-gray-400 rounded-md py-2 z-20">
          {city?.map((city, index) => (
            <div className="hover:bg-yellow-500" key={index}>
              <p
                className="text-[15px] px-3 py-2"
                onClick={() => {
                  setSelect(city.value);
                  setShow(!show);
                }}
              >
                {city.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
