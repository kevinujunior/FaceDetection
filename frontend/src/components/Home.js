import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home_img">
        <Link to="/upload" className="home_btn">
          Upload your image
        </Link>
      </div>
    </div>
  );
};

export default Home;
