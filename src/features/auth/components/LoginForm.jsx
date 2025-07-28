import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import reactUseCookie from "react-use-cookie";
import { login } from '../../../services/auth';
import ButtonSpinner from '../../../components/ButtonSpinner';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userCookie, setUserCookie] = reactUseCookie("user");
  const {
    register,
    handleSubmit, 
    formState: { errors ,isSubmitting},
  } = useForm();
  const [token,setToken] = reactUseCookie("my_token");
  const handleLogin = async (data) => {

    const res = await login(data);
    const result = await res.json();
    if (res.status === 200) {
      console.log(result);
      setUserCookie(JSON.stringify(result.user));
      toast.success("Login successfully");
      setToken(result.token);
      navigate("/dashboard");
    } else {
      toast.error(result.message)
    }
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        {...register("email")}
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-xs md:placeholder:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        type="password"
        {...register("password")}
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <div className="ml-3 text-xs sm:text-sm">
          <label
            htmlFor="remember"
            className="text-gray-500 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
      </div>
      <a
        href="#"
        className="text-xs sm:text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Forgot password?
      </a>
    </div>
    <button
      type="submit"
      className="flex justify-center items-center gap-3 w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Sign in
      {isSubmitting && <ButtonSpinner />}
    </button>
    <p className="text-xs sm:text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <Link
        to="/register"
        disable={isSubmitting}
        className=" font-medium disabled:cursor-not-allowed disabled:opacity-50 text-primary-600 hover:underline dark:text-primary-500"
      >
        Sign up
      </Link>
    </p>
  </form>
  )
}

export default LoginForm