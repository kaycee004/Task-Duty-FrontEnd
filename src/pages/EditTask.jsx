import React, { useEffect, useState } from "react";
import DropArrow from "../assets/Images/DownArrow.png";
import BackArrow from "../assets/Images/backArrow.png";
import DropDown from "../components/DropDown";
import { useNavigate, useParams } from "react-router-dom";
import DropDown1 from "../components/DropDown1";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useFetch(
    `${baseURL}/api/task/${id}`
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };

    console.log(formData);

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${baseURL}/api/task/${id}`, options);
    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      navigate("/task");
      return;
    }
  };

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
        <h2 className=" new-header m-0">Edit Task</h2>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="position-relative">
          <label
            htmlFor="Title"
            className="title-task position-absolute p-0 fs-4 mb-0"
          >
            Task Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="task w-100 p-3 rounded"
            type="text"
            id="Title"
            placeholder="E.g Project Defense, Assignment ..."
            value={title}
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="  w-100 p-3 rounded mt-4"
            type="text"
            id="Description"
            placeholder="Briefly describe your task..."
            cols="30"
            rows="10"
            value={description}
          ></textarea>

          <DropDown1 setTag={setTag} />
        </div>

        {/* <DropDown /> */}

        <button
          className="new-btn border-0 w-100 py-3 rounded fw-semibold fs-5"
          disabled={sending}
        >
          Done
        </button>
      </form>

      <div>
        <p className="back-top my-4">Back to Top</p>
      </div>
    </div>
  );
};

export default EditTask;
