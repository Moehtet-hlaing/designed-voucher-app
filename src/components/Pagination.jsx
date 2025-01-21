import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Pagination = ({ meta: { links, from, to, total }, updateFetchUrl }) => {
  // const handlePrevBtn = () => updateFetchUrl(prev);
  // const handleNextBtn = () => updateFetchUrl(next);
  return (
    <div className="">
      <div className="flex justify-between items-center p-4">
        {/* Help text */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing {from} to {to} of {total} Entries
        </span>
        {/* Buttons */}
        <div className="inline-flex mt-2 xs:mt-0">
          {/* <button
            disabled={!prev}
            onClick={handlePrevBtn}
            className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <HiArrowLeft />
          </button>
          <button
            disabled={!next}
            onClick={handleNextBtn}
            className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <HiArrowRight />
          </button> */}
          {links.map((link) => {
            return (
              <button
                key={link.label}
                disabled={!link.url}
                onClick={() => updateFetchUrl(link.url)}
                className={`flex items-center justify-center size-8   bg-transparent border text-sm font-medium
                border-y-slate-600 first:border-s-slate-600 last:border-e-slate-600 first:rounded-s-lg last:rounded-e-lg   disabled:opacity-50 disabled:pointer-events-none ${link.active ? "bg-slate-600 text-white " : ""} disabled:opacity-50 disabled:pointer-events-none`}
              >
                {link.label === "&laquo; Previous" ? (
                  <HiArrowLeft />
                ) : link.label === "Next &raquo;" ? (
                  <HiArrowRight />
                ) : (
                  link.label
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
