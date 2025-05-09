import  { useEffect, useRef, useState } from "react";
import {  HiPlus, HiSearch } from "react-icons/hi";
import useSWR from "swr";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import reactUseCookie from "react-use-cookie";
import ProductLoader from "./ProductLoader";
import ProductRow from "./ProductRow";
import ProductEmptyStage from "./ProductEmptyStage";
import { fetchProduct } from "../../../services/product";
import Pagination from "../../../components/Pagination";
import { debounce } from "lodash";
import { urlToParamObj } from "../../../utils/url";
import Sortable from "../../../components/Sortable";

const ProductTable = () => {
  const location = useLocation();
  const [token] = reactUseCookie("my_token");
  const searchRef = useRef();
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/products` + location.search
  );
  const [params, setParams] = useSearchParams();

  const fetcher = (url) => fetchProduct(url, token);

  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  useEffect(() => {
    if (params.get("q")) {
      searchRef.current.value = params.get("q");
    }
  }, []);

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, 500);
  const handleSort = (sortData) => {
    const searchParamString = new URLSearchParams(sortData).toString();
    setFetchUrl(
      `${import.meta.env.VITE_API_URL}/products?${searchParamString}`
    );
    setParams(sortData);
  };
  const updateFetchUrl = (url) => {
    setParams(urlToParamObj(url));
    setFetchUrl(url);
  };

  return (
    <section>
      <div className="flex justify-between mb-3 px-5">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              // value={search}
              ref={searchRef}
              onChange={handleSearchInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search product"
            />
          </div>
        </div>
        <div className="">
          <Link
            to="/dashboard/product-create"
            type="button"
            className="text-white gap-2 bg-blue-700 hover:bg-be-lu800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center"
          >
            Add new product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md mb-5 sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`id`} >
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`product_name`}>
                  Product Name
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                <Sortable handleSort={handleSort} sort_by={`price`} align="right">
                  Price
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductLoader />
            ) : data?.data?.length ? (
              data?.data?.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))
            ) : (
              <ProductEmptyStage />
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </section>
  );
};

export default ProductTable;
