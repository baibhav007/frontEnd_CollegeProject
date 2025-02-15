import React, { useState } from "react";
import Location from "../assets/Image/location.png";
import Direction from "../assets/Image/send.png";
import sunny from "../assets/Image/sunny.png";
import sink from "../assets/Image/sink.png";
import sleep from "../assets/Image/sleeping.png";
import Rating from "../assets/Image/rating.png";
import Hostel from "../assets/Image/innerhostel.jpg";
import Visit_form from "./visit_form";

function Hostel_list() {
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const rooms = [
    {
      id: 1,
      name: "Poonam Hostel",
      image: Hostel,
      ac: "AC/Non-AC",
      ratings: "4.5/5",
      distance: "7.4 km",
      price: "₹8500/month",
      luxury: "Premium",
      gender: "Female",
      facilities: [
        "Free Wi-Fi ",
        "Room Service ",
        "24/7 Room Service ",
        "Air Conditioning",
      ],
    },
    {
      id: 2,
      name: "Ashok Hostel",
      image: Hostel,
      ac: "AC/Non-AC",
      ratings: "4.5/5",
      distance: "7.4 km",
      price: "₹7500/month",
      luxury: "Medium",
      gender: "Male",
      facilities: [
        "Free Wi-Fi ",
        "Room Service ",
        "24/7 Room Service ",
        "Air Conditioning",
      ],
    },
    {
      id: 3,
      name: "Ashok Hostel",
      image: Hostel,
      ac: "AC/Non-AC",
      ratings: "4.5/5",
      distance: "7.4 km",
      price: "₹6500/month",
      luxury: "Cheaper",
      gender: "Male",
      facilities: [
        "Free Wi-Fi ",
        "Room Service ",
        "24/7 Room Service ",
        "Air Conditioning",
      ],
    },
  ];
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <div className="flex flex-col w-full mx-auto mt-4 space-y-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={room.image}
                className="w-full h-60 md:h-80 object-cover"
                alt="Room"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4 md:p-6">
              {/* Left Content */}
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold">{room.name}</h1>

                {/* Location */}
                <div className="flex items-center mt-2 bg-gray-200 px-3 py-1 rounded-full w-fit">
                  <img src={Location} className="h-4 mr-2" alt="Location" />
                  <p className="text-sm">{room.distance} from your College</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  <div className="flex items-center">
                    <img src={sunny} className="h-5 mr-2" alt="AC" />
                    <p>{room.ac}</p>
                  </div>
                  <div className="flex items-center">
                    <img src={sink} className="h-5 mr-2" alt="Washroom" />
                    <p>Attach washroom</p>
                  </div>
                  <div className="flex items-center">
                    <img src={sleep} className="h-5 mr-2" alt="Single Bed" />
                    <p>Single bed</p>
                  </div>
                  <div className="flex items-center">
                    <img src={sleep} className="h-5 mr-2" alt="Double Bed" />
                    <p>Double bed</p>
                  </div>
                  <div className="flex items-center">
                    <img src={sleep} className="h-5 mr-2" alt="Triple Bed" />
                    <p>Triple bed</p>
                  </div>
                </div>

                {/* Facilities & Price */}
                <p className="mt-4 text-sm text-gray-700">{room.facilities}</p>
                <p className="mt-4 text-gray-600 text-sm">Starts from</p>
                <p className="text-xl ">{room.price}</p>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between mt-4 md:mt-0">
                {/* Labels */}
                <div className="flex sm:justify-end space-x-3">
                  <p className="bg-yellow-500 text-sm px-3 py-1 rounded-full shadow-md">
                    {room.luxury}
                  </p>
                  <p className="bg-gray-300 text-sm px-3 py-1 rounded-full shadow-md">
                    {room.gender}
                  </p>
                </div>

                {/* View Direction */}
                <div className="cursor-pointer flex items-center border text-sm px-4 py-2 rounded-full mt-4 md:ml-auto w-fit">
                  <img src={Direction} className="h-4 mr-2" alt="Direction" />
                  <p>View direction</p>
                </div>

                {/* Ratings */}
                <div className="flex items-center sm:justify-end mt-2">
                  <img src={Rating} className="h-4 mr-2" alt="Rating" />
                  <p>{room.ratings}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row justify-end items-center gap-3 mt-4">
                  <button
                    className="w-full md:w-auto px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200"
                    onClick={() => {
                      setSelectedHostel(room.name);
                      setShowVisitForm(true);
                    }}
                  >
                    Schedule a Visit
                  </button>
                  {showVisitForm && (
                    <Visit_form
                      selectedHostel={selectedHostel}
                      onClose={() => setShowVisitForm(false)}
                      rooms={rooms}
                    />
                  )}
                  <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
                    Request to Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hostel_list;
