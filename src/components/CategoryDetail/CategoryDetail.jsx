import React, { useEffect, useState } from 'react'
import Style from './CategoryDetail.module.css'
import useProduct from '../../Hooks/UseProducts/useProduct';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import Loading from '../Loading/Loading';


function CategoryDetail() {



    const { data: products, isLoading, error, isError, isFetched } = useProduct()
    const [productFromCategory, setProductFromCategory] = useState([])
    const { id, name } = useParams()

    useEffect(() => {


        // console.log('CategoryDetail Mounting');

    }, [])




    if (isLoading) {
        return <Loading />
    }

    else {

        const productsFromCategory = products?.filter((p) => { return p?.category._id === id })


        return <div className="container mx-auto  mt-24">
            <div className='product-section '>


                <div className='flex flex-row justify-start items-center gap-2 my-4'>

                    <div className='bg-green-800 h-12 w-8 rounded-lg'></div>

                    <h1 className='  text-2xl text-green-500 font-semibold   '>{name}</h1>


                </div>


                {productsFromCategory?.length > 0 ? <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 '>


                    {products?.map((p) => {

                        if (p?.category._id === id) {

                            return <ProductItem product={p} key={p._id} />
                        }



                    })}


                </div> : <h1 className='text-white text-xl font-semibold'>No Products Founded</h1>}





            </div>

        </div>
    }





}

export default CategoryDetail
