import React, { useEffect, useState } from 'react'
import Style from './Loading.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Loading() {











    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center text-3xl -mt-20'>

                <FontAwesomeIcon icon={faCartShopping} beatFade size="10x" className='' style={{ color: "#0a5c43", }} />
            </div>
        </>
    )
}

export default Loading
