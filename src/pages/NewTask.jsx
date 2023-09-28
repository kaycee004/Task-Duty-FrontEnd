import React, { useState } from "react";
import DropArrow from "../assets/Images/DownArrow.png";
import BackArrow from "../assets/Images/backArrow.png";
import DropDown from "../components/DropDown";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DropDown1 from "../components/DropDown1";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false)

const handleSubmit = async (e) =>{
  setSending(true)
  e.preventDefault()

  const formData = {
    title,
    description,
    tag
  }
  
  console.log(formData);
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  }
  const res = await fetch(`${baseURL}/api/task/create`, options)
  
  const data = await res.json()

if (res.status === 400) {
  toast.error(data.message)
  setSending(false)
  return
}

toast.success(data.message)
setSending(false)
Navigate("/task")
}



const Navigate = useNavigate();
return (
  <div className=" new-div d-flex flex-column gap-5 my-4  container">
      <div
        onClick={() => {
          Navigate(-1);
        }}
        className=" new-task d-flex flex-row "
        >
        <img
          style={{
            cursor: "pointer",
          }}
          src={BackArrow}
          alt=""
          />
        <h2 className=" new-header m-0">New Task</h2>
      </div>

      <form 
      onSubmit={handleSubmit}
      action="">
        <div className="position-relative">
          <label
            htmlFor="Title"
            className="title-task position-absolute p-0 fs-4 mb-0"
            >
            Task Title
          </label>
          <input
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          className="task w-100 p-3 rounded"
          type="text"
          id="Title"
          placeholder="E.g Project Defense, Assignment ..."
          />
        </div>

        <div className="position-relative">
          <label
            htmlFor="Description"
            className="description position-absolute p-0 fs-4 mb-0"
            >
            Description
          </label>
          <textarea
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
            className="  w-100 p-3 rounded mt-4"
            type="text"
            id="Description"
            placeholder="Briefly describe your task..."
            cols="30"
            rows="10"
            ></textarea>

          <DropDown1 setTag={setTag}/>


        </div>

        {/* <DropDown /> */}

        <button className="new-btn border-0 w-100 py-3 rounded fw-semibold fs-5"
        disabled={sending}>
          Done
        </button>
      </form>

      <div>
        <p className="back-top my-4">Back to Top</p>
      </div>
    </div>
  );
};

export default NewTask;

// if (res.status === 400) {
//   toast.error(data.message)
// }

// if (res.status === 201) {
//   toast.success(data.message)
// }

//guard clause