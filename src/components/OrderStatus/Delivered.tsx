import React from "react";

const Delivered = () => {
  return (
    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-200 px-2.5 py-0.5 text-xs font-medium text-green-900">
      <svg
        className="me-1 h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
      Delivered
    </dd>
  );
};

export default Delivered;
