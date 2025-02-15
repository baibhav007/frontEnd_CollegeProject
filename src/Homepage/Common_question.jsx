import React from "react";
import { useState } from "react";

function Common_question() {
  const ecq = [
    {
      id: 1,
      question: "What are the fees for the course?",
      answer:
        "The fees for the course are mentioned in the official website of the college.",
    },
    {
      id: 2,
      question: "What are the fees for the course?",
      answer:
        "The fees for the course are mentioned in the official website of the college.",
    },
    {
      id: 3,
      question: "What are the fees for the course?",
      answer:
        "The fees for the course are mentioned in the official website of the college.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="max-w-3xl mx-4 md:mx-auto">
      <h1 className="text-3xl text-center mb-6">Explore Common Questions</h1>
      {ecq.map((item, index) => (
        <div
          key={index}
          className="mb-4 rounded-lg shadow-md bg-white cursor-pointer"
          onClick={() => toggleAnswer(index)}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl">{item.question}</h2>
            <span className="text-2xl font-bold">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="px-6 py-4 bg-gray-50 rounded-lg">
              <p className="md:text-base text-xl">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Common_question;
