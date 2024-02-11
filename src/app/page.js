"use client";
import Flight from "@/components/flight/Flight";
import Hotel from "@/components/hotel/Hotel";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bookingMode, setBookingMode] = useState("flight");
  return (
    <main className="md:w-[760px] lg:w-[1305px] w-[90%] mx-auto mt-10">
      <div className="grid grid-cols-2">
        <div
          className={`h-[50px] flex justify-center items-center cursor-pointer ${
            bookingMode === "flight" ? "bg-[#F9B200]" : "bg-[rgb(184,180,179)]"
          } rounded-tl-3xl`}
          onClick={() => setBookingMode("flight")}
        >
          <p className="text-base md:text-3.25xl text-white font-bold">
            Book A Flight
          </p>
        </div>
        <div
          className={`h-[50px] flex justify-center items-center cursor-pointer ${
            bookingMode === "hotel" ? "bg-[#F9B200]" : "bg-[rgb(184,180,179)]"
          } rounded-tr-3xl`}
          onClick={() => setBookingMode("hotel")}
        >
          <p className="text-base md:text-3.25xl text-white font-bold">
            Manage Booking
          </p>
        </div>
      </div>
      <div className="bg-slate-100 pt-[30px] pb-5 rounded-b-[15px]">
        {bookingMode === "flight" ? <Flight /> : <Hotel />}
      </div>
    </main>
  );
}
