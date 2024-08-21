import React, { useState } from "react";
import Hero from "../components/Hero";
import { home_post } from "../data/index";
import { ArrowLeft, ArrowRight, Heart, Share2 } from "lucide-react";
import 'animate.css';

const HomePage = () => {

  const [likedPosts, setLikedPosts] = useState({});

  const handleIconClick = (e) => {
    let event = e.target;
    if (event.style.fill === "#10414A"){
      return event.style.fill === "none"
    }else if(event.style.fill === "non e"){
      event.style.fill = "#10414A";
    }
    console.log(event.style.fill);
    
  };

  return (
    <main className="bg-homebg">
      <div>
        <Hero />
      </div>
      <section className="">
        <div className="">
          <div className="max-w-[70%] mx-auto">
            <h1 className="animate__animated animate__bounce my-11 text-4xl font-bold capitalize text-text">
              recent posts
            </h1>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {home_post.map((item, index) => (
                <article key={index} className="flex rounded-2xl bg-white p-3 hover:shadow-lg">
                  <div className="flex flex-col gap-5 justify-between  hover:cursor-pointer">
                    <div>
                      <img src={item.imgURL} alt="" className="object-cover" />
                    </div>
                    <h2 className="font-semibold leading-normal text-text md:text-[2vw]">
                      {item.Text}
                    </h2>
                    <p className="text-sm">{item.time}</p>
                    <div className="flex justify-between text-base font-semibold items-baseline align-baseline">
                      <p className="text-icon flex gap-3">
                        <button onClick={handleIconClick} className="fill-none">
                        <Heart stroke="#10414A" className={"hover:scale-110 focus:scale-110" }/> 
                        </button>
                        {item.likes}
                      </p>
                      <p className="text-icon flex gap-3">
                        <button onClick={handleIconClick}>
                          <Share2 stroke="#10414A" className={"hover:scale-110 focus:scale-110"} />
                          </button>
                        {item.shares}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
        <div className="py-14 flex justify-between max-w-[70%] gap-2 mx-auto">
          <button className="rounded-full border border-black p-3 hover:bg-icon hover:text-white  max-md:p-2">
            <ArrowLeft />
          </button>
          <div className="flex gap-2">
            <button className="bg-icon text-white rounded-full px-5 py-2 hover:bg-icon hover:text-white shadow-md max-md:px-4 max-md:py-1">
              1
            </button>
            <button className="bg-white rounded-full px-5 py-2 hover:bg-icon hover:text-white shadow-md max-md:px-4 max-md:py-1">
              2
            </button>
            <button className="bg-white rounded-full px-5 py-2 hover:bg-icon hover:text-white shadow-md max-md:px-4 max-md:py-1">
              3
            </button>
          </div>
          <button className="rounded-full border border-black p-3 hover:bg-icon hover:text-white max-md:p-2">
            <ArrowRight />
          </button>
        </div>
        <div className="max-w-[70%] mx-auto">
          <h3 className="capitalize font-semibold text-[1.5vw] max-md:text-lg">
            dont miss a beat!
          </h3>
          <p className="text-sm">Subscribe to our newsletter <br />for the latest updates straight to your inbox.</p>
          <form action="" className="flex flex-col gap-5">
            <input type="email" placeholder="Email Address" className="p-2 bg-icon bg-opacity-[20%] max-w-[60%] outline-icon rounded-[5px] max-md:max-w-full"/>
            <button className="text-white bg-icon max-w-[30%] max-md:max-w-full rounded-[5px] p-1 mb-44 hover:bg-opacity-[90%]" type="submit" >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
