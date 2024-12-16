import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Visual = () => {
  const location = useLocation();
  const [state, setState] = useState(null);

  // Verificamos si el estado es nulo o no
  useEffect(() => {
    console.log("Location state:", location.state); // Verificar si el estado está disponible

    if (location.state) {
      setState(location.state);
    } else {
      console.error("El estado no está disponible");
    }
  }, [location.state]);

  // Si no hay estado, mostrar mensaje de carga
  if (!state) {
    return <p>Cargando...</p>;
  }

  const { imageUrl, name, price } = state;

  return (
    <div className="pt-16 bg-gray-900">
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              {imageUrl ? (
                <>
                  <img className="w-full dark:hidden" src={imageUrl} alt="Imagen seleccionada" />
                  <img className="w-full hidden dark:block" src={imageUrl} alt="Imagen seleccionada en modo oscuro" />
                </>
              ) : (
                <p>Imagen no disponible o no se pasó correctamente</p>
              )}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {name || "No name available"}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  {price || "No price available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visual;
