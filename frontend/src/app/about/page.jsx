import React from 'react'

const page = () => {
  return (
    <div class="bg-black">
      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img
                className="rounded-xl mt-10"
                src="https://i.pinimg.com/originals/1c/a7/49/1ca74946ed770bb635e4de4711bd861f.gif"
                alt="Features Image"
              />
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-white">
                   Welcome to Library<span class="text-gray-400">HUB</span>
                  </h2>
                  <p className="text-gray-500">
                     Your one-stop destination for discovering a wide range of libraries across multiple programming languages and frameworks.
                  </p>
                  <p className="text-gray-500">Our platform offers an extensive collection of libraries for various languages and frameworks,catering to your diverse development needs.</p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="shrink-0 size-3.5"
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
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        <span className="font-bold">Centralized Resource</span> Hub
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="shrink-0 size-3.5"
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
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        Enhance Developer <span className="font-bold">Productivity</span>
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="shrink-0 size-3.5"
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
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        Save Development Time
                      </span>
                    </div>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>

    </div>
  )
}

export default page
