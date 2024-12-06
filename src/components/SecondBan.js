import { useEffect, useState } from "react";
import Amarok from '../img/-vw-amarok-v6-extreme.webp';  // Asegúrate de que la ruta esté correcta
import '../styles/SecondBan.css'


const SecondBan = () => {
    const [scrolling, setScrolling] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight / 6) { // Activar el efecto cuando el usuario ha hecho más scroll
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className="relative pt-72 pl-12">
        <div
          className={`second-banner relative w-full h-[500px] bg-contain bg-no-repeat bg-center overflow-hidden rounded-full transition-all duration-1000 ease-in-out transform ${
            scrolling ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${Amarok})`,
          }}
        >
          {/* Aquí puedes agregar las líneas de rasguño si las necesitas */}
        </div>
  
        <div className="text-container flex flex-col items-center justify-center absolute top-0 right-0 w-1/2 h-full p-8 bg-white">
          <p
            className={`text-xl transition-all duration-1000 ease-in-out ${
              scrolling ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
          >
            Un diseño único que soporta todas las exigencias del trabajo. ¡Iba a ser difícil encontrar un pick-up con tanto confort y potencia!!
          </p>
          <p
            className={`text-xl transition-all duration-1000 ease-in-out mt-8 ${
              scrolling ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
          >
            Un gran número de posibilidades quedan abiertas
            gracias a las capacidades del Amarok, y para muestra
            basta mencionar que puede remolcar un peso
            de hasta 3.5 toneladas
          </p>
          <p
            className={`text-xl transition-all duration-1000 ease-in-out mt-8 ${
              scrolling ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
          >
            Los terrenos difíciles no son un problema, gracias a la
            tracción 4Motion disponible en conjunto con
            la transmisión automática de 8 velocidades, hacen del
            Amarok, el vehículo ideal para cualquier superficie
          </p>
        </div>
      </div>
    );
  };
  
  export default SecondBan;

