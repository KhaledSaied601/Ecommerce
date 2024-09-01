import React, { useEffect, useState } from 'react'
import Style from './Allorders.module.css'


function Allorders() {




    useEffect(() => {

        console.log('Allorders Mounting');

    }, [])







    return (
        <>
            <h2 className='text-4xl text-green-500  '>Allorders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis?</p>
        </>
    )
}

export default Allorders
