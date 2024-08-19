import React from "react";
import Hero from "../components/Hero";
import AdComponent from "../components/adComponent";
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
          <AdComponent />
        </div>
      </section>      
    </main>
  );
};

export default HomePage;
