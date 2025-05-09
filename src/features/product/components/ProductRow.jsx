import  { useState } from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { zoomies } from "ldrs";
import ShowDateTime from "../../../components/ShowDateTime";
import { destroyProduct } from "../../../services/product";
import reactUseCookie from "react-use-cookie";

zoomies.register();

// Default values shown

const ProductRow = ({ product: { id, product_name, price, created_at, updated_at } }) => {
  
  const { mutate } = useSWRConfig();
  const [deleting, setDeleting] = useState(false);
  const [token] = reactUseCookie("my_token");

  const handleDeleteBtn = async () => {
    try {
      setDeleting(true);
      const res = await destroyProduct(id, token);

      if (res.ok) {
        mutate(import.meta.env.VITE_API_URL + "/products");
        toast.success("Product deleted successfully");
      } else {
        const result = await res.json();
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("An error occurred while deleting the product.");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800
     border-b dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
       <ShowDateTime timestamp = {created_at}/> 
      </td>
      <td className="px-6 py-4 text-end">
       <ShowDateTime timestamp = {updated_at}/> 
      </td>
      <td className="px-4 py-2 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
          to = {`/dashboard/product-edit/${id}`}
            type="button"
            className="flex justify-center items-center size-10 text-sm font-medium text-slate-600 bg-transparent border border-slate-600 rounded-s-lg
            "
          >
            <HiPencil />
          </Link>
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="size-10 text-sm font-medium text-slate-600 bg-transparent border 
            border-slate-600 rounded-e-lg  dark:border-white 
            dark:text-white flex justify-center items-center"
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
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;