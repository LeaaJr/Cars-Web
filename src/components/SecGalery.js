import React from "react";
import ImgProd from "./ImgProd";


const SecGalery = () => {

    return(
        <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-white-900 dark:text-white">

        
        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">

          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">

            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={ImgProd.Inertna} alt="billboard image" />

            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-[#aaaaaa75]-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-black">Lorem ipsum dolor sit amet consectetur</h2>
              <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                nobis tempora possimus ullam!</p>
            </div>

          </div>
          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">

            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-[#aaaaaa75]-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-black">Lorem ipsum dolor sit amet consectetur</h2>

              <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                nobis tempora possimus ullam!</p>
            </div>
            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={ImgProd.preview1} alt="billboard image" />

          </div>
        </div>
      </section>
    );
};

export default SecGalery;