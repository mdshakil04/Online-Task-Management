import React from "react";
import web from "../../assets/images/users/web.jpg";
import corporate from "../../assets/images/users/corporate.jpg";
import banker from "../../assets/images/users/banker.jpg";
import student from "../../assets/images/users/student.jpg";

const Users = () => {
  return (
    <div className=" container mb-4  mx-auto p-4">
      <h2 className="text-5xl text-center">
        {" "}
        Benefited by Professionals
      </h2>
      <div className=" mt-8 grid  lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={web}
              alt="user"
            />
          </figure>
          <div className=" text-center border-4 -mt-8 bg-white rounded-xl pb-4">
            <h2 className="text-4xl ">Programmers</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={corporate}
              alt="user"
            />
          </figure>
          <div className=" text-center border-4 -mt-8 bg-white rounded-xl pb-4 ">
            <h2 className="text-4xl">Corporate</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={banker}
              alt="user"
            />
          </figure>
          <div className=" text-center border-4 -mt-8 bg-white rounded-xl pb-4">
            <h2 className="text-4xl">Bankers</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={student}
              alt="user"
            />
          </figure>
          <div className=" text-center border-4 -mt-8 bg-white rounded-xl pb-4">
            <h2 className="text-4xl">Students</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
