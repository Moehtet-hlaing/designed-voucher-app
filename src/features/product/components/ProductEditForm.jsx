import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import reactUseCookie from "react-use-cookie";
import { fetchProduct, updateProduct } from "../../../services/product";

tailspin.register();


const ProductEditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {id} = useParams();
  const [token] = reactUseCookie("my_token");
  const fetcher = (url) => fetchProduct(url, token);
  const {mutate} = useSWRConfig();

  
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );
  // console.log(import.meta.env.VITE_API_URL + `products/${id}`);
 
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const handleUpdateProduct = async ({ product_name, price, back_to_product_list }) => {
    setIsSending(true);
    try {
      const res = await updateProduct(id, product_name, price, token);
      if (res.ok) {
        mutate(import.meta.env.VITE_API_URL + "/products");
        if (back_to_product_list) {
          navigate("/dashboard/products");
        }
        const result = await res.json();
        toast.success("product updated successfully");
        mutate(import.meta.env.VITE_API_URL + `/products/${id}`);
      } else {
        const result = await res.json();
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("An error occurred while updating the product.");
    } finally {
      setIsSending(false);
    }
  };

if(isLoading) return <p>loading...</p>;
console.log(data);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Edit Product</h1>
      <p className="mb-3 text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eligendi.
        Consequuntur velit deleniti similique repellendus mollitia!
      </p>
      {isLoading ? <p>loading...</p> : <form onSubmit={handleSubmit(handleUpdateProduct)} action="">
        <div className="mb-3">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
              errors.product_name ? "text-red-500" : ""
            }`}
          >
            Product Name
          </label>
          <input
          defaultValue={data?.data?.product_name}
            type="text"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 ${
              errors.product_name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="eg.apple"
            required
          />
          {errors.product_name?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name is required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name must be at least 3 characters
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name must be less than 20 characters
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="last_name"
            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
              errors.price ? "text-red-500" : ""
            }`}
          >
            Price
          </label>
          <input
            type="number"
            defaultValue={data?.data?.price}
            {...register("price", { required: true })}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
               errors.price
                 ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                 : ""
             }`}
            placeholder="eg.500"
            required
          />
          {errors.price && (
            <p role="alert" className="text-red-500 text-sm">
              Price is required
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            required
            id="all-correct"
            type="checkbox"
            {...register("all_correct")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            Make sure all fields are correct.
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            defaultChecked
            id="back-to-product-list"
            type="checkbox"
            {...register("back_to_product_list")}
          
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
          
            htmlFor="back-to-product-list"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            Back to product list
          </label>
        </div>
        <button
          required
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
         <div className="flex justify-between items-center">
         Update Product
          {isSending && ( // Default values shown
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}
         </div>
        </button>
        <Link
          to="/dashboard/products"
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cancel
        </Link>
      </form>}
    </div>
  );
};

export default ProductEditForm;


