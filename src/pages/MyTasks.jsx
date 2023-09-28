import React from "react";
import plusIcon from "../assets/Images/plus sign.png";
import editIcon from "../assets/Images/edit.png";
import deleteIcon from "../assets/Images/delete.png";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const MyTasks = ({baseURL}) => {
  const { data, loading, error } = useFetch(`${baseURL}/api/task`);

  const handleDelete = async (id) => {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(`${baseURL}/api/task/${id}`, options);
    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(0);
      }, 1000);
      return;
    }
  };

  const navigate = useNavigate();

  return (
    <div className="py-5  mt-3 container">
      <div className="d-flex gap-5 justify-content-between">
        <h2 className="">My Tasks</h2>

        <div
          onClick={() => {
            navigate("/new");
          }}
          className=" plus-task d-flex gap-4"
          style={{
            cursor: "pointer",
          }}
        >
          <img className="plus" src={plusIcon} alt="" />
          <p className="add-task fs-5">Add New Task</p>
        </div>
      </div>

      <div className="d-flex flex-column gap-4">
        {data
          ? data.map((myTask) => {
              const { title, description, tag } = myTask;
              const tagColor = "urgent" ? "#F38383" : "#73C3A6";

              return (
                <div key={title} className="border rounded-2">
                  <div className="d-flex flex-column justify-content-between gap-5">
                    <div className="d-flex flex-row justify-content-between border-bottom pb-2">
                      <p
                        className="urgent-task mb-0 mt-3 fs-6"
                        style={{ color: tagColor }}
                      >
                        {tag}
                      </p>
                      <div className="both-btn d-flex gap-3 mt-3">
                        <Link
                          to={`/edit/${myTask._id}`}
                          className="edit-btn px-3 py-2 rounded fw-semibold"
                        >
                          {" "}
                          <img src={editIcon} alt="" /> Edit
                        </Link>

                        <button
                          onClick={() => {
                            handleDelete(myTask._id);
                          }}
                          className="delete-btn  bg-white px-3 rounded fw-semibold"
                        >
                          {" "}
                          <img src={deleteIcon} alt="" /> Delete
                        </button>
                      </div>
                    </div>

                    <div key={title} className="">
                      <p className="mx-2">{title}</p>
                      <p className="mx-2">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}

        {loading ? <p>Loading....</p> : null}
        {error ? <p>{error}</p> : null}
      </div>

      <p className=" back-task my-4">Back To Top</p>
    </div>
  );
};

export default MyTasks;
