import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import heroimg  from '../assets/mission.png';
import hero from '../assets/edu.png';
import bitcoin from '../assets/bitcoin.png';
import decentralization from '../assets/decnter.png';
import smartcontracts from '../assets/smart.png';
import security from '../assets/security.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ImageCarousel = () => {
  useEffect(() => {
    Aos.init();

    Aos.refresh();

  }, [])
  return (
    <>
    <div id="home">
   <div className="bg-gray-50 py-16 md:py-32 font-sans rounded">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2" >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Step into a future of endless learning.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
          Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
          </p>
          <button className="mt-6 bg-customBlue text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-50 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img src={hero} alt="Learning Illustration" className="w-full max-w-md" />
        </div>
      </div>
    </div>
    </div>
    {/* about us */}

    <div className="bg-white py-16 md:py-24 font-sans" id="about-us">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={heroimg} alt="About Us Illustration" className="w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Vision & Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            To empower students with the skills and knowledge they need to excel in the rapidly evolving world of emerging technologies, where every student has the opportunity to embrace and harness the potential of these technologies, enabling them to become innovators, problem solvers, and leaders in their respective fields.
            </p>
            <p className="mt-4 text-lg text-gray-600">
            To provide students with hands-on projects and experiential learning opportunities. By immersing themselves in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>


    {/* blockchiain */}

    <div className="bg-gray-50 p-10 font-sans text-black rounded-lg" id='blockchain'>
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl font-bold text-black">Blockchain</h2>
        <h2 className="text-3xl font-bold text-black">Special for EveryOne</h2>
        {/* <button className=" text-purple-600 font-bold py-2 px-4 mt-4 rounded-full">KNOW MORE &rarr;</button> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
        <div className="bg-purple-100 p-6 rounded-lg text-center hover:scale-110 transition">
          <img src={bitcoin} alt="Blockchain 1" className="mb-4 mx-auto"/>
          <h3 className="text-xl font-bold mb-2">Blockchain Basics</h3>
          <p>Unleash the Potential: Blockchain - Revolutionizing Trust and Beyond!</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center hover:scale-110 transition">
          <img src={smartcontracts} alt="Blockchain 2" className="mb-4 mx-auto"/>
          <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
          <p>Automate and secure transactions with smart contracts on the blockchain.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center hover:scale-110 transition">
          <img src={decentralization} alt="Blockchain 3" className="mb-4 mx-auto"/>
          <h3 className="text-xl font-bold mb-2">Decentralization</h3>
          <p>Experience the power of decentralized networks and their applications.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center hover:scale-110 transition">
          <img src={security} alt="Blockchain 4" className="mb-4 mx-auto"/>
          <h3 className="text-xl font-bold mb-2">Blockchain Security</h3>
          <p>Explore how blockchain ensures security and integrity in data handling.</p>
        </div>
      </div>
    </div>

    {/* footer */}
    
    </>
  );
};

export default ImageCarousel;
