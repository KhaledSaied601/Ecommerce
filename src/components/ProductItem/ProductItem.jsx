import React, { useContext, useEffect, useState } from 'react'
import Style from './ProductItem.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext/CartContext'

import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { wishListContext } from '../../../context/WishListContext/WishListContext'
import Loading from '../Loading/Loading'


function ProductItem({ product }) {




    const { addProductToTheCart, setCartDetails } = useContext(CartContext)
    const { wishList, setUpdatedWishListIds, AddProductToWishList , RemoveProductFromWishList } = useContext(wishListContext)

    const [isFavorite, setIsFavorite] = useState(false)

    async function addProductToCart(id) {


        const res = await addProductToTheCart(id)
        setCartDetails(res)

    }


    useEffect(() => {

        if (wishList) {

            checkProductWishList()
        }




    }, [wishList])


    function checkProductWishList() {




        for (const p of wishList) {

            if (p.id === product?.id) {
                setIsFavorite(true)
            }
        }



    }


    async function makeProductFavorite(id) {

        const res = await AddProductToWishList(id)
        setUpdatedWishListIds(res?.data)



    }
    async function removeProductFavorite(id) {

        const res = await RemoveProductFromWishList(id)
        setUpdatedWishListIds(res?.data)



    }





    return (
        <>
            <Link to={`/productDetails/${product.id}`}>

                <div className=" w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">

                    {isFavorite ? <FaHeart className='absolute top-0 right-0 -translate-x-[50%] translate-y-[30%] overflow-hidden' size={'25px'} color='#c60619' onClick={(e) => { e.preventDefault(); setIsFavorite(false) ; removeProductFavorite(product?.id) }} /> :
                        <FaRegHeart className='absolute top-0 right-0 -translate-x-[50%] translate-y-[30%] overflow-hidden' size={'25px'} color='black' onClick={(e) => { e.preventDefault(); setIsFavorite(true); makeProductFavorite(product?.id) }} />}


                    <img class="rounded-t-lg w-full h-60 object-cover " src={product?.imageCover} alt={product?.title} />




                    <div class="px-5 pb-5">

                        <h5 class=" truncate text-lg font-semibold tracking-tight text-gray-900 dark:text-white mt-2">{product?.title.split(' ').slice(0, 2).join(' ')}</h5>
                        <h5 class=" truncate text-base font-semibold tracking-tight text-gray-900 dark:text-green-700">{product?.brand.name}</h5>

                        <p className=' truncate text-white '>{product?.description}</p>


                        <div class="flex items-center mt-2.5 mb-5">
                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">{product?.ratingsAverage}</span>
                        </div>



                        <div class="flex items-center justify-between  " >
                            <span class=" font-bold md:text-lg sm:text-sm text-gray-900 dark:text-white">${product?.price}</span>
                            <button onClick={(e) => { e.preventDefault(); addProductToCart(product?.id) }} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg sm:text-xs md:text-sm px-3 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to cart</button>
                        </div>

                    </div>
                </div>


            </Link>

        </>
    )
}

export default ProductItem
