import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as automl from "@tensorflow/tfjs-automl";
import * as tf from "@tensorflow/tfjs";
import loadingimage from "./images/loading.gif";

function Response(props) {
  var history = useHistory();
  const image = props.location.state.image;
  const [loadingString, setLoadingString] = useState("");
  const [model, setModel] = useState();

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  //LOAD MODEL
  async function loadModel() {
    const modelUrl = "model/model.json";
    try {
      console.log("model loading");
      setLoadingString("model loading");
      overlayOn();
      const modelautoml = await automl.loadImageClassification(modelUrl);
      setModel(modelautoml);
      console.log("setloaded model");
      overlayOff();
    } catch (err) {
      console.log(err);
      console.log("failed loading model");
    }
  }

  // OVERLAY
  function overlayOn() {
    document.getElementById("overlay").style.display = "block";
  }
  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  //PREDICTION
  async function predictionFunction() {
    const image = document.getElementById("img");
    console.log("detecting image");

    const predictions = await model.classify(image);
    console.log(predictions);
    overlayOff();
    // Traversing for Result
    var result = 0;
    var resultlabel = "";
    for (var key in predictions) {
      if (predictions[key].prob > result) {
        result = predictions[key].prob;
        resultlabel = predictions[key].label;
      }
    }
    console.log(resultlabel, result);

    // Show the resulting object on the page.

    const pre = document.getElementById("graph");
    if (result > 0.6)
      pre.innerHTML =
        "<h2>Result : " +
        resultlabel +
        "</h2><span/><h2>Accuracy : " +
        result +
        "</h2>";
    else pre.innerHTML = "<h2>AI is not able to predict</h2>";
  }

  return (
    <div>
      <div id="overlay">
        <div id="overlay_image">
          <img src={loadingimage} alt="loding" />
        </div>
        <div id="overlay_text">{loadingString}</div>
      </div>
      <div className="response">
        <div className="response_top">
          <h2>Response page</h2>
          <button
            className="home_btn"
            onClick={() => {
              setLoadingString("detecting image");
              overlayOn();
              predictionFunction();
            }}
          >
            Start Detect
            <i
              className="bi bi-chevron-right"
              style={{ paddingLeft: "5px" }}
            ></i>
          </button>
        </div>
        <div className="imgUpload_show">
          <div>
            <img src={image} id="img" alt="Response" />
          </div>
        </div>
        <div id="graph"></div>
      </div>
    </div>
  );
}

export default Response;
