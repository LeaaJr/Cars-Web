import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-transparent-500 rounded-lg md:hidden hover:bg-transparent-100 focus:outline-none focus:ring-2 focus:ring-transparent-200 dark:text-transparent-400 dark:hover:bg-transparent-700 dark:focus:ring-transparent-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-transparent-100 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-transparent-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-transparent-700 rounded md:bg-transparent md:text-transparent-700 md:dark:text-transparent-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-transparent-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-transparent-700 md:dark:hover:text-transparent-500 dark:text-white dark:hover:bg-transparent-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-transparent-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-transparent-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-transparent-700 md:dark:hover:text-transparent-500 dark:text-white dark:hover:bg-transparent-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-transparent-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-transparent-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-transparent-700 md:dark:hover:text-transparent-500 dark:text-white dark:hover:bg-transparent-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-transparent-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
