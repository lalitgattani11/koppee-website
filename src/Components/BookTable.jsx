import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const people = ["Person", "1 Person", "2 Persons", "3 Persons", "More..."];

function BookTable() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div
      id="reservation"
      className="w-full bg-[#FFFBF2] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row bg-[#2e1e17] rounded-lg overflow-hidden shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center relative bg-[url('/images/bg.jpg')] bg-cover bg-center text-white p-8 md:p-12">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-2">
              30% OFF
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              For Online Reservation
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-white">
              Skip the wait and reserve your favorite spot at Koppee in just a
              few clicks. Whether you're planning a casual coffee date, a
              business meeting, or a solo chill session, we’ve got your seat
              ready. Book in advance to enjoy a seamless and personalized coffee
              experience.
            </p>
            <ul className="space-y-3 text-white text-sm sm:text-base font-bold">
              <li className="flex items-start gap-2">
                <span>✔</span> Your Perfect Brew Awaits – Book Your Table Now!
              </li>
              <li className="flex items-start gap-2">
                <span>✔</span> Reserve your cozy coffee corner today!
              </li>
              <li className="flex items-start gap-2">
                <span>✔</span> Brew moments that matter — we’ve saved you a
                seat.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#2e1e17] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book Your Table
          </h2>
          <form
            action="https://formspree.io/f/myzpgrjd"
            method="POST"
            className="flex flex-col space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#ddd] focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#ddd] focus:outline-none"
              required
            />

            {/* Date Picker */}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#ddd] focus:outline-none"
            />

            {/* Time Picker */}
            <DatePicker
              selected={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select a time"
              className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#ddd] focus:outline-none"
            />

            {/* Hidden Inputs for Formspree */}
            <input
              type="hidden"
              name="bookingDate"
              value={
                selectedDate ? selectedDate.toISOString().split("T")[0] : ""
              }
            />
            <input
              type="hidden"
              name="bookingTime"
              value={
                selectedTime
                  ? selectedTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
            />

            <select
              name="person"
              className="w-full px-5 py-3 rounded-md  bg-[#2e1e17] border border-[#C87E4F] text-white focus:outline-none appearance-none"
              required
            >
              <option value="" disabled selected hidden>
                Select Person
              </option>
              <option value="1 Person">1 Person</option>
              <option value="2 Persons">2 Persons</option>
              <option value="3 Persons">3 Persons</option>
              <option value="More...">More...</option>
            </select>

            <button
              type="submit"
              className="bg-[#C87E4F] text-[#2e1e17] font-semibold py-3 rounded-md hover:bg-[#e29b6e] transition-all duration-300"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
