'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'name must be atleast 2 characters')
    .max(50, 'name must be atmost 50 character')
    .required('firstname is required'),

  lastname: Yup.string()
    .min(2, 'name must be atleast 2 characters')
    .max(50, 'name must be atmost 50 character')
    .required('lastname is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('email is required'),

  password: Yup.string()
    .min(8, 'password must be atleast 8 characters')
    .matches(/[a-z]/, 'password must contain atleast one lowercase letter')
    .matches(/[A-Z]/, 'password must contain atleast one uppercase letter')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/, 'password must contain atleast one character')
    .required('password is required'),

  confirmpassword: Yup.string()
    .min(8, 'password must be atleast 8 characters')
    .matches(/[a-z]/, 'password must contain atleast one lowercase letter')
    .matches(/[A-Z]/, 'password must contain atleast one uppercase letter')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/, 'password must contain atleast one character')
    .required('password is required'),

})
const Signup = () => {

  const router = useRouter();
  const signupform = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      axios.post('http://localhost:5000/user/add', values)
        .then((response) => {
          console.log(response.status);

          resetForm();
          toast.success('User Registerd');
          router.push('/signIn');

        }).catch((err) => {
          console.log(err);
          toast.error('User not Registerd');
          // setSubmitting(false);  
        });
    },
    validationSchema: SignupSchema
  })
  return (
    <div>
      <>
        {/* Hero */}
        <div className="relative bg-black bg-gradient-to-bl via-transparent">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                {/* <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
            Preline: A vision for 2024
          </p> */}
                {/* Title */}
                <div className="mt-3 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-semibold text-white text-4xl lg:text-5xl">
                    Fully customizable rules to match your<span class="text-blue-600 dark:text-blue-500"> unique needs</span>
                  </h1>
                  <p className="text-gray-400">
                    Explore our user-friendly directory to find the perfect library to take your skills to the next level.
                  </p>
                </div>
                {/* End Title */}
                {/* Blockquote */}
                <blockquote className="hidden md:block relative max-w-sm">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-xl italic text-white">
                      Amazing people to work with. Very fast and professional partner.
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center gap-x-4">
                      <div className="shrink-0">
                        <img
                          className="size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                      <div className="grow">
                        <div className="font-semibold text-white">
                          Josh Grazioso
                        </div>
                        <div className="text-xs text-gray-500">
                          Director Payments &amp; Risk | Airbnb
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}
              <div>
                {/* Form */}
                <form onSubmit={signupform.handleSubmit}>
                  <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                    {/* Card */}
                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
                      <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">
                          Welcome to <span class="text-gray-400">Library</span><span class="text-gray-600">HUB</span>
                        </h1>
                        <p className="mt-2 text-sm text-gray-600">
                          Already have an account?
                          <a
                            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                            href="#"
                          >
                            Sign in here
                          </a>
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <svg
                            className="w-4 h-auto"
                            width={46}
                            height={47}
                            viewBox="0 0 46 47"
                            fill="none"
                          >
                            <path
                              d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                              fill="#34A853"
                            />
                            <path
                              d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                              fill="#EB4335"
                            />
                          </svg>
                          Sign up with Google
                        </button>
                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                          Or
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="text"
                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="firstname"
                                onChange={signupform.handleChange}
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-first-name"
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                First name
                              </label>
                              {signupform.errors.firstname && signupform.touched.firstname ? (
                                <div className='text-red-500 text-sm'>{signupform.errors.firstname}</div>
                              ) : null}
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}
                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="text"
                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="lastname"
                                onChange={signupform.handleChange}
                                value={signupform.values.lastname}
                                placeholder="Doe"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-last-name"
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Last name
                              </label>
                              {signupform.errors.lastname && signupform.touched.lastname ? (
                                <div className='text-red-500 text-sm'>{signupform.errors.lastname}</div>
                              ) : null}
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}
                          {/* Input Group */}

                          {/* End Input Group */}
                          {/* Input Group */}
                          <div className="relative col-span-full">
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="email"
                                //id="hs-hero-signup-form-floating-input-email"
                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="email"
                                onChange={signupform.handleChange}
                                value={signupform.values.email}
                                placeholder="you@email.com"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-email"
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Email
                              </label>
                              {signupform.errors.email && signupform.touched.email ? (
                                <div className='text-red-500 text-sm'>{signupform.errors.email}</div>
                              ) : null}
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}
                          {/* Input Group */}
                          <div className="relative col-span-full">
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="password"
                                //id="hs-hero-signup-form-floating-input-new-password"
                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="password"
                                onChange={signupform.handleChange}
                                value={signupform.values.password}
                                placeholder="********"


                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-new-password"
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none

                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Enter password
                              </label>
                              {signupform.errors.password && signupform.touched.password ? (
                                <div className='text-red-500 text-sm'>{signupform.errors.password}</div>
                              ) : null}
                            </div>
                            {/* End Floating Input */}
                            <div
                              id="hs-strong-password-popover"
                              className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4"
                            >
                              <div
                                id="hs-strong-password-in-popover"
                                data-hs-strong-password='{
                    "target": "#hs-hero-signup-form-floating-input-new-password",
                    "hints": "#hs-strong-password-popover",
                    "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                    "mode": "popover"
                  }'
                                className="flex mt-2 -mx-1"
                              ></div>
                              <h4 className="mt-3 text-sm font-semibold text-gray-800">
                                Your password must contain:
                              </h4>
                              <ul className="space-y-1 text-sm text-gray-500">
                                <li
                                  data-hs-strong-password-hints-rule-text="min-length"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Minimum number of characters is 6.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="lowercase"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain lowercase.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="uppercase"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain uppercase.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="numbers"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain numbers.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="special-characters"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck="">
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain special characters.
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Input Group */}
                          {/* Input Group */}
                          <div className="col-span-full">
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="password"

                                // id="hs-hero-signup-form-floating-input-current-password"
                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                id="confirmpassword"
                                onChange={signupform.handleChange}
                                value={signupform.values.confirmpassword}

                                placeholder="********"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-current-password"
                                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Confirm password
                              </label>
                              {signupform.errors.confirmpassword && signupform.touched.confirmpassword ? (
                                <div className='text-red-500 text-sm'>{signupform.errors.confirmpassword}</div>
                              ) : null}
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}
                        </div>
                        {/* End Grid */}
                        {/* Checkbox */}
                        <div className="mt-5 flex items-center">
                          <div className="flex">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"

                            />
                          </div>
                          <div className="ms-3">
                            <label htmlFor="remember-me" className="text-sm">
                              I accept the{" "}
                              <a
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                                href="#"
                              >
                                Terms and Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        {/* End Checkbox */}
                        <div className="mt-5">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Get started
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                  </div>
                </form>
                {/* End Form */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            {/* Clients Section */}


          </div>
          {/* End Clients Section */}
        </div>
        {/* End Hero */}
      </>
    </div>
  )
}

export default Signup