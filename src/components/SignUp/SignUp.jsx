import React, { useContext, useEffect, useState } from 'react'
import Style from './SignUp.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { userContext } from '../../../context/UserContext/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import loginImage from '../../assets/SideImage.svg'


function SignUp() {


    const navigate = useNavigate()
    const [Error, setError] = useState(null)
    const { setToken } = useContext(userContext)


    useEffect(() => {



    }, [])


    const schema = Yup.object().shape({
        "name": Yup.string().required('Please insert your Name'),
        "email": Yup.string().required('Please insert your Emal').email('Email Must contain @/.com'),
        "password": Yup.string().required('Please insert your Password').matches(/^(?=.*[A-Z])(?=(?:.*\d){8,}).{9,}$/, 'Password Must Contains At least one uppercase letter,8 digits'),
        "rePassword": Yup.string().required('Please insert your RePassword').oneOf([Yup.ref('password')], 'RePassword must matchs Password'),
        "phone": Yup.string().required('Please Insert Your Phone Number')
    })




    async function handleSubmit(values) {


        try {

            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)


            if (res.data.message == 'success') {

                setToken(res.data.token);
                localStorage.setItem('Token', res.data.token)
                navigate('/')



            }


        }
        catch (err) {

            setError(err.response.data.message)

        }



    }

    const formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "password": "",
            "rePassword": "",
            "phone": ""
        },
        onSubmit: handleSubmit,

        validationSchema: schema
    })




    return (
        <>
            <div className='container mt-24 grid grid-cols-2 justify-center items-center mx-auto gap-5'>

                <div className='login-image  p-20'>
                    <img src={loginImage} alt="Login Logo" className='rounded-xl' />
                </div>

                <div className='login-section flex flex-col justify-between items-start h-[50%]'>

                    <h1 className='text-3xl text-center font-semibold text-green-600'>Create an account</h1>


                    <form onSubmit={formik.handleSubmit} className="w-[50%]  mt-10">

                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('name')} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>

                        {formik.errors.name && formik.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.name}
                        </div> : null}



                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('email')} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>

                        {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.email}
                        </div> : null}

                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('password')} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        {formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.password}
                        </div> : null}

                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('rePassword')} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repassword</label>
                        </div>
                        {formik.errors.rePassword && formik.touched.rePassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.rePassword}
                        </div> : null}
                        <div className="relative z-0 w-full mb-5 group">
                            <input {...formik.getFieldProps('phone')} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                        {formik.errors.phone && formik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Warning!</span> {formik.errors.phone}
                        </div> : null}

                        <div className='flex flex-col  items-center'>
                            <button type="submit" className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">Create Account</button>
                            <span className='text-sm text-green-600'>Already have account? <Link className='underline' to={'/login'}>Log in</Link></span>
                        </div>
                    </form>


                    {Error ? <h1 className='text-3xl text-center font-semibold text-red-600 mt-5'>{Error}</h1> : null}
                </div>


            </div>
        </>
    )
}


export default SignUp
