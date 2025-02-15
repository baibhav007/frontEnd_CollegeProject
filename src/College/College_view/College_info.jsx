import React from "react";
import college from "../../../public/college_view.json";
function College_info() {
  return (
    <div>
      <div>
        <h1 className="text-2xl mx-10 my-2 text-justify font-bold">Info</h1>
        {college.map((item, id) => (
          <h1 key={id} className="text-sm sm:text-xl mx-10 my-2 text-justify">
            {item.info1} <br />
            <div className="text-start">
              <li>{item.info2} </li>
              <li className="text-justify">{item.info3} </li>
              <li>{item.info4}</li>
            </div>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default College_info;
