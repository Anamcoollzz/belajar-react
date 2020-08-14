import React from "react";

export default (props) => {
  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.onClick();
        }}
        className="btn btn-sm btn-primary"
      >
        <i className="fas fa-edit"></i> Edit
      </a>
      &nbsp;&nbsp;
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.onDelete();
        }}
        className="btn btn-sm btn-danger"
      >
        <i className="fas fa-trash"></i> Delete
      </a>
    </>
  );
};
