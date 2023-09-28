import React, { useState } from "react";
import DropArrow from "../assets/Images/DownArrow.png";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = ({}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [arrowDown, setArrowDown] = useState(["Urgent", "Important"]);
  const [selection, setSelection] = useState("Select tags");

  return (
    <div className="position-relative">
      <p className="tags p-0 fs-4 position-absolute mb-0">Tags</p>
      <div
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
      >
        
        <div className="tag-div d-flex justify-content-between gap-3 border rounded">
          <div className="urgent d-flex gap-2 mx-5 mt-3">
            <p className="samep px-1 py-1 rounded fs-6">{selection}</p>
          </div>

          <RiArrowDownSLine
            style={{
              transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
              cursor: "pointer",
            }}
            className="fs-1 arrow-down mx-4 mt-2"
          />
        </div>
      </div>
      {toggleDropdown && (
        <ul className="dropdown-options py-3 px-3 rounded-2 top-100 mt-4 w-100 border">
          {arrowDown.map((lists) => {
            return (
              <li
                key={lists}
                onClick={() => {
                  setSelection(lists === "Select tags" ? "Select tags" : lists);
                  setToggleDropdown(false);
                }}
              >
                {lists}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
