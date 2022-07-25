import React from 'react';
import { NavLink } from "react-router-dom";
import Input from '../components/global/form/input';

export default function Register() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-center">ثبت نام</h3>
                    <form action="">
                        <div className="mt-4">
                            <div>
                                <Input name="Name" label='نام' />
                            </div>
                            <div>
                                <Input name="email" label='ایمیل'  type='email' />
                            </div>
                            <div>
                                <Input name="password" label='کلمه عبور' type='password' />
                            </div>
                            <div>
                                <Input name="password" label='تکرار کلمه عبور ' type='password' />
                            </div>

                            {/* <span className="text-xs text-red-400">Password must be same!</span> */}
                            <div className="flex">
                                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">ثبت نام</button>
                            </div>
                            <div className="mt-6 text-grey-dark">
                               قبلا ثبت نام کرده اید؟ {" "}
                               <NavLink to="/admin/login"> فرم ورود </NavLink>                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}