import React from "react";

function Update_banner() {
  const updateexam = [
    { id: 1, university: "CCSU", name: "New Exam Schedule after 21 March" },
    { id: 2, university: "AKTU", name: "Change in Examination Timetable" },
    { id: 3, university: "CCSU", name: "Change in Examination Fees" },
    { id: 4, university: "AKTU", name: "New Admissions Policy" },
    { id: 5, university: "CCSU", name: "New Student Financial Aid Program" },
    { id: 6, university: "AKTU", name: "New Admissions Policy" },
    { id: 7, university: "CCSU", name: "New Student Financial Aid Program" },
    { id: 8, university: "AKTU", name: "New Admissions Policy" },
    { id: 9, university: "CCSU", name: "New Student Financial Aid Program" },
    { id: 10, university: "AKTU", name: "New Admissions Policy" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-4">
        <h1 className="text-lg sm:text-2xl font-semibold">Latest Updates</h1>
      </div>

      {/* Updates List */}
      <div className="w-full bg-white shadow-md">
        {updateexam.map((update, index) => (
          <div
            key={update.id}
            className={`flex flex-row  items-start sm:items-center sm:px-8 py-4 border-b last:border-none cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
            } w-full`}
          >
            <h2 className="font-bold text-sm sm:text-lg text-blue-600 mb-1 sm:mb-0 w-full sm:w-auto ml-3 sm:ml-0">
              {update.university}:
            </h2>
            <p className="text-gray-700 text-sm sm:text-base -ml-42 sm:ml-2 w-full sm:w-auto">
              {update.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Update_banner;
