import React, { useState } from 'react'
import Layout from '@/layout/layout'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { registerValidate } from '@/lib/validate';



export const RegisterForm = () => {
    const router = useRouter()  
    const [show, setShow] = useState({ password: false, cpassword: false })
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit: handleManualRegister
    })

    async function handleManualRegister(values) {
        console.log(values)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000/rates')
            })
    }

  return (
   <>
        <div className='md:mt-20 mx-auto max-w-lg px-4 py-6'>
            <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            
                <div className="title mb-5 text-center">
                    <div className='flex flex-row justify-center'>
                        <h1 className='text-gray-800 text-2xl md:text-4xl font-bold py-4 '>
                            Register |
                        </h1>
                        <img src="https://gcdnb.pbrd.co/images/WhM3BGc8GH7H.png?o=1" 
                             className="h-8 m-1.5 mt-5 md:mt-6" alt="Flowbite Logo" 
                        />
                        <h1 className='text-gray-800 text-2xl md:text-4xl font-bold py-4 '>
                            parcel4you
                        </h1>


                    </div>
                    <p className='mt-3 mx-auto text-gray-400'>Create an account to start using our rates calculator.</p>
                </div>
                
                {/* <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form> */}
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="text"
                    name='username'
                    placeholder='Username'
                    className={styles.input_text}
                    {...formik.getFieldProps('username')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiOutlineUser size={25} />
                    </span>
                </div>
                {formik.errors.Username && formik.touched.Username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>}
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
                <div className={styles.input_group}>
                    <input 
                    type={`${show.password ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                    <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
                <div className={styles.input_group}>
                    <input 
                    type={`${show.cpassword ? "text" : "password"}`}
                    name='cpassword'
                    placeholder='Confirm Password'
                    className={styles.input_text}
                    {...formik.getFieldProps('cpassword')}
                    />
                    <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Register
                    </button>
                </div>
            </form>

            <p className='text-center text-gray-400 mt-5'>
                Have an account? <Link href={'/login'} className='hover:text-blue-600'>Sign In</Link>
            </p>

            </div>
        </div>


        

   </>
  )
}
