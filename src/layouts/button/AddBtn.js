import React, { Component } from "react";

export default function AddBtn(props) {
  return (
    <div className="card-header-action">
      {props.refreshBtn ? (
        <a
          onClick={(e) => {
            e.preventDefault();
            props.onRefresh();
          }}
          href="#"
          className="btn btn-primary"
        >
          <i className="fa fa-sync" aria-hidden="true"></i>&nbsp;{" "}
          {props.refreshText || "Refresh"}
        </a>
      ) : (
        ""
      )}
      &nbsp;
      <a
        onClick={(e) => {
          e.preventDefault();
          props.onClick();
        }}
        href="#"
        className="btn btn-primary"
      >
        <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;{" "}
        {props.text || "Add New Data"}
      </a>
    </div>
  );
}
