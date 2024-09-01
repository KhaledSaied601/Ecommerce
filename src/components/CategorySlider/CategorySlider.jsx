import React, { useContext, useEffect, useState } from 'react'
import Style from './CategorySlider.module.css'

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useCategory from '../../Hooks/UseCategory/useCategory';
import Loading from '../Loading/Loading';


export default function CategorySlider() {

    // const { data: categories, isLoading , isSuccess } = useCategory()



    const { data: categories, isLoading, isSuccess } = useCategory()


    // useEffect(() => {
    //     console.log(categories);

    // }, [])




    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        dots: false

    };


    if (isLoading) {
        return <Loading/>
    }


    else if (isSuccess) {


        return (
            <Slider {...settings} >


                {categories?.map((category) =>

                    <div className='p-3  h-[500px]' >

                        <Link to={`category/${category?.name}/${category?._id}`} className='h-[100%]  relative rounded-lg overflow-hidden group'>

                            <img src={category.image} className=' relative z-10 w-full h-full object-cover rounded-lg' alt="" />
                            <div className='over-lay absolute top-[100%] left-0 w-full h-full bg-black bg-opacity-40 z-20 flex justify-center items-center group-hover:top-0 duration-500 '>
                                <h1 className='text-center text-2xl font-bold text-green-500'>{category.name}</h1>
                            </div>

                        </Link>

                    </div>

                )}

            </Slider>
        );
    }



}