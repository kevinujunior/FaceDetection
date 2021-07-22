import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="back_img">
        <Link
          to="/imgupload"
          className="home_btn_img"
          style={{ textDecoration: "none", fontSize: "20px" }}
        >
          Upload your Image
        </Link>
      </div>
    </div>
  );
};

export default Home;
