import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const ImgUpload = () => {
  const [img, setImg] = useState("");
  const [redirect, setRedirect] = useState(false);
  var history = useHistory();

  useEffect(() => {
    history.replace("/upload");
  }, [history]);

  const handleImage = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleRedirect = () => {
    setRedirect(true);
  };

  return (
    <div className="imgUpload">
      <div className="imgUpload_img">
        {!img ? (
          <div className="imgUpload_upload">
            <input type="file" id="img_input" onChange={handleImage} />
            <label for="img_input">Choose an image</label>
          </div>
        ) : (
          <div className="imgUpload_show">
            <img src={img} alt="Preview" />
          </div>
        )}
      </div>
      <button className="imgUpload_button" onClick={handleRedirect}>
        Do Magic
      </button>
      {redirect && <Redirect to="/response" />}
    </div>
  );
};

export default ImgUpload;
