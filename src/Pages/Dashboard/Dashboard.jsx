import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../../Firebase/AuthProvider";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  return (
    <div className=" ">
      <h2 className=" text-center text-7xl my-4">Add new Task</h2>
      <div>
        <div className="collapse ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {user && <p className=" text-2xl font-bold btn btn-outline btn-accent">{user.displayName}</p>}
          </div>
          <div className="collapse-content">
            <div className=" flex gap-4 mt-8">
              <button className=" btn   lg:text-2xl">
                New Task
              </button>
              <button className=" btn  lg:text-2xl">
                See Previous Task
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-1/2">
              <img src="https://i.ibb.co/VBypMM2/task-management.jpg" alt="" />
            </div>
            <div className="card shrink-0 w-1/2 ">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Descriptions</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="label">
                  <span className="label-text font-bold">Set Priority</span>
                </label>
                <select className="select select-bordered w-full ">
                  <option disabled selected>
                    Priority
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
                <h2 className=" font-bold text-red-600">Deadlines</h2>
                <div className=" border-2 rounded-lg py-2 px-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent text-white text-2xl">
                    Add task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
