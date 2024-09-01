import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../../context/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


function Cart() {


    const { cartDetails, setCartDetails, getLoggedUserCart, clearAllUserCart } = useContext(CartContext)






    async function getCartDetails() {

        const res = await getLoggedUserCart()

        setCartDetails(res)




    }

    async function clearAll() {

        await clearAllUserCart()
        getCartDetails()


    }


    useEffect(() => {



        getCartDetails()



    }, [])




    return (





        <>

            {cartDetails ? <div className="cart-section px-10 mt-24 mb-48">
                <div className="container mx-auto mt-10">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-20 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-1 py-3 flex justify-start gap-3 items-center">
                                        Action
                                        <button onClick={clearAll} className='p-2 bg-red-500 rounded-lg'>Clear All</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>




                                {cartDetails?.data?.products?.map((product) => <CartItem product={product} key={product._id} />)}


                            </tbody>
                            <tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className=''>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="px-5 py-4 font-semibold text-gray-900 dark:text-white text-base">
                                        ${cartDetails?.data?.totalCartPrice}
                                    </td>
                                    <td className=" py-4 font-semibold text-gray-900 dark:text-white text-base">
                                        <Link to={`chekOut/${cartDetails?.cartId}`} className='bg-green-500 px-3 py-3 rounded-lg w-1/2 mx-auto '>Check Out</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
                : <Loading />}
        </>



    )



}

export default Cart
