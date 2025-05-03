import { Suspense, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import reactUseCookie from 'react-use-cookie'
import useUserStore from '../../../stores/useUserStore'
import Header from './Header'
import PageLoading from '../../../components/PageLoading'

const DashboardLayout = () => {
  const [token] = reactUseCookie("my_token");
  const {user,setUser} = useUserStore();
  const [userCookie] = reactUseCookie("user");

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  },[]);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [])


  if (!token) {
    return <Navigate to="/" />
  }
  return (
    <main className='flex flex-col min-h-screen p-5'>
    <Header />
    <Suspense fallback={<PageLoading />}>
      <Outlet />
    </Suspense>
    <Toaster position='top-right'/>
    </main>
  )
}

export default DashboardLayout