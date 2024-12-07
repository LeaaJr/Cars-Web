import { useState, useEffect } from "react";

const ImgUrlone = 'https://matassieimperiale.com.ar/postventa/img/yocuidomivw.png'
const ImgUrltwo = 'https://www.alravw.com/files/modelos/1724164246_amarok4.jpg'
const ImgUrlthree = 'https://assets.volkswagen.com/is/image/volkswagenag/volkswagen-amarok_stage_montana-todoterreno_16x9_2560x1440_jun-2023-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTI0MDAmaGVpPTEzNTAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYjFlMQ=='

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ImgUrlone, ImgUrltwo, ImgUrlthree];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambio cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="relative w-full h-[730px] banner-main "> {/* Clase específica para el banner */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index}`}
                className=" object-cover w-full h-full brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

