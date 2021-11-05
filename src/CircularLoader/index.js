import React from "react";
import "../tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Loader = function ({ message = "", color, height, width, textStyle }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        className={classNames(
          color || "text-blue-500",
          height || "h-24",
          width || "w-24",
          "animate-spin"
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={1}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>

      <h1 className={textStyle || "font-medium text-xl tracking-tight mt-6"}>
        {message}
      </h1>
    </div>
  );
};

export default Loader;