import { useState, useEffect } from "react";

const ImgUrlone = 'https://t3.ftcdn.net/jpg/03/24/10/98/240_F_324109801_KcQvtJxmiu2mUFZnfqu1Kk7Nt8Oa6WUG.jpg'
const ImgUrltwo = 'https://t4.ftcdn.net/jpg/09/24/89/77/360_F_924897733_ilds6gCtaeGRy3ppVvoWJoYBZAdnsxEM.webp'
const ImgUrlthree = 'https://t3.ftcdn.net/jpg/03/82/80/26/360_F_382802685_bI69g1DEnmyrMXotMZ49pfh1VhRUBDdc.webp'

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
    <div className="relative w-full h-[500px] banner-main"> {/* Clase específica para el banner */}
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
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

