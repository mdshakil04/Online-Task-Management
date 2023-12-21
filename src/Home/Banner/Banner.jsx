/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[800px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VBypMM2/task-management.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Organize your task online</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success btn-outline font-bold text-2xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
