import React from 'react'

const page = () => {
    return (
        <div>
            <>
                {/* Hero */}
                <div className="relative overflow-hidden">
                    {/* Gradients */}
                    <div
                        aria-hidden="true"
                        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
                    >
                        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
                        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]" />
                    </div>
                    {/* End Gradients */}
                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div className="max-w-2xl text-center mx-auto">
                                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                                    Preline: A vision for 2023
                                </p>
                                {/* Title */}
                                <div className="mt-5 max-w-2xl">
                                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                                        The Intuitive Web Solutions
                                    </h1>
                                </div>
                                {/* End Title */}
                                <div className="mt-5 max-w-3xl">
                                    <p className="text-lg text-gray-600">
                                        Preline UI is an open-source set of prebuilt UI components,
                                        ready-to-use examples and Figma design system based on the
                                        utility-first Tailwind CSS framework.
                                    </p>
                                </div>
                                {/* Buttons */}
                                <div className="mt-8 gap-3 flex justify-center">
                                    <a
                                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                        href="#"
                                    >
                                        Get started
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
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </a>
                                    <a
                                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                        href="#"
                                    >
                                        <svg
                                            className="shrink-0 size-4"
                                            width={19}
                                            height={18}
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                                                fill="#0ACF83"
                                            />
                                            <path
                                                d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                                                fill="#A259FF"
                                            />
                                            <path
                                                d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                                                fill="#F24E1E"
                                            />
                                            <path
                                                d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                                                fill="#FF7262"
                                            />
                                            <path
                                                d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                                                fill="#1ABCFE"
                                            />
                                        </svg>
                                        Preline Figma
                                    </a>
                                </div>
                                {/* End Buttons */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero */}
            </>

            <>
                {/* Icon Blocks */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
                        {/* Icon Block */}
                        <div>
                            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                                <svg
                                    className="shrink-0 size-6 text-blue-600"
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
                                    <rect width={10} height={14} x={3} y={8} rx={2} />
                                    <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                                    <path d="M8 18h.01" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold text-gray-800">Responsive</h3>
                                <p className="mt-1 text-gray-600">
                                    Responsive, and mobile-first project on the web
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                        {/* Icon Block */}
                        <div>
                            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                                <svg
                                    className="shrink-0 size-6 text-blue-600"
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
                                    <path d="M20 7h-9" />
                                    <path d="M14 17H5" />
                                    <circle cx={17} cy={17} r={3} />
                                    <circle cx={7} cy={7} r={3} />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold text-gray-800">Customizable</h3>
                                <p className="mt-1 text-gray-600">
                                    Components are easily customized and extendable
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                        {/* Icon Block */}
                        <div>
                            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                                <svg
                                    className="shrink-0 size-6 text-blue-600"
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
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
                                <p className="mt-1 text-gray-600">
                                    Every component and plugin is well documented
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                        {/* Icon Block */}
                        <div>
                            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                                <svg
                                    className="shrink-0 size-6 text-blue-600"
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
                                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                </svg>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                                <p className="mt-1 text-gray-600">
                                    Contact us 24 hours a day, 7 days a week
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                    </div>
                </div>
                {/* End Icon Blocks */}
            </>


        </div>
    )
}

export default page