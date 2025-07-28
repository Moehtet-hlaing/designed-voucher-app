import { useRef, useState } from "react";
import {HiSearch} from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { debounce } from "lodash";
import reactUseCookie from "react-use-cookie";
import VoucherRow from "./VoucherRow";
import Pagination from "../../../components/Pagination";
import VoucherLoader from "./VoucherLoader";
import VoucherEmptyStage from "./VoucherEmptyStage";
import { fetchVouchers } from "../../../services/voucher";
import Sortable from "../../../components/Sortable";


const VoucherTable = () => {
  const [token] = reactUseCookie("my_token");
  const fetcher = (url) => fetchVouchers(url, token);
  const [fetchUrl, setFetchUrl] = useState(`${import.meta.env.VITE_API_URL}/vouchers`);
  const [params, setParams] = useSearchParams();
  // const [search,setSearch] = useState("");
  // const [fetchUrl, setFetchUrl] = useState(`${import.meta.env.VITE_API_URL}/vouchers`);
  const {data, error , isLoading} = useSWR(
    fetchUrl    ,fetcher);
    // const handleSearch = (e) => {
    //   setSearch(e.target.value);
    //   // console.log(e.target.value);
    // }

    const handleSearch = debounce((e) => {
      // setSearch(e.target.value);
      setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
    },500);
    const searchInput = useRef();
    const handleClear = () => {
      // setSearch("");
      searchInput.current.value = "";
    }
    const updateFetchUrl = (url) => setFetchUrl(url);
    const handleSort = (sortData) => {
      const searchParamString = new URLSearchParams(sortData).toString();
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/vouchers?${searchParamString}`
      );
      setParams(sortData);
    };
    // if(isLoading) return <p>Loading...</p>;
    // console.log(data);
  return (
    <section>
      
      <div className="sm:flex justify-between mb-3 sm:px-5">
                <div className=" md:order-2">
          <Link
            to={"/dashboard/sale"}
            type="button"
            className="text-white gap-2 bg-blue-700 hover:bg-be-lu800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px] sm:text-sm justify-center px-5 py-2.5 me-2 mb-2 flex items-center"
          >
            Create Sale
            <HiComputerDesktop />
          </Link>
        </div>
        <div className="md:order-1">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
            ref = {searchInput}
              onChange={handleSearch}
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search voucher"
            />
            {/* {search && <button onClick={handleClear} className="size-6 absolute top-0 end-1 bottom-0 m-auto text-red-600"><HiX className=" active:scale-90 duration-200"/></button>} */}
          </div>
        </div>

      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-[10px] sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[7px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-2 sm:px-6 sm:py-3">
                <Sortable sort_by={`voucher_id`} handleSort={handleSort}>#</Sortable>
              </th>
              <th scope="col" className="p-2 sm:px-6 sm:py-3">
              <Sortable sort_by={`customer_name`} handleSort={handleSort}>Customer</Sortable>
              </th>
              <th scope="col" className="p-2 sm:px-6 sm:py-3 text-end">
              <Sortable sort_by={`tax`} handleSort={handleSort} align={"right"}>Tax</Sortable>
              </th>
              <th scope="col" className="p-2 sm:px-6 sm:py-3 text-end">
              <Sortable sort_by={`total`} handleSort={handleSort} align={"right"}>Total</Sortable>
              </th>
              
              <th scope="col" className="p-2 sm:px-6 sm:py-3 text-end">
                Created At
              </th>
              <th scope="col" className="p-2 sm:px-6 sm:py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {isLoading ? (
              <VoucherLoader />
            ) : data?.data?.length ? (
              data?.data?.map((voucher) => (
                <VoucherRow key={voucher.id} voucher={voucher} />
              ))
            ) : (
              <VoucherEmptyStage />
            )}
          </tbody>
        </table>
      </div>
      {!isLoading &&       <Pagination links={data?.links} meta={data?.meta} updateFetchUrl={updateFetchUrl}/>
    }
          </section>
  );
};

export default VoucherTable;
