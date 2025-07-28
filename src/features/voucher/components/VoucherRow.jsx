import React, { useState } from "react";
import {
  HiArrowRight,
  HiOutlineTrash,
  HiPencil,
  HiPlus,
  HiSearch,
} from "react-icons/hi";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { zoomies } from "ldrs";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Avatar from "react-avatar";
import ShowDateTime from "../../../components/ShowDateTime";
import { destroyVoucher } from "../../../services/voucher";
import reactUseCookie from "react-use-cookie";

zoomies.register();

const VoucherRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    sale_date,
    tax,
    total,
    created_at,
  },
}) => {
  const { mutate } = useSWRConfig();
  const [deleting, setDeleting] = useState(false);
  const [token] = reactUseCookie("my_token");

  const handleDeleteBtn = async () => {
    try {
      setDeleting(true);
      const res = await destroyVoucher(id, token);

      if (res.ok) {
        mutate(import.meta.env.VITE_API_URL + "/vouchers");
        toast.success("Voucher deleted successfully");
      } else {
        const result = await res.json();
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting voucher:", error);
      toast.error("An error occurred while deleting the voucher.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="p-2 sm:px-6 sm:py-2 ">
        <div className="flex flex-col">
          <div className=" text-[7px] md:text-sm">{voucher_id}</div>
          <div className=" text-[6px] md:text-xs">{sale_date}</div>
        </div>
      </td>
      <th
        scope="row"
        className="p-2 sm:px-6 sm:py-2 flex  justify-start items-center gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className=" hidden md:flex justify-center items-center scale-75 md:scale-100">
          <Avatar
            name={customer_name}
            round={true}
            size="35"
            textSizeRatio={2}
          />
        </div>
        <div className=" flex flex-col justify-center items-start">
          <span className="font-bold text-[10px] md:text-sm">{customer_name}</span>
          <span className="font-slate-600 text-[6px] md:text-xs">{customer_email}</span>
        </div>
      </th>
      <td className="p-2 sm:px-6 sm:py-2 text-[10px] md:text-sm text-end">{tax}</td>
      <td className="p-2 sm:px-6 sm:py-2 text-[10px] md:text-sm text-end">{total} </td>
      <td className="p-2 sm:px-6 sm:py-2 text-end">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className=" px-2 sm:px-4 py-2 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={handleDeleteBtn}
            type="button"
            className=" px-1.5 sm:px-4 py-2 text-[12px] sm:text-sm font-medium text-slate-600 bg-transparent border border-slate-600 rounded-s-lg hover:bg-slate-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-slate-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            {deleting ? (
              <l-zoomies
                size="10"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
              ></l-zoomies>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
          <Link
            to={`/dashboard/voucher-details/${id}`}
            className="px-1.5 sm:px-4 py-2 text-[12px] sm:text-sm font-medium text-slate-600 bg-transparent border border-slate-600 rounded-e-lg hover:bg-slate-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-slate-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <HiArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherRow;
