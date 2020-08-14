import React, { Component } from "react";

export default (props) => {
  return (
    <div className="table-responsive">
      <table
        className="table table-striped table-bordered table-hovered"
        id="datatable"
      >
        {props.children}
      </table>
    </div>
  );
};
