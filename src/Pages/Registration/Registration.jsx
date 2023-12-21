/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import loginimg from '../../assets/images/login.jpg'
const Registration = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const { createUser } = useContext(AuthContext);
  const handleRegistration = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');

    console.log( email, password)

    if(password.length < 6){
      setRegisterError('Password Should Be 6 Characters or Longer');
      return;
    }
    setRegisterError('');
    setSuccess('');
    createUser(email, password)
    .then(result =>{
      setSuccess('User Created Successfully')
    })
    .catch(error =>{
      setRegisterError(error.message)
    })
  }


  return (
    <div className=" container mx-auto flex ">
       
      <div className="card w-full max-w-lg lg:ml-72 my-8 shadow-2xl bg-base-100 mt-24">
        <form onClick={handleRegistration} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
          <p>Already Register? Please Login <Link className=" text-red-600 font-bold" to='/login'>Login</Link></p>
            <button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">
             Register
            </button>
          </div>
        </form>
        {
          registerError && <div className="toast toast-top toast-center">
          <div className="alert alert-error">
            <span>{registerError}</span>
          </div>
        </div>
        }
        {
          success && <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{success}</span>
          </div>
        </div>
        }
      </div>
      <div className=" mt-24">
          <img className=" w-3/4" src={loginimg} alt="" />
        </div>
    </div>
  );
};

export default Registration;
