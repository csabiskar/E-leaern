import React, { Fragment } from 'react'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <Fragment>
       <footer className="bg-black text-white py-10 font-sans" id='footer'>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <p className="text-gray-400 mb-4" >
              We are dedicated to providing the best online learning experiences with courses, certificates, and degrees from top universities and companies.
            </p>
            <p className="text-gray-400">© 2024 Company Name. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about-us" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#blockchain" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="#footer" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.88C24 21.9 21.9 24 19.44 24H4.56C2.1 24 0 21.9 0 19.44V4.56C0 2.1 2.1 0 4.56 0h14.88C21.9 0 24 2.1 24 4.56zM7.44 19.44v-9.36h3.12v9.36H7.44zm1.56-10.44h-.03c-1.05 0-1.74-.72-1.74-1.62 0-.92.72-1.62 1.77-1.62 1.05 0 1.74.7 1.74 1.62 0 .9-.69 1.62-1.74 1.62zm12 10.44h-3.12v-4.68c0-1.12-.39-1.88-1.35-1.88-.73 0-1.16.5-1.35.98-.07.18-.09.42-.09.66v4.92H9.96s.04-8.01 0-8.84h3.12v1.26c.41-.63 1.14-1.52 2.78-1.52 2.03 0 3.55 1.33 3.55 4.2v5.04z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.98 4.56v14.88C23.98 21.9 21.9 24 19.44 24H4.56C2.1 24 0 21.9 0 19.44V4.56C0 2.1 2.1 0 4.56 0h14.88C21.9 0 23.98 2.1 23.98 4.56zM7.44 19.44v-9.36h3.12v9.36H7.44zm1.56-10.44h-.03c-1.05 0-1.74-.72-1.74-1.62 0-.92.72-1.62 1.77-1.62 1.05 0 1.74.7 1.74 1.62 0 .9-.69 1.62-1.74 1.62zm12 10.44h-3.12v-4.68c0-1.12-.39-1.88-1.35-1.88-.73 0-1.16.5-1.35.98-.07.18-.09.42-.09.66v4.92H9.96s.04-8.01 0-8.84h3.12v1.26c.41-.63 1.14-1.52 2.78-1.52 2.03 0 3.55 1.33 3.55 4.2v5.04z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.98 4.56v14.88C23.98 21.9 21.9 24 19.44 24H4.56C2.1 24 0 21.9 0 19.44V4.56C0 2.1 2.1 0 4.56 0h14.88C21.9 0 23.98 2.1 23.98 4.56zM7.44 19.44v-9.36h3.12v9.36H7.44zm1.56-10.44h-.03c-1.05 0-1.74-.72-1.74-1.62 0-.92.72-1.62 1.77-1.62 1.05 0 1.74.7 1.74 1.62 0 .9-.69 1.62-1.74 1.62zm12 10.44h-3.12v-4.68c0-1.12-.39-1.88-1.35-1.88-.73 0-1.16.5-1.35.98-.07.18-.09.42-.09.66v4.92H9.96s.04-8.01 0-8.84h3.12v1.26c.41-.63 1.14-1.52 2.78-1.52 2.03 0 3.55 1.33 3.55 4.2v5.04z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
  )
}

export default Footer