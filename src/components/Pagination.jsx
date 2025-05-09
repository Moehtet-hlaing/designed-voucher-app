import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  meta: { total, to, from, links, per_page, current_page, last_page, path } = {
    total: 0,
    to: 0,
    from: 0,
    per_page: 0,
    current_page: 0,
    last_page: 0,
    links: [],
    path: "",
  },
  links: { prev, next, first, last } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },
  updateFetchUrl,
}) => {


  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;
  const pageLimit = [5, 10, 15, 20];

  const handlePageLimit = (e) => {
    setParams({ limit: e.target.value });
    updateFetchUrl(`${path}?limit=${e.target.value}`);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-4">

        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing {from} to {to} of {total} Entries
        </span>
        <div className=" flex gap-5 justify-center items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Page <b>{current_page ?? 0}</b> of <b>{last_page ?? 0}</b>
          </span>
          <select
            id=""
             className="flex items-center justify-center h-10 text-sm font-medium border-y border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            onChange={handlePageLimit}
            value={currentLimit}
          >
            {pageLimit.map((limit, index) => (
              <option key={index}>{limit}</option>
            ))}
          </select>

          <div className="inline-flex ">
            <button
              disabled={!prev}
              onClick={() => updateFetchUrl(prev)}
              className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LuChevronLeft />
            </button>
            <button
              disabled={!first}
              onClick={() => updateFetchUrl(first)}
              className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LuChevronsLeft />
            </button>
            <button
              disabled={!last}
              onClick={() => updateFetchUrl(last)}
              className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none first"
            >
              <LuChevronsRight />
            </button>
            <button
              disabled={!next}
              onClick={() => updateFetchUrl(next)}
              className="flex items-center justify-center size-10 font-medium text-slate-600 bg-transparent border 
            border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LuChevronRight />
            </button>

            {/* {links.map((link) => {
            return (
              <button
                key={link.label}
                disabled={!link.url}
                onClick={() => updateFetchUrl(link.url)}
                className={`flex items-center justify-center size-8  border text-sm font-medium
                border-y-slate-600 first:border-s-slate-600 last:border-e-slate-600 first:rounded-s-lg last:rounded-e-lg   disabled:opacity-50 disabled:pointer-events-none ${
                  link.active
                    ? "bg-blue-600 text-white !important"
                    : "bg-transparent text-slate-600"
                } disabled:opacity-50 disabled:pointer-events-none`}
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
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
