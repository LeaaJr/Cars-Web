import { useEffect, useState } from "react";
import ImgProd from "../components/ImgProd";
import '../styles/SectionTwo.css'


const SecondBan = () => {
  const [thresholdReached, setThresholdReached] = useState(false); // Para controlar si se ha alcanzado el umbral
  const [lastScrollY, setLastScrollY] = useState(0); // Para almacenar la última posición del scroll
  const [scrollingDown, setScrollingDown] = useState(true); // Para saber si estamos haciendo scroll hacia abajo o hacia arriba

  useEffect(() => {
    const scrollThreshold = window.innerHeight / 3; // Umbral que define cuando se muestra el contenido (ajustable)

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el scroll está bajando, actualizamos el estado de scrollingDown
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true); // Scroll hacia abajo
      } else if (currentScrollY < lastScrollY) {
        setScrollingDown(false); // Scroll hacia arriba
      }

      // Controla si el usuario ha pasado el umbral para mostrar el contenido
      if (currentScrollY > scrollThreshold && scrollingDown) {
        setThresholdReached(true); // Si pasamos el umbral y estamos bajando, mostramos el contenido
      } else if (currentScrollY < scrollThreshold && !scrollingDown) {
        setThresholdReached(false); // Si estamos subiendo y pasamos el umbral, ocultamos el contenido
      }

      setLastScrollY(currentScrollY); // Actualiza la última posición del scroll
    };

    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollingDown]); // Se asegura de que se actualice la dirección del scroll

  return (
    <div className="relative pt-72 pl-12">
      {/* Imagen */}
      <div
        className="second-banner relative w-full h-[500px] bg-contain bg-no-repeat bg-center overflow-hidden rounded-full"
        style={{
          backgroundImage: `url(${ImgProd.AmarokV6Ext})`,
          transition: 'all 2s ease-in-out', // Establecer la duración de la animación a 2 segundos
          transform: thresholdReached ? 'scale(1) translateX(0)' : 'scale(0.9) translateX(100%)', // Controlar la aparición/desaparición
          opacity: thresholdReached ? 1 : 0, // Controlar la visibilidad
        }}
      >
        {/* Aquí puedes agregar las líneas de rasguño si las necesitas */}
      </div>

      {/* Texto */}
      <div className="text-container flex flex-col items-center justify-center absolute top-0 right-0 w-1/2 h-full p-8 bg-white">
        <p
          className="text-xl"
          style={{
            transition: 'all 2s ease-in-out', // Duración de la animación para el texto
            transform: thresholdReached ? 'translateX(0)' : 'translateX(5px)', // Desplazamiento del texto
            opacity: thresholdReached ? 1 : 0, // Controlar visibilidad
          }}
        >
          Un diseño único que soporta todas las exigencias del trabajo. ¡Iba a ser difícil encontrar un pick-up con tanto confort y potencia!!
        </p>
        <p
          className="text-xl mt-8"
          style={{
            transition: 'all 2s ease-in-out', // Duración de la animación para el texto
            transform: thresholdReached ? 'translateX(0)' : 'translateX(5px)', // Desplazamiento del texto
            opacity: thresholdReached ? 1 : 0, // Controlar visibilidad
          }}
        >
          Un gran número de posibilidades quedan abiertas gracias a las capacidades del Amarok, y para muestra basta mencionar que puede remolcar un peso de hasta 3.5 toneladas.
        </p>
        <p
          className="text-xl mt-8"
          style={{
            transition: 'all 2s ease-in-out', // Duración de la animación para el texto
            transform: thresholdReached ? 'translateX(0)' : 'translateX(5px)', // Desplazamiento del texto
            opacity: thresholdReached ? 1 : 0, // Controlar visibilidad
          }}
        >
          Los terrenos difíciles no son un problema, gracias a la tracción 4Motion disponible en conjunto con la transmisión automática de 8 velocidades, hacen del Amarok, el vehículo ideal para cualquier superficie.
        </p>
      </div>
    </div>
  );
};

export default SecondBan;
