import React from "react";
import dataFromFAQ from "../Data/dataForFAQ";

function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = React.useState(null);
//  const [isSelected ,setisSelected] = React.useState(false)
     
  const handleQuestion = (questionId) => {
    setSelectedQuestion(questionId);
   // setisSelected(selectedQuestion == questionId ? true : false);
  };

  return (
    <div>
      {dataFromFAQ.map((item) => {
       // const isSelected = selectedQuestion === item.id;

        return (
          <div
            key={item.id}
            className="w-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6"
          >
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl overflow-hidden">
              {/* Question Row */}
              <div
                className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => handleQuestion(item.id)}
              >
                <h2 className="text-base font-medium text-gray-800">
                  {item.question}
                </h2>
                <span className="text-xl font-bold text-gray-500">
                  {isSelected ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              {isSelected && (
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
