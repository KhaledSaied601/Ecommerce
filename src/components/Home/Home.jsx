import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import useProduct from '../../Hooks/UseProducts/useProduct';
import CategorySlider from '../CategorySlider/CategorySlider';
import { CartContext } from '../../../context/CartContext/CartContext';
import Loading from '../Loading/Loading';
import { wishListContext } from '../../../context/WishListContext/WishListContext';



function Home() {








    const { data: products, isLoading, error, isError, isFetched } = useProduct()
    const { GetLoggedUserWishList, setWishList, updatedWishListIds } = useContext(wishListContext)

    async function getWishList() {

        const res = await GetLoggedUserWishList()

        setWishList(res?.data)






    }

    useEffect(() => {

        getWishList()



    }, [updatedWishListIds])



    return <div className='container mx-auto px-5 mt-24 mb-36'>

       
        <div className='category-section min-h-fit'>

            <div className='flex flex-row justify-start items-center gap-2 my-4'>

                <div className='bg-green-800 h-12 w-8 rounded-lg'></div>

                <h1 className='  text-2xl text-green-500 font-semibold   '>Browse By Category</h1>


            </div>


            <CategorySlider />
        </div>

        {isLoading ? <Loading /> : <div className='product-section mt-10 sm:px-20 md:px-10 lg:px-0'>


            <div className='flex flex-row justify-start items-center gap-2 my-4'>

                <div className='bg-green-800 h-12 w-8 rounded-lg'></div>

                <h1 className='  text-2xl text-green-500 font-semibold   '>Explore Our Products</h1>


            </div>


            <div className=' grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 '>


                {products?.map((p) => {


                    return <ProductItem product={p} key={p._id} />


                })}


            </div>




        </div>}



    </div>


}

export default Home
