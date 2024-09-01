import React, { useEffect, useState } from 'react'
import Style from './LayOut.module.css'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';



function LayOut() {




    useEffect(() => {


    }, [])







    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayOut
