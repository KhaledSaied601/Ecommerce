import React, { useContext, useEffect, useState } from 'react'
import Style from './ProductDetails.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext/CartContext';
import useProduct from '../../Hooks/UseProducts/useProduct';
import ProductItem from '../ProductItem/ProductItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';


function ProductDetails() {

    const { data: products } = useProduct()

    const { addProductToTheCart, setCartDetails, updateCartProductQuantity } = useContext(CartContext)

    const { id } = useParams()


    const [coverImage, setCoverImage] = useState(null)




    const { data: productDetails, isLoading, isError, error } = useQuery({

        queryKey: ['productDetails', id],
        queryFn: () => axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`),
        select: (data) => data.data.data

    })



    async function addProductToCart(id) {


        const res = await addProductToTheCart(id)
        setCartDetails(res)

    }

    useEffect(() => {
        if (productDetails) {

            setCoverImage(productDetails.imageCover)
        }

    }, [productDetails])





    if (isLoading) {

        return <Loading/>

    }
    else {


        const productsFromCategory = products?.filter((p) => { return p?.subcategory[0]._id === productDetails?.subcategory[0]._id })


        return (
            <>

                <div className='container px-44 mx-auto mt-24 '>



                    <div className="inner bg-slate-800 p-5 mt-5 rounded-lg mx-auto grid grid-cols-3 gap-5 ">


                        <div className='flex flex-col items-start col-span-2'>

                            <div className='image  rounded-lg w-full  h-[350px] overflow-hidden bg-white'>

                                <img src={coverImage} className='h-full w-full rounded-lg  mx-auto  object-contain ' alt="" />

                            </div>

                            <div className='p-4'>

                                <h1 className='text-green-600 text-3xl font-semibold'>{productDetails.title}</h1>

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
                                    <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">{productDetails.ratingsAverage}</span>
                                </div>

                                <div class="flex items-center justify-between p-3 rounded-xl bg-gray-400-300 w-fit">
                                    <span class="text-2xl font-bold text-gray-900 dark:text-green-500">${productDetails.price}</span>
                                </div>

                                <p className='dark:text-white text-lg mb-5'>{productDetails.description}</p>
                                <button onClick={() => { addProductToCart(id) }} class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to cart</button>




                            </div>


                        </div>

                        <div className={`grid  grid-cols-2 gap-5 w-fit mx-auto mb-auto`}>
                            {productDetails?.images?.map((image) => {
                                return <img onClick={(e) => {
                                    setCoverImage(e.currentTarget.getAttribute('src'));
                                }} className=' h-36 object-contain  rounded-lg bg-white cursor-pointer  ' src={image} />
                            })}
                        </div>

                    </div>

                    {productsFromCategory?.length > 0 ? <div className='products-related grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10'>


                        {productsFromCategory?.map((p) => {
                            if (p.id == productDetails.id) {
                                return null
                            }
                            return <ProductItem product={p} />
                        })}

                    </div> : null}


                </div >


            </>
        )
    }
}

export default ProductDetails
