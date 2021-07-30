import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const ImgUpload = () => {
  const [img, setImg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [prevImg, setPrevImg] = useState("");
  var history = useHistory();

  useEffect(() => {
    history.replace("/upload");
  }, [history]);

  const handleImage = (e) => {
    setPrevImg(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
    console.log(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (img) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let data = new FormData();
      data.append("photo", img, img.name);
      const res = await axios.post(
        "https://mamun-facedetector.herokuapp.com/images/images/",
        data,
        config
      );
      console.log(res);
      setRedirect(true);
    } else {
      alert("Please provide an image");
    }
  };

  return (
    <div className="imgUpload">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="imgUpload_img">
            {!prevImg ? (
              <div className="imgUpload_upload">
                <input type="file" id="img_input" onChange={handleImage} />
                <label htmlFor="img_input">Choose an image</label>
              </div>
            ) : (
              <div className="imgUpload_show">
                <img src={prevImg} alt="Preview" />
              </div>
            )}
          </div>
          <input type="submit" className="imgUpload_button" />
        </div>
      </form>

      {redirect && <Redirect to="/response" />}
    </div>
  );
};

export default ImgUpload;
