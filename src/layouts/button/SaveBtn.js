import React from "react";

export default function SaveBtn(props) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={
        props.saving
          ? "btn btn-primary btn-progress disabled"
          : "btn btn-primary"
      }
    >
      {props.text || "Save Changes"}
    </button>
  );
}
