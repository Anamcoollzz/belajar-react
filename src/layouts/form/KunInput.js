import React, { Component } from "react";

export default function KunInput(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const label =
    props.label || capitalizeFirstLetter(props.id.replace(/_/g, " "));
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input
        type={props.type || "text"}
        name={props.name || props.id}
        id={props.id}
        className={props.error ? "is-invalid form-control" : "form-control"}
        placeholder={props.placeholder || "Enter " + label}
        aria-describedby={"help" + props.id}
      />
      {props.hint ? (
        <small id={"help" + props.id} className="text-muted">
          {props.hint}
        </small>
      ) : (
        ""
      )}
      {props.error ? (
        <div id={"error" + props.id} className="invalid-feedback">
          {props.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
