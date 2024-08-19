import React from "react";
import Hero from "../components/Hero";
const HomePage = () => {
  return (
    <main className="bg-homebg">
      <div>
        <Hero />
      </div>
      <section>
        <div>
          <h1 className="capitalize text-text font-bold text-4xl ">
            recent posts
          </h1>
        </div>
      </section>      
    </main>
  );
};

export default HomePage;
