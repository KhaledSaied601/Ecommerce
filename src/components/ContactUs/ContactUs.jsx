import React, { useEffect, useState } from 'react'
import Style from './ContactUs.module.css'


function ContactUs() {




    useEffect(() => {

        console.log('ContactUs Mounting');

    }, [])







    return (
        <>
            <h2 className='text-4xl text-green-500  '>ContactUs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis?</p>
        </>
    )
}

export default ContactUs
