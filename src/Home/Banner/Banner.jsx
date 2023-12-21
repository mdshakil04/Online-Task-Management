/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[835px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VBypMM2/task-management.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Organize your task online</h1>
          <p className="mb-5">
            Sometimes we get so busy with our daily lives <br/> we do not take the steps and time necessary to be introspective.<br/>
            Organize your daily task here. It is totally free of cost. 
          </p>
          <Link to="/dashboard">
                <button className="btn btn-accent font-bold text-2xl">Let's Explore</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
