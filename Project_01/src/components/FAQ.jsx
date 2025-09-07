import React from 'react'

function FAQ() {
  return (
    <div>
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
  {/* Question Row */}
  <div className="flex justify-between items-center cursor-pointer">
    <h2 className="text-lg font-semibold text-gray-800">
      What is React?
    </h2>
    <span className="text-2xl font-bold text-gray-600">+</span>
  </div>

  {/* Answer (hidden by default, you will toggle this with JS) */}
  <div className="mt-2 text-gray-600 text-sm hidden">
    React is a JavaScript library for building user interfaces. It helps
    create reusable UI components.
  </div>
</div>

    </div>
  )
}

export default FAQ
