import React, { useContext, useEffect, useState } from 'react'
import Style from './CheckOut.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';


function CheckOut() {


    const { id } = useParams()
    const token = localStorage.getItem('Token')

    useEffect(() => {

        console.log(id);

      console.log(window.location.origin);
        

    }, [])




    const navigate = useNavigate()
    const [Error, setError] = useState(null)




    const schema = Yup.object().shape({
        "details": Yup.string().required('Please fill your Name'),
        "phone": Yup.string().required('Please write your phone'),
        "city": Yup.string().required('Please write you city')
    })





    async function handleSubmit(values) {

        console.log(values);
        try {
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${window.location.origin}`, {
                shippingAddress: values
            }, {
                headers: {
                    token
                }

            })

           window.location.href = res.data.session.url

        }
        catch (err) {

            setError(err.response.data.message)
        }




    }

    const formik = useFormik({
        initialValues: {

            "details": "",
            "phone": "",
            "city": ""

        },

        onSubmit: handleSubmit,

        validationSchema: schema
    })




    return (
        <>
            <div className='min-h-screen  flex items-center justify-center'>

                <div className='container -mt-36 '>

                    <h1 className=' text-6xl text-center font-semibold text-green-600'>Check Out</h1>


                    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto  mt-10">







                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('details')} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>

                        {formik.errors.details && formik.touched.details ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.details}
                        </div> : null}


                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('phone')} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                        </div>

                        {formik.errors.phone && formik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.phone}
                        </div> : null}


                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('city')} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                        </div>

                        {formik.errors.city && formik.touched.city ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.city}
                        </div> : null}



                        <button type="submit" className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">Pay</button>
                    </form>


                    {Error ? <h1 className='text-3xl text-center font-semibold text-red-600 mt-5'>{Error}</h1> : null}
                </div>
            </div>


        </>
    )
}

export default CheckOut
