import React, { useState } from "react";
import Select from "../input/Select";
import CalenderInput from "../input/CalendarInput";
import PassengerInput from "../input/PassengerInput";
import moment from "moment";

const Hotel = () => {
  const [checkInDate, setCheckInDate] = useState(moment().format("YYYY-MM-DD"));
  const [checkOutDate, setCheckOutDate] = useState();
  const [city, setCity] = useState("Dhaka");
  const [passenger, setPassenger] = useState({
    adult: 1,
    children: 0,
  });
  const [room, setRoom] = useState(1);

  return (
    <div className="mx-[15px]">
      <div className="border border-yellow-500 rounded-md flex md:flex-row flex-col">
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <CalenderInput
            setDate={setCheckInDate}
            defaultValue={checkInDate}
            placeHolder={"Check-In Date"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <CalenderInput
            setDate={setCheckOutDate}
            defaultValue={checkOutDate}
            placeHolder={"Check-Out Date"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <Select
            setSelect={setCity}
            defaultValue={city}
            placeHolder={"City"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <div className="px-3 py-2">
            <p className="text-[#5F6369] text-[12.5px] font-bold font-serif">
              Rooms
            </p>
            <input
              className="w-[100px] bg-transparent focus:outline-none"
              value={room}
              min={1}
              onChange={(e) => setRoom(e.target.value)}
              type="number"
            />
          </div>
        </div>
        <div className="md:w-[275px] relative">
          <PassengerInput setPassenger={setPassenger} passenger={passenger} />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-yellow-500 text-white font-serif font-bold px-8 py-2 mt-2 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hotel;
