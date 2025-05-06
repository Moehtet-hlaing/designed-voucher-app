import reactUseCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../../stores/useUserStore";
import { storeUserName } from "../../../services/userProfile";
import useSWR from "swr";

const ChangeUserName = () => {

    const [userCookie, setUserCookie] = reactUseCookie("user");
    // const { name, email, profile_image } = JSON.parse(userCookie);
    const {user:{name,email,profile_image},setUser} = useUserStore();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm(); 
    const [token] = reactUseCookie("my_token");
  
    const handleUpdateName = async (data) => {
      // console.log(data);
      const res = await storeUserName(data, token);
      const result = await res.json();
      if (res.status === 200) {
        toast.success(result.message);
        setUserCookie(JSON.stringify(result.user));
        setUser(result.user);
      } else {
        toast.error(result.message);
      }
      reset();
    }

  return (
    <section>
      <form onSubmit={handleSubmit(handleUpdateName)} className="flex items-end border  p-10 gap-5 space-y-5 px-10 mt-5">
        <div className="">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
              errors.name ? "text-red-500" : ""
            }`}
          >
            Update Your Name
          </label>
          <input
            type="text"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            defaultValue={name}
            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5 ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
            required
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name is required
            </p>
          )}
          {errors.name?.type === "minLength" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name must be at least 3 characters
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p role="alert" className="text-red-500 text-sm ">
              Product name must be less than 20 characters
            </p>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex gap-3 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
        >
          Update
        </button>
      </form>
  </section>
  )
}

export default ChangeUserName