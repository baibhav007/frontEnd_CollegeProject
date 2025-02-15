import React, { useState } from "react";

function College_placement() {
  const placement_company = [
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
  ];
  const rows = [];
  for (let i = 0; i < placement_company.length; i += 5) {
    rows.push(placement_company.slice(i, i + 5));
  }
  const [visibleCompanies, setVisibleCompanies] = useState(5);
  const handleNext = () => {
    if (visibleCompanies + 5 <= placement_company.length) {
      setVisibleCompanies(visibleCompanies + 5);
    } else {
      setVisibleCompanies(placement_company.length); // Show all companies
    }
  };
  return (
    <div>
      <div className="mx-10 my-4">
        <h1 className="text-3xl">Placement</h1>
        <div className="relative w-full max-w-4xl mx-auto p-6 rounded-lg ">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Highest and Average Package
          </h1>
          <div className="relative w-full h-10 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="absolute h-full bg-yellow-500 flex items-center justify-end px-4 text-white text-sm font-bold rounded- cursor-pointer"
              style={{ width: "87%" }}
              title="32.05 L - Highest Package"
            >
              32.05 L
            </div>
          </div>
          <div className="flex justify-between text-sm mt-4 text-gray-700">
            {[
              "0",
              "3.2 L",
              "6.4 L",
              "9.6 L",
              "12.8 L",
              "18 L",
              "24 L",
              "32 L",
              "40 L",
            ].map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        </div>
        {/* placement company */}
        <div className="sm:hidden grid grid-cols-2 gap-6 mt-6">
          {placement_company
            .slice(0, visibleCompanies)
            .map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow-md text-center"
              >
                <p className="text-lg font-semibold text-gray-800">{company}</p>
              </div>
            ))}
        </div>

        {/* Next button to load more companies */}
        <div className="text-center mt-4">
          {visibleCompanies < placement_company.length && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all sm:hidden"
            >
              More
            </button>
          )}

          <div className="overflow-x-auto hidden sm:block mt-6">
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-2xl table-fixed">
              <thead className="bg-gray-100 border-b border-gray-300 text-center">
                <tr>
                  <th colSpan="5" className="px-4 py-2 text-lg">
                    Companies
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 text-xl border-b border-gray-300"
                  >
                    {row.map((company, index) => (
                      <td
                        key={index}
                        className="px-4 py-2 border-r border-gray-300 text-center"
                      >
                        {company}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default College_placement;
