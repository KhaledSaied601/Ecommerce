import React, { useContext, useEffect, useState } from 'react'
import Style from './WishList.module.css'
import { wishListContext } from '../../../context/WishListContext/WishListContext'
import ProductItem from '../ProductItem/ProductItem'
import Loading from '../Loading/Loading'


function WishList() {


    const { GetLoggedUserWishList, wishList, setWishList, updatedWishListIds } = useContext(wishListContext)


    async function getWishList() {

        const res = await GetLoggedUserWishList()

        setWishList(res?.data)



    }



    useEffect(() => {

        getWishList();

    }, [updatedWishListIds])







    return (
        <>
            <div className='container mx-auto px-5 mt-24'>

                <div className=' grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 '>


                    {wishList ? wishList?.map((p) => {


                        return <ProductItem product={p} />


                    }) : <Loading />}


                </div>
            </div>
        </>
    )
}

export default WishList
