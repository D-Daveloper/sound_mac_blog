import React from "react";
import heroperson from "../assets/images/heroperson.webp";
import heroalbum from "../assets/images/hero_album.webp";

const Hero = () => {
  return (
    <section>
      <div className="grad img relative flex h-[70dvh] max-w-full justify-between overflow-hidden">
        <img src={heroperson} alt="" className="" />
        <img src={heroalbum} alt="" className="" />
      </div>
      <div className="absolute bottom-0 left-[0%] top-24 flex h-[70dvh] w-full flex-col items-center justify-center bg-black bg-opacity-50 text-center text-4xl text-white text-opacity-100 max-md:bg-opacity-25 max-md:text-2xl">
        <p className="font-semibold leading-normal">Stay Tuned</p>
        <p className="font-semibold leading-normal">
          with the Latest Music Trends
        </p>
        <p className="max-w-xl text-center text-lg font-medium leading-normal max-md:text-sm">
          Discover new artists, tracks, and industry updates. Your one-stop
          destination for all things music
        </p>
      </div>
    </section>
  );
};

export default Hero;
