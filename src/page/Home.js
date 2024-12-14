import React from "react";
import Banner from '../components/Banner'
import ImgProd from "../components/ImgProd";
import SecGalery from "../Sections/SecGalery";
import SecGaleryTwo from "../Sections/SecGaleryTwo";
import SectionOne from '../Sections/SectionOne';
import SectionTwo from "../Sections/SectionTwo";
import SectionThree from "../Sections/SectionThree";
import ParallaxImages from "../Sections/ParallaxImages";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
      <div>
        <Banner />
        <SectionOne />
        <div className=" flex justify-center items-center pt-32 ">
        {/* Tarjeta 1 */}
        <div className="m-4 inline-block mt-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/visual" state={{ imageUrl: ImgProd.AmarokV6Hig, name: "vw-Amarok-v6-highline mod 2021", price: "£10.009" }}>
          <img className="p-8 rounded-t-lg" src={ImgProd.AmarokV6Hig} alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            vw-Amarok-v6-highline mod 2021
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">£10.009</span>
            <Link to="/Visual" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver</Link>
          </div>
        </div>
      </div>
        
      <div className="m-4 inline-block mt-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/visual" state={{ imageUrl: ImgProd.AmarokV6Ext }}>
          <img className="p-8 rounded-t-lg" src={ImgProd.AmarokV6Ext} alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            vw-Amarok-v6-highline mod 2021
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">£10.009</span>
            <Link to="/Visual" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver</Link>
          </div>
        </div>
      </div>


      <div className="m-4 inline-block mt-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/visual" state={{ imageUrl: ImgProd.AmarokV6Mot }}>
          <img className="p-8 rounded-t-lg" src={ImgProd.AmarokV6Mot} alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            vw-Amarok-v6-highline mod 2021
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">£10.009</span>
            <Link to="/Visual" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver</Link>
          </div>
        </div>
      </div>
        </div>
        <SectionTwo />
        <SecGalery />
        <SectionThree />
        <SecGaleryTwo />
        <ParallaxImages />
        </div>

    );
};

export default Home