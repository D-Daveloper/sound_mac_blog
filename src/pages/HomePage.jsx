import React from "react";
import Hero from "../components/Hero";
import { home_post } from "../data/index";
import { Heart, Share2 } from "lucide-react";
import adimg from "../assets/images/adimg.png"; //example ad image
const HomePage = () => {
  return (
    <main className="bg-homebg">
      <div>
        <Hero />
      </div>
      <section className="mx-auto flex max-w-[90%] gap-6">
        <div className="max-w-[70%]">
          <h1 className="my-11 text-4xl font-bold capitalize text-text">
            recent posts
          </h1>
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {home_post.map((item, index) => (
              <article key={index} className="flex rounded-2xl bg-white p-3">
                <div className="flex flex-col gap-5 hover:cursor-pointer">
                  <div>
                    <img src={item.imgURL} alt="" className="object-cover" />
                  </div>
                  <h2 className="font-semibold leading-normal text-text md:text-[2vw]">
                    {item.Text}
                  </h2>
                  <p className="text-sm">{item.time}</p>
                  <div className="flex justify-between text-base font-semibold">
                    <button className="flex gap-2">
                      <Heart /> {item.likes}
                    </button>
                    <button className="flex gap-2">
                      <Share2 />
                      {item.shares}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
        {/* <div className="mt-10 md:ml-10">
            <img src={adimg} alt="" />
          </div> */}
      </section>
    </main>
  );
};

export default HomePage;
