import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Stisla(props) {
  useEffect(() => {
    window.skripku();
  });
  return (
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <Navbar />
      <Sidebar active={props.active} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Stisla;
