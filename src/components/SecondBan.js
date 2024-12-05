import { useEffect, useState } from "react";
import Amarok from '../img/-vw-amarok-v6-extreme.webp';  // Asegúrate de que la ruta esté correcta
import '../styles/SecondBan.css'

const SecondBan = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detecta cuando se hace scroll y activa la animación
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Cuando el banner esté dentro de la vista, activa la animación
      if (scrollPosition > windowHeight / 2) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-72 pl-12">
    <div
      className={`second-banner relative w-full h-[500px] bg-contain bg-no-repeat bg-center overflow-hidden rounded-full transition-all duration-1000 ease-in-out transform ${
        scrolling ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
      style={{
        backgroundImage: `url(${Amarok})`,
      }}
    >
    

      {/* Las tres líneas de rasguño */}

      {/* <div className="absolute top-0 left-0 w-full h-full"> */}
        {/* Línea 1 */}
        {/* <div className="skew-box absolute left-1/4 transform skew-[0deg] z-0" style={{ height: '200px', left:'450px' }}></div> */}

        {/* Línea 2 */}
        {/* <div className="skew-box absolute left-1/3 transform skew-[0deg] z-0" style={{ height: '200px', left:'350px' }}></div> */}

        {/* Línea 3 */}
        {/* <div className="skew-box absolute left-1/2 transform skew-[0deg] z-0" style={{ height: '200px', left:'400px' }}></div> */}
      {/* </div> */}
    </div>
    </div>
  );
};

export default SecondBan;

