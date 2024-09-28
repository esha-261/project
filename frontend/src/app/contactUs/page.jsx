import React from 'react'

const ContactUs = () => {
    return (
        <div>
            {/* Testimonial section */}
            <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 bg-black">
                {/* CHAT BUBBLE */}
                <div className="chat chat-start flex justify-start mb-5">
                    <div className="chat-bubble  font-bold">Contact Us</div>
                </div>
                {/* END chat bubble */}


                <div className='grid grid-cols-1 md:grid md:grid-cols-2'>
                    <div>
                        <h1 className='font-bold text-6xl text-white'>Get in touch</h1>
                        <p className='py-4 text-xl'>We'd love to hear from you. Fill in the form and we'll get back to you shortly.</p>
                        <h3 className='text-xl font-semibold md:mt-24 md:py-7 text-center text-white'>Follow us</h3>
                        <div className="mr-auto flex justify-center items-center pb-4 gap-6 pt-5 sm:mr-0 sm:pt-0">
  <a href="https://github.com/ " target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
    
  </a>
  <a href="https://twitter.com/ " target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
</svg>
  </a>
  <a href="https://www.linkedin.com/ " target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M8 11l0 5" />
  <path d="M8 8l0 .01" />
  <path d="M12 16l0 -5" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
  </a>
</div>



                    </div>

                    <div className="mx-auto w-full sm:px-6 lg:px-8 ">

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name"></label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm bg-white"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm bg-white"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg bg-white border border-gray-400 p-3 mt-4 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg bg-white border border-gray-400 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
            {/* end Testimonials */}
        </div>
    )
}

export default ContactUs

{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}