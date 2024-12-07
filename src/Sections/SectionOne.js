import React from "react";

const SectionOne = () => {
    return(
        <section className="bg-white dark:bg-white-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">Contamos con amplia gama !!</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Contamos con la nueva gama de vehiculos amarok v6, v6 extreme, preparada para cualquier tipo de terreno, amplia, confortable, para ciudad y el campo.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Comprar
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Ver Más
                </a>  
            </div>
        </div>
        <div>
        <iframe
            className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
            src="https://www.youtube.com/embed/hkA9Jy8eUc0?si=9EfQWf6xhKXifMP1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
    </div>
</section>
    );
};

export default SectionOne