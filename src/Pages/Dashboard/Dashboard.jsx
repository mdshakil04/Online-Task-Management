import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../../Firebase/AuthProvider";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const experience = form.experience.value;
    const category = form.category.value;
    const description = form.image.value;
    const newTeacher = { name, title, experience, category, description };
    console.log(newTeacher);
  };
  return (
    <div className=" container mx-auto">
      <h2 className="text-4xl text-center mt-4">Add New Task</h2>
      <div className=" flex flex-row-reverse">
        <div className=" w-1/2">
          <div className=" container bg-[#83cbf5ea] mx-auto p-8 my-8">
            <form onSubmit={handleAddTask} className="">
              <div className=" grid md:grid-cols-2  gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl ">Title</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Enter Title here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-xl ">Description</span>
                  </label>
                  <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xl ">
                      Deadlines
                    </span>
                  </label>
                  <div className=" border-2 rounded-lg py-2 px-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xl ">Priority</span>
                  </label>
                  <select
                    className="select select-info w-full "
                    name="category"
                    type="text"
                  >
                    <option type="text" value disabled defaultValue>
                      Select Task Priority
                    </option>
                    <option type="text" value="Web Development">
                      Low
                    </option>
                    <option type="text" value="Digital Marketing">
                      Moderate
                    </option>
                    <option type="text" value="Digital Marketing">
                      High
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <input
                  className=" text-xl font-bold btn border-2 border-slate-700 btn-info mt-4 w-full"
                  type="submit"
                  value="Add Task"
                />
              </div>
            </form>
          </div>
        </div>
        <div className=" w-1/2">
        <details className="collapse">
          <summary className="collapse-title text-xl font-medium">
          {user && <p className=" btn btn-accent ">{user.displayName}</p>}
          </summary>
          <div className="collapse-content flex flex-col">
            <button className=" btn btn-accent btn-outline">New Task</button>
            <button className=" mt-4 btn btn-accent btn-outline">Previous Task</button>
            <button className=" mt-4 btn btn-accent btn-outline">Ongoing Task</button>
            <button className=" mt-4 btn btn-accent btn-outline">Completed Task</button>
          </div>
        </details>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
