import React from "react";
import logo from "../assets/Image/iimtlogo.png";
import rating from "../assets/Image/rating.png";
import nirf from "../assets/Image/nirf.png";

function Top_colleges() {
  const data = [
    {
      id: 1,
      rank: "#1",
      name: "IIMT College",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.5 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 2,
      rank: "#2",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 3,
      rank: "#3",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 4,
      rank: "#4",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 5,
      rank: "#5",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 6,
      rank: "#6",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 7,
      rank: "#7",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 8,
      rank: "#8",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 9,
      rank: "#9",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
    {
      id: 10,
      rank: "#10",
      name: "Galgotias University",
      ranking: "#1 out of 50 in india 2024",
      cutoff: "JEE-Advance 2024 cut off 68",
      application: "01-04-2025 - 31-10-2025",
      fee: "1.8 Lac",
      feeyear: "1st year fees",
      logo: { logo },
      location: "Greater Noida, Uttar Pradesh",
      rating: "3/5",
    },
  ];

  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Top 10 Colleges in Greater Noida
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-2 py-2">Rank</th>
                <th className="px-4 py-2">College</th>
                <th className="px-4 py-2">Ranking</th>
                <th className="px-4 py-2">Cutoff</th>
                <th className="px-4 py-2">Application Deadline</th>
                <th className="px-4 py-2">Fees</th>
              </tr>
            </thead>
            <tbody>
              {data.map((college) => (
                <tr
                  key={college.id}
                  className="border-t hover:bg-gray-50 text-sm"
                >
                  <td className="px-4 py-2 font-semibold text-gray-700">
                    {college.rank}
                  </td>
                  <td className="md:flex px-4 py-2">
                    <img src={logo} className="h-8 mr-2" loading="lazy" />
                    <div>
                      <span className="font-medium">{college.name}</span>
                      <br />
                      <div className="md:flex">
                        <span className="text-sm text-gray-500 items-center">
                          {college.location} |{" "}
                        </span>
                        <span className="flex items-center">
                          <img
                            src={rating}
                            className="h-2 ml-2 mr-1"
                            loading="lazy"
                          />{" "}
                          {college.rating}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="md:flex items-center">
                      <img src={nirf} className="h-3 mr-2" loading="lazy" />
                      <span className="font-medium">{college.ranking}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{college.cutoff}</td>
                  <td className="px-4 py-2">{college.application}</td>
                  <td className=" px-4 py-2">
                    <span className="font-medium">{college.fee}</span>
                    <br />
                    <span className="text-sm text-gray-500 flex items-center">
                      {college.feeyear}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Top_colleges;
