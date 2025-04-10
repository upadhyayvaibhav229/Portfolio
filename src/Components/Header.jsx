import React, { useContext, useEffect, useState } from "react";
import logo from '/LOGO.png';
import { Link as ScrollLink } from "react-scroll";
import ThemeContext from "../Context/useTheme";


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleCloseNavbar = () => {
    setIsNavbarOpen(false);
  };

  // Dark mode
  const { theme, ToggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <header>
      <nav className="fixed top-0 shadow-lg container flex items-center justify-between p-2 bg-slate-800 max-w-full ">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            id="home"
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-yellow-500 text-xl font-mono">Vaibhav</h1>
        </div>

        {/* Desktop Navbar */}
        <div className="items-center gap-6 md:flex hidden">
          <ul className="list-none flex items-center gap-6 cursor-pointer">
            {[
              "home",
              "about",
              "services",
              "skills",
              "projects",
              "contacts",
            ].map((item) => (
              <li
                key={item}
                className="hover:bg-slate-950 hover:text-red-800 px-4 py-2 rounded-lg"
              >
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={1000}
                  className="text-white text-md font-semibold"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Changer */}
        <div className=" justify-center  md:block hidden">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={ToggleTheme}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-gray-400 text-xl cursor-pointer"
          onClick={handleNavbar}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isNavbarOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </nav>

      {/* Mobile Navbar */}
      {isNavbarOpen && (
        <div
          id="navbar-content"
          className=" top-14 right-0 w-full bg-slate-800 p-4 rounded-lg flex flex-col items-start z-40 md:hidden fixed"
        >
          <ul className=" flex flex-col gap-4 w-full">
            {[
              "home",
              "about",
              "services",
              "skills ",
              " projects",
              "contacts",
            ].map((item) => (
              <li key={item} className="w-full text-center cursor-pointer">
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-white text-lg font-semibold hover:text-yellow-500 block px-2 py-2"
                  onClick={handleCloseNavbar}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="flex justify-center absolute bottom-5 ">
            <label className="relative inline-flex items-center cursor-pointer md:hidden">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={ToggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
