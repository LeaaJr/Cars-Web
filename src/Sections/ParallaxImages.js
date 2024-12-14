import React from 'react';
import '../styles/Parallax.css'

const ParallaxImages = () => {
  return (
    <section className="pb-64 flex flex-wrap justify-center items-center min-h-screen bg-[#ffff] gap-8">
         <div className="flex flex-col items-rigth m-3">
      <img
            src="https://www.alravw.com/files/modelos/1724164439_extreme.png"
            alt="the back of random person"
            className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
            style={{
                '--f': '.1',
                '--r': '10px',
                '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
                '--_a': 'calc(90deg * var(--f))',
            }}
            />
            <h3 className="mt-2 text-black text-lg font-semibold"> V6 Extreme </h3>
      <img
        src="https://www.alravw.com/files/modelos/1724164465_black-style.png" 
        alt="the back of random person"
        className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
        style={{
            '--f': '.1',
            '--r': '10px',
            '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
            '--_a': 'calc(90deg * var(--f))',
        }}
        />
        <h3 className="mt-2 text-black text-lg font-semibold"> V6 Black Style </h3>
      <img
        src="https://www.alravw.com/files/modelos/1724164509_hero.png"
        alt="the back of random person"
        className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
        style={{
            '--f': '.1',
            '--r': '10px',
            '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
            '--_a': 'calc(90deg * var(--f))',
        }}
        />
        <h3 className="mt-2 text-black text-lg font-semibold"> V6 Hero </h3>
        </div>
        <div className="flex flex-col items-left m-3">
        <img
        src="https://www.alravw.com/files/modelos/1724164410_highline.png"
        alt="the back of random person"
        className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
        style={{
            '--f': '.1',
            '--r': '10px',
            '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
            '--_a': 'calc(90deg * var(--f))',
        }}
        />
        <h3 className="mt-2 text-black text-lg font-semibold"> V6 Highline </h3>

        <img
        src="https://www.alravw.com/files/modelos/1724164380_comfortline.png"
        alt="the back of random person"
        className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
        style={{
            '--f': '.1',
            '--r': '10px',
            '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
            '--_a': 'calc(90deg * var(--f))',
        }}
        />
        <h3 className="mt-2 text-black text-lg font-semibold"> V6 Comfortline </h3>

        <img
        src="https://www.alravw.com/files/modelos/1724164355_trendline.png"
        alt="the back of random person"
        className="w-[250px] aspect-[1/1] object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-[-90deg]"
        style={{
            '--f': '.1',
            '--r': '10px',
            '--_f': 'calc(100% * var(--f) / (1 + var(--f)))',
            '--_a': 'calc(90deg * var(--f))',
        }}
        />
        <h3 className="mt-2 text-black text-lg font-semibold"> Trendline </h3>
        </div>
    </section>
  );
};

export default ParallaxImages;
