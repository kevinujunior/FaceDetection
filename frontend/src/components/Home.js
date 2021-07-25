import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  var history = useHistory();

  useEffect(() => {
    history.replace("/");
  }, [history]);
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
