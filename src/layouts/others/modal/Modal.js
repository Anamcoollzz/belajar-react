import React, { Component } from "react";

export default (props) => {
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id={props.id || "exampleModal"}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title || "Modal Title"}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
