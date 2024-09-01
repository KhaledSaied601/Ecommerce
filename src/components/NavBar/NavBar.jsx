
import React, { useContext, useEffect, useState } from 'react'
import Style from './NavBar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../../context/UserContext/UserContext';
import { CartContext } from '../../../context/CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBookmark, faCartShopping, faHouse, faRightToBracket } from '@fortawesome/free-solid-svg-icons';



function NavBar() {


    const { Token, setToken } = useContext(userContext)


    const { getLoggedUserCart, cartDetails, setCartDetails } = useContext(CartContext)

    const [isDark, setIsDark] = useState(null)


    async function getCartDetails() {

        const res = await getLoggedUserCart()

        setCartDetails(res)


    }

    function ToggleDarkMode() {
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark','bg-gray-800');
                document.documentElement.classList.remove('bg-neutral-200');
                localStorage.setItem('color-theme', 'dark');
                setIsDark(true)
            
            } else {
                document.documentElement.classList.remove('dark','bg-gray-800');
                document.documentElement.classList.add('bg-neutral-200');
                localStorage.setItem('color-theme', 'light');
                setIsDark(false)

            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark','bg-gray-800');
                document.documentElement.classList.add('bg-neutral-200');
                localStorage.setItem('color-theme', 'light');
                setIsDark(false)

            } else {
                document.documentElement.classList.add('dark','bg-gray-800');
                document.documentElement.classList.remove('bg-neutral-200');
                localStorage.setItem('color-theme', 'dark');
                setIsDark(true)

            }

        }
    }
    useEffect(() => {

        getCartDetails()

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
        }
        else {
            setIsDark(false)
        }

    }, [])



    function signOut() {

        localStorage.removeItem('Token')
        setToken(null)



    }




    return (
        <>

            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-30 top-0">

                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">



                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{ color: "#166534", }} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
                    </a>



                    <div className='flex flex-row justify-start items-center gap-5'>

                        <button onClick={ToggleDarkMode} id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                            {isDark ? <svg id="theme-toggle-dark-icon" class=" w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> :
                                <svg id="theme-toggle-light-icon" class=" w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
                        </button>

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto   " id="navbar-default">


                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {Token ? <>


                                    <li>
                                        <NavLink to='' className="  block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:dark:hover:text-green-500 md:p-0 dark:text-white md:dark:text-white-500  " aria-current="page"><FontAwesomeIcon icon={faHouse} size="xl" className='duration-200 hover:-rotate-12' /></NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="cart" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "><FontAwesomeIcon icon={faBagShopping} size='xl' className='duration-200 hover:-rotate-12' /> {cartDetails?.numOfCartItems}</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="wishList" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "><FontAwesomeIcon icon={faBookmark} size='xl' className='duration-200 hover:-rotate-12' /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={signOut} to="login" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FontAwesomeIcon icon={faRightToBracket} size="xl" className='duration-200 hover:rotate-12' /></NavLink>
                                    </li>
                                </> : null}



                                {Token ? null
                                    : <>
                                        <li>
                                            <NavLink to="login" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="signup" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</NavLink>
                                        </li>
                                    </>}




                            </ul>
                        </div>

                    </div>

                </div>
            </nav>


        </>
    )
}

export default NavBar
