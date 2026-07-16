import React, { useState } from 'react'
import { setloginStatus } from "../../Redux/login/isLogin";
import { useDispatch } from 'react-redux';
import baseurl from '../../utils/baseurl';

import { useForm } from 'react-hook-form';
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

const Auth = () => {
    const [isLoginPage, setisLoginPage] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [eyePassword, seteyePassword] = useState(false);
    const [eyeConfirmPassword, seteyeConfirmPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({/** resolver: yupResolver(schema), */ });
    const validateEmail = (email) => {
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            return "Invalid email format";
        };
    }
    const validatePassword = (password) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/g;
        // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s)/g;
        if (!password.match(regex)) {
            return "invalid password format";
        };
    }

    const loginUser = async (obj) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(obj),
            redirect: 'follow',
            credentials: 'include' //!important
        };

        try {
            const response = await fetch(`${baseurl}/login`, requestOptions);
            const result = await response.json();
            if (result.status) {
                dispatch(setloginStatus(true));
                toast.success("Login success");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1500);
            } else {
                toast.error("Invalid credentials");
                console.log('Error::Auth::loginUser::result', result.message)
            }
        } catch (error) {
            toast.error("Something went wrong! ty again");
            console.log('Error::Auth::loginUser', error)
        }
    }

    const registerUser = async (obj) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(obj),
            redirect: 'follow',
            credentials: 'include' //!important
        };

        try {
            const response = await fetch(`${baseurl}/register`, requestOptions)
            const result = await response.json();
            if (result.status) {
                toast.success("Registration success! Login to account");
                setisLoginPage(!isLoginPage);
            } else {
                toast.error("Something went wrong! ty again");
                console.log('Error::Auth::registerUser::result', result.message)
            }
        } catch (error) {
            toast.error("Something went wrong! ty again");
            console.log('Error::Auth::registerUser', error)
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        if (data.btnOption === "REGISTER") {
            // register btn is clicked:
            if (data.password !== data.cpassword) {
                alert("Password and comfirm password DO Not match!");
                return false;
            }
            registerUser(data);
            return false;
        }
        // else login btn clicked:
        loginUser(data)
        return false;
    }
    return (
        <main className='px-4 md:w-2/3 md:mx-auto'>
            <div className="h2 text-center text-xl font-bold">{isLoginPage ? "Login into Account" : "Register Account"}</div>
            <div className='flex justify-center  mx-auto mt-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:max-w-xs' autoComplete='off' noValidate>
                    {/* email */}
                    <label className={`input input-bordered flex items-center gap-2 rounded-lg ${errors.email ? "input-error" : "input-success"} `}>
                        <EnvelopeIcon className="h-4 w-4 opacity-70" />
                        <input type="text" name='email' className="grow bg-transparent " placeholder="Email"
                            {...register('email', { validate: validateEmail })} />
                    </label>
                    <div className="label-text text-xs text-error h-8 pt-2">
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>


                    {/* password */}
                    <label className={`input input-bordered flex items-center gap-2 rounded-lg ${errors.password ? "input-error" : "input-success"} `}>
                        <KeyIcon className="h-4 w-4 opacity-70" />
                        <input type={eyePassword ? "text" : "password"} name='password' className="grow bg-transparent" placeholder="password"
                            {...register('password', { validate: validatePassword })} />
                        {eyePassword ? <EyeIcon className="h-4 w-4 opacity-70" onClick={() => { seteyePassword(!eyePassword) }} />
                            :
                            <EyeSlashIcon className="h-4 w-4 opacity-70" onClick={() => { seteyePassword(!eyePassword) }} />}
                    </label>

                    <div className="label-text text-xs text-error h-8 pt-2">
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="label">
                        <span className="label-text text-xs text-gray-500">Min 8 chars and must include Uppercase, Lowercase, Number and Special character.</span>
                    </div>

                    {/* confirm password */}
                    {!isLoginPage && (<>
                        <label className={`input input-bordered flex items-center gap-2 rounded-lg ${errors.cpassword ? "input-error" : "input-success"} `}>

                            <KeyIcon className="h-4 w-4 opacity-70" />
                            <input type={eyeConfirmPassword ? "password" : "text"} name='cpassword' className="grow bg-transparent" placeholder="confirm password"
                                {...register('cpassword', { validate: validatePassword })} />
                            {!eyeConfirmPassword ? <EyeIcon className="h-4 w-4 opacity-70" onClick={() => { seteyeConfirmPassword(!eyeConfirmPassword) }} />
                                :
                                <EyeSlashIcon className="h-4 w-4 opacity-70" onClick={() => { seteyeConfirmPassword(!eyeConfirmPassword) }} />}
                        </label>
                        <div className="label-text text-xs text-error h-8 pt-2">
                            {errors.cpassword && <p>{errors.cpassword.message}</p>}
                        </div>
                    </>)}

                    <input type="hidden" name='btnOption' {...register('btnOption')} id='btnHiddenForm' />

                    {isLoginPage ? (<input type="submit" className='btn w-full lg:max-w-xs btn-primary mt-4' value="Login"
                        onClick={() => { reset({"btnOption":"LOGIN"}) }} />)
                        : (<input type="submit" className='btn w-full lg:max-w-xs btn-primary mt-4' value="Register"
                            onClick={() => { reset({"btnOption":"REGISTER"}) }} />)
                    }
                </form>
            </div>

<div className="text-center mt-4">
    <h5 className="mb-2">OR</h5>

    <button
        type="button"
        className="btn w-full lg:max-w-xs border border-gray-300 bg-white text-black hover:bg-gray-100"
        onClick={() => {
            toast("GitHub OAuth login coming soon.");
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            className="mr-2"
        >
            <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8a8.01 8.01 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.48 7.48 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8"
            />
        </svg>

        Continue with GitHub
    </button>
</div>

            <div className="more text-center mt-4">
                <h5>OR</h5>
                {isLoginPage ? (<div>Do not have account? <span className='underline cursor-pointer'
                    onClick={() => { setisLoginPage(!isLoginPage) }}>Register</span></div>)
                    : (<div>Already have account? <span className='underline cursor-pointer'
                        onClick={() => { setisLoginPage(!isLoginPage) }}>Login</span></div>)
                }
            </div>

            <Toaster />
        </main>
    )
}

export default Auth