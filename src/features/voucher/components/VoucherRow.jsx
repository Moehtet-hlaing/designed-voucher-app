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
      <td className="px-6 py-4 ">
        <div className="flex flex-col">
          <div className=" ">{voucher_id}</div>
          <div className=" text-xs">{sale_date}</div>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 flex  justify-start items-center gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <Avatar
            name={customer_name}
            round={true}
            size="35"
            textSizeRatio={2}
          />
        </div>
        <div className=" flex flex-col justify-center items-start">
          <span className="font-bold">{customer_name}</span>
          <span className="font-slate-600 text-xs">{customer_email}</span>
        </div>
      </th>
      <td className="px-6 py-4 text-end">{tax}</td>
      <td className="px-6 py-4 text-end">{total} </td>
      <td className="px-6 py-4 text-end">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-4 py-2 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-transparent border border-slate-600 rounded-s-lg hover:bg-slate-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-slate-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
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
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-transparent border border-slate-600 rounded-e-lg hover:bg-slate-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-slate-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <HiArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherRow;
