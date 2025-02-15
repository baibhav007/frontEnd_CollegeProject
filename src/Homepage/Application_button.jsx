import React, { useState } from "react";
import Applicationform from "./Applicationform";

function Application_button() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="text-center text-6xl mt-1 sm:mt-4">
      <button
        className="px-6 py-2 sm:my-10 text-xl sm:text-4xl text-slate-50 bg-gradient-to-r from-blue-500 to-blue-600 transition-colors rounded-2xl shadow-md hover:bg-blue-500 hover:text-slate-100"
        onClick={() => {
          setShowForm(true);
        }}
      >
        Start Application and Registation
      </button>
      {showForm && <Applicationform onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default Application_button;
