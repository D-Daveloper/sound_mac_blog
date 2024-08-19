import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import closeicon from "../assets/icons/closeicon.svg";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  function menuControl() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, [isOpen]);

  return (
    <header className="grad relative shadow-2xl">
      <div className="mx-auto flex max-w-[80%] items-center justify-between bg-transparent p-5 text-white max-lg:max-w-[90%] max-md:max-w-full">
        <div className="hover:text-primary">
          <a href="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" />
            <h1>Soundmac</h1>
          </a>
        </div>
        <nav role="navigation">
          <ul className="flex gap-10 space-x-4 max-lg:hidden" role="list">
            <li role="listitem" aria-label="Home">
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li role="listitem" aria-label="About">
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li role="listitem" aria-label="Soundmac">
              <a href="https://www.soundmac.co/" className="hover:text-primary">
                Soundmac
              </a>
            </li>
          </ul>
        </nav>
        <button className="lg:hidden" onClick={menuControl} role="button">
          <img src={isOpen ? closeicon : hamburger} alt="" />
        </button>
        <nav
          className={
            "absolute left-0 top-[100%] z-50 w-full bg-mobile_nav text-black transition-all duration-300 ease-in-out" +
            (isOpen ? " flex -translate-x-0" : " -translate-x-full")
          }
          role="navigation"
          aria-label="navigation"
        >
          <ul
            className="flex h-dvh w-[80%] flex-col gap-10 bg-white p-10 lg:hidden"
            role="list"
          >
            <li role="listitem">
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li role="listitem">
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li role="listitem">
              <a href="https://www.soundmac.co/" className="hover:text-primary">
                Soundmac
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
