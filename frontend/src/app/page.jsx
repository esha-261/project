// 'use client';
import React from 'react';


const Home = () => {

  // useState

  return (
    <div>
      <>
        <div className="bg-black" >
          <div className="max-w-[85rem] mx-auto px-4  sm:px-6 lg:px-8 py-24 space-y-8">
            {/* CHAT BUBBLE */}
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary text-white font-bold">Welcome!</div>
            </div>
            {/* END */}


            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-bounce">
                Now it's easier than ever to build projects
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-white/70">
                LibraryHub is a one-stop destination to explore wide range of
                libraries and framework across multiple programming languages
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                href="#"
              >
                Browse Library
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
            </div>
            {/* End Buttons */}
            <div className="w-full h-full flex flex-row justify-center items-center  gap-2 ">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="rgb(41,188,224)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
                  <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
                  <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
                  <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
                  <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
                  <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
                  <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-python text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /><path d="M11 6l0 .01" /><path d="M13 18l0 .01" /></svg>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="yellow" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                  <path d="M7.5 8h3v8l-2 -1" />
                  <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                </svg>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="rgb(74,174,176)" stroke="none" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                </svg>
              </div>

            </div>
          </div>
        </div>
        {/* End Hero */}

        <>
          {/* Most used libraries */}
          {/* Title */}
          <section className="bg-gradient-to-r from-slate-200 to-slate-300 pb-20">
            <div className=" max-w-3xl p-10 pb-5 lg:mb-10 mx-auto">
              <div className="font-bold text-2xl md:text-5xl md:leading-tight">
                <h1 className="text-transparent bg-gradient-to-r from-slate-400 to-slate-900 bg-clip-text  text-center">
                  Most popular Libraries!
                </h1>
              </div>
            </div>
            {/* End Title */}
            {/* Card Grid */}
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 items-center">
              {/* Card */}
              <a
                className="mx-4 p-4 shadow-blue-700  md:p-6 h-full flex flex-col bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent rounded-t-xl rounded-b-xl lg:first:rounded-l-xl lg:last:rounded-bl-none  rotate-6 hover:rotate-0"
                href="#"
              >
                <div className="mb-5">
                  <svg
                    width="114px"
                    height="114px"
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                          fill="#000000"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </svg>
                  <div className="mt-9">
                    <p className="font-semibold text-5xl text-black">Next.js</p>
                    <h3 className="mt-5 font-medium text-lg text-black">75%</h3>
                    <p className="mt-1 text-neutral-400">
                      Next.js is a React development framework that is used to build
                      full-stack React applications. It's known for its exceptional
                      performance, scalability, and developer-centric design. Next.js is
                      built on a foundation of fast tooling, including Turbopack, an
                      incremental bundler, and a Speedy Web Compiler
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-yellow-400 pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                    Details
                  </span>
                </p>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group relative z-10 mx-4 p-4 md:p-6 h-full flex flex-col bg-black rounded-t-xl rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 md:hover:skew-y-12"
                href="#"
              >
                <div className="mb-5">
                  <svg
                    width="142px"
                    height="142px"
                    viewBox="-9 0 274 274"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          d="M191.54779,186.292389 L191.607285,246.81213 L137.903038,273.611369 L137.903038,213.11807 L191.54779,186.292389 Z M256.000818,153.946885 L256.000818,214.678164 L210.196199,237.537504 L210.163146,177.083869 L256.000818,153.946885 Z M191.468463,105.286501 L191.527958,165.171627 L137.903038,191.818823 L137.903038,131.913865 L191.468463,105.286501 Z M256.000818,73.2054191 L256.000818,132.713743 L210.149925,156.022603 L210.110262,96.0184858 L256.000818,73.2054191 Z M129.738988,66.1651652 L177.67221,90.3598405 L127.940914,115.334563 L80.9133402,91.7150067 L129.738988,66.1651652 Z M63.0648093,32.5107686 L108.783491,55.588258 L59.8454631,81.1314889 L12.8906057,57.5515964 L63.0648093,32.5107686 Z M193.755719,32.8611286 L242.997833,57.5515964 L198.958235,79.6705536 L150.925855,55.4428255 L193.755719,32.8611286 Z M128.231779,3.55271368e-15 L172.562241,22.2247263 L130.056295,44.9188028 L84.3772773,21.8809768 L128.231779,3.55271368e-15 Z"
                          fill="#4DABCF"
                        >
                          {" "}
                        </path>
                        <path
                          d="M118.943932,131.913865 L82.7709095,113.728195 L82.7709095,192.334447 C82.7709095,192.334447 38.5329951,98.2065835 34.4344436,89.7516683 C33.9055982,88.6609247 31.7307216,87.4644121 31.175434,87.1735472 C23.2427536,83.0088899 0,71.2354701 0,71.2354701 L0,210.110262 L32.1537979,227.297736 L32.1537979,154.7071 C32.1537979,154.7071 75.9223621,238.813344 76.3652701,239.732213 C76.8081781,240.651081 81.2042052,249.515852 85.8977077,252.629429 C92.1513041,256.767644 118.950543,272.884206 118.950543,272.884206 L118.943932,131.913865 Z"
                          fill="#4D77CF"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </svg>
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-white">NumPy</p>
                    <h3 className="mt-5 font-medium text-lg text-white">55%</h3>
                    <>

                    </>

                    <p className="mt-1 text-neutral-500">
                      NumPy is a library for the Python programming language, adding
                      support for large, multi-dimensional arrays and matrices, along
                      with a large collection of high-level mathematical functions to
                      operate on these arrays.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-yellow-400 pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                    Details
                  </span>
                </p>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group relative z-10 mx-4 p-4 md:p-4 h-full flex flex-col bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent rounded-t-xl rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none -rotate-6 hover:rotate-0 "
                href="#"
              >
                <div className="my-0">
                  <svg
                    width="210px"
                    height="210px"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path fill="url(#a)" d="M0 0h64v64H0z" />
                      <defs>
                        <pattern
                          id="a"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use xlinkHref="#b" transform="scale(.002)" />
                        </pattern>
                        <image
                          id="b"
                          width={500}
                          height={500}
                          xlinkHref="data:image/png;base64,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"
                        ></image>
                      </defs>
                    </g>
                  </svg>
                  <div className="mt-0">
                    <p className="font-semibold text-5xl text-black">Node.js</p>
                    <h3 className="mt-5 font-medium text-lg text-black">70%</h3>
                    <p className="mt-2 text-neutral-400">
                      Node.js is a cross-platform, open-source JavaScript runtime
                      environment that can run on Windows, Linux, Unix, macOS, and more.
                      Node.js runs on the V8 JavaScript engine, and executes JavaScript
                      code outside a web browser. Node.js lets developers use JavaScript
                      to write command line tools and for server-side scripting
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-yellow-400 pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                    Details
                  </span>
                </p>
              </a>
              {/* End Card */}
            </div>
            {/* End Card Grid */}

            {/* animation theme*/}
            <div className=" p-4 mt-16 font-bold  text-2xl gap-2  text-slate-950 scroll-container italic">
              <ul className='flex flex-row justify-center scroll-text gap-3'>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>PrelineUI</li>
                <li>DaisyUI</li>
                <li>TailwindUI</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux</li>
                <li>Three.js</li>
                <li>Ember.js</li>
              </ul>
            </div>
            {/* end animation theme*/}

          </section>
        </>

        <>


          {/* Features */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
            <div className="mt-1 sm:mt-10 lg:mt-0">

              {/* CHAT BUBBLE */}
              <div className="chat chat-start flex justify-center mb-3 ">
                <div className="chat-bubble bg-white font-bold text-black">What we do!</div>
              </div>
              {/* END */}


              {/* Title */}
              <div className="flex flex-col justify-center items-center ">
                <h2 className="font-bold text-3xl lg:text-5xl text-gray-100 text-center md:max-w-4xl mb-2 p-2">
                  Experience our one-stop destination of  libraries and framework
                </h2>
                <p className='mt-2'>
                  As a developer we spend lot of time in searching right tools to
                  start our project.So,no worries!
                </p>
                <p>
                  We, welcome you to our webiste where you will find latest and
                  popular frameworkf of any programming languages
                </p>
              </div>
              {/* End Title */}

              {/*Features card */}

              <div className="flex w-full flex-col lg:flex-row mt-16">
                <div className="card bg-base-300 rounded-box grid grid-rows-2 h-40 flex-grow place-items-center mb-4">
                  <h3 className='text-xl font-bold text-white'>Detailed Library Description</h3>
                  <p className='px-3 pb-5'>Provide in-depth information about each library, including its purpose, usage examples, compatibility, and licensing.</p>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="card bg-gradient-to-tl from-blue-600 to-violet-600 rounded-box grid h-40 grid-rows-2 flex-grow place-items-center mb-4">
                  <h3 className='text-xl font-bold text-black'>Community Forum</h3>
                  <p className='px-3 pb-5'>LibraryHUB is a platform for users to discuss libraries, ask questions, and share knowledge.</p>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="card bg-base-300 rounded-box grid grid-rows-2 mb-4 h-40 flex-grow place-items-center">
                  <h3 className='text-xl font-bold text-white '>Graph Representation</h3>
                  <p className='px-3 pb-5'>We provide graph representation so that users can see trending libraries and frameworks .</p>
                </div>
              </div>
              

              <div className="flex w-full flex-col lg:flex-row mt-16">
                <div className="card bg-gradient-to-tl from-blue-600 to-violet-600 rounded-box grid grid-rows-2 h-40 flex-grow place-items-center mb-4">
                  <h3 className='text-xl font-bold text-black'>User Friendly</h3>
                  <p className='px-3 pb-5'>Provide in-depth information about each library, including its purpose, usage examples, compatibility, and licensing.</p>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="card bg-base-300 rounded-box grid h-40 grid-rows-2 flex-grow place-items-center mb-4">
                  <h3 className='text-xl font-bold text-white'>Easy & Fast</h3>
                  <p className='px-3 pb-5'>LibraryHUB is a platform for users to discuss libraries, ask questions, and share knowledge.</p>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="card bg-gradient-to-tl from-blue-600 to-violet-600 rounded-box grid grid-rows-2 mb-4 h-40 flex-grow place-items-center">
                  <h3 className='text-xl font-bold text-black '>Comprehensive Library Database</h3>
                  <p className='px-3 pb-5'>A vast repository of libraries for various frameworks and languages, covering a wide range of use cases.</p>
                </div>
              </div>
              {/* end Features card */}
            </div>
          </div>
          {/* End Features section*/}
        </>

        {/* Testimonial section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-r from-slate-200 to-slate-300 text-primary-content">
          {/* CHAT BUBBLE */}
          <div className="chat chat-start flex justify-center">
            <div className="chat-bubble  font-bold">Testimonials</div>
          </div>
          {/* END */}

          <div className='mb-9'>
            <p className='font-bold text-3xl lg:text-5xl  text-transparent bg-gradient-to-r from-slate-400 to-slate-900 bg-clip-text text-center p-2'>What they say about us</p>
            <p className='text-lg text-slate-500 text-center mx-auto max-w-2xl'>
              Discover first-hand accounts from our clients, who experienced the transformative power of our creative solutions.</p>
          </div>

          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            {/*main div*/}
            <div className='bg-black h-full w-full rounded-lg'>
              <div className=' mb-3'>
                <h1 className='text-center font-bold text-3xl pt-10  text-gray-800 dark:text-neutral-200'>Discover why so many people trust us!</h1>
                <p className='text-center p-4 px-3   text-gray-500 dark:text-neutral-400'>We pride ourselves on delivering exceptional and tangible results that matter to you.</p>
              </div>
              {/*parent div*/}
              <div>
                <div className='flex flex-col-reverse justify-center items-center m-9'>
                  <p className=' text-gray-500 dark:text-neutral-400'>Happy Clients</p>
                  <p className=' text-gray-800 dark:text-neutral-200 font-bold  text-6xl '>69</p>
                </div>

                <div className='flex flex-col-reverse justify-center items-center m-9'>
                  <p className=' text-gray-500 dark:text-neutral-400'>Projects Completed</p>
                  <p className=' text-gray-800 dark:text-neutral-200 font-bold  text-6xl '>420</p>
                </div>

                <div className='flex flex-col-reverse justify-center items-center m-9 sm:mb-8 pb-2'>
                  <p className=' text-gray-500 dark:text-neutral-400'>Years in Business</p>
                  <p className=' text-gray-800 dark:text-neutral-200 font-bold  text-6xl '>20</p>
                </div>
              </div>
              {/* end parent div*/}
            </div>
            {/* end main div*/}


            <>
              {/* Grid */}
              <div className="grid grid-cols-1 w-1/2 mx-auto md:w-full sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                        " With Preline, we're able to easily track our performance in full
                        detail. It's become an essential tool for us to grow and engage with
                        our audience. "
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                      <div className="flex items-center gap-x-3">
                        <div className="shrink-0">
                          <img
                            className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                        </div>
                        <div className="grow">
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                            Josh Tyson
                          </p>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">
                            Product Manager | Capsule
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900  ">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200 ">
                        " In September, I will be using this theme for 2 years. I went
                        through multiple updates and changes and I'm very glad to see the
                        consistency and effort made by the team. "
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                      <div className="flex items-center gap-x-3">
                        <div className="shrink-0">
                          <img
                            className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                        </div>
                        <div className="grow">
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                            Luisa
                          </p>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">
                            Senior Director of Operations | Fitbit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                        " Refreshing and Thought provoking design and it changes my view
                        about how I design the websites. Great typography, modern clean
                        white design, nice tones of the color. "
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                      <div className="flex items-center gap-x-3">
                        <div className="shrink-0">
                          <img
                            className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                            alt="Avatar"
                          />
                        </div>
                        <div className="grow">
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                            Alisa Williams
                          </p>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">
                            Entrepreneur | Happy customer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Grid */}
            </>
          </div>
          {/* End Grid */}
        </div>
        {/* end Testimonials */}
      </>
      <>
        {/* footer section */}
        <footer className="footer footer-center bg-gradient-to-tl from-blue-600 to-violet-600 p-10">
          <p className="font-bold">
            LibraryHUB
            <br />
            Providing reliable tech
          </p>
          <p>
            Copyright © {"{"}new Date().getFullYear(){"}"} - All right reserved
          </p>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>

      </>
    </div >
  )
}

export default Home
