import { HiChevronRight, HiHome } from "react-icons/hi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle, links }) => {
  const navigate =useNavigate();
  return (
    <div className="flex justify-between items-center w-full gap-3 mb-5 border-y border-slate-200 py-1.5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1 text-[10px] sm:text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HiHome />
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <HiChevronRight />
                  {link.title}
                </Link>
              </li>
            ))}
          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 text-[10px] sm:text-sm font-medium text-gray-500 sm:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center size-6 sm:size-8 font-medium text-slate-600 bg-transparent border 
                    border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <LuChevronLeft />
        </button>
        <button
        onClick={() => navigate(1)}
          className="flex items-center justify-center size-6 sm:size-8 font-medium text-slate-600 bg-transparent border 
                    border-slate-600 first:rounded-s-lg last:rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BreadCrumb;
