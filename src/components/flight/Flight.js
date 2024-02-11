import React, { useState } from "react";
import moment from "moment";
import Select from "../input/Select";
import CalenderInput from "../input/CalendarInput";
import PassengerInput from "../input/PassengerInput";

const Flight = () => {
  const [departure, setDeparture] = useState("Dhaka");
  const [arrival, setArrival] = useState("Rangpur");
  const [arrivalDate, setArrivalDate] = useState(moment().format("YYYY-MM-DD"));
  const [returnDate, setReturnDate] = useState();
  const [passenger, setPassenger] = useState({
    adult: 1,
    children: 0,
  });

  return (
    <div className="mx-[15px]">
      <div className="border border-yellow-500 rounded-md flex md:flex-row flex-col">
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <Select
            setSelect={setDeparture}
            defaultValue={departure}
            placeHolder={"Departure City"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <Select
            setSelect={setArrival}
            defaultValue={arrival}
            placeHolder={"Arrival City"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <CalenderInput
            setDate={setArrivalDate}
            defaultValue={arrivalDate}
            placeHolder={"Departure Date"}
          />
        </div>
        <div className="md:w-[250px] w-full relative border md:border-r-yellow-500 md:border-b-0 border-b-yellow-500">
          <CalenderInput
            setDate={setReturnDate}
            defaultValue={returnDate}
            placeHolder={"Return Date"}
          />
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

export default Flight;
