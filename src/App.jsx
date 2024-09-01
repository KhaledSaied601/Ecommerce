import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemplateName from '../Templates/TemplateName/TemplateName'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'
import UserContextProvider from '../context/UserContext/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedAuth from './components/ProtectedAuth/ProtectedAuth'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContextProvider from '../context/CartContext/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import Allorders from './components/Allorders/Allorders'
import CategoryDetail from './components/CategoryDetail/CategoryDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import WishListContextProvider from '../context/WishListContext/WishListContext'
import WishList from './components/WishList/WishList'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import ResetPassword from './components/ResetPassword/ResetPassword'


function App() {



  const routing = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [


        { path: '', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "wishList", element: <ProtectedRoute> <WishList /> </ProtectedRoute> },
        { path: "/productDetails/:id", element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute> },
        { path: "category/:name/:id", element: <ProtectedRoute> <CategoryDetail /> </ProtectedRoute> },
        { path: "cart", element: <ProtectedRoute> <Cart /> </ProtectedRoute> },
        { path: "cart/chekOut/:id", element: <ProtectedRoute> <CheckOut /> </ProtectedRoute> },
        { path: "/allorders", element: <ProtectedRoute> <Allorders /> </ProtectedRoute> },
        { path: "login", element: <ProtectedAuth><LogIn /></ProtectedAuth> },
        { path: "/forgetPassword", element: <ProtectedAuth><ForgetPassword /></ProtectedAuth> },
        { path: "/verifyEmail", element: <ProtectedAuth><VerifyEmail /></ProtectedAuth> },
        { path: "/resetPassword", element: <ProtectedAuth><ResetPassword /></ProtectedAuth> },
        { path: "signup", element: <ProtectedAuth><SignUp /></ProtectedAuth> },


      ]
    }
  ])



  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    }
  })


  return (
    <>
      <UserContextProvider>

        <CartContextProvider>

          <WishListContextProvider>

            <QueryClientProvider client={client}>




              <RouterProvider router={routing}>

                <LayOut />

              </RouterProvider>




              <ReactQueryDevtools />

            </QueryClientProvider>

          </WishListContextProvider>


        </CartContextProvider>


      </UserContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  )
}

export default App
