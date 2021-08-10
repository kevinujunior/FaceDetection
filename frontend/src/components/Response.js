import React, { useEffect , useState, useRef } from "react";
import { Redirect,useHistory } from "react-router-dom";
import {
  Textfield,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@material-ui/core";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

function Response(props) {
  var history = useHistory();  
  // useEffect(() => {
  //   history.replace("/response");
  // }, [history]);
	const image = props.location.state;
  
  const webcamRef = React.useRef(null);
  const [videoWidth,setVideoWidth] = useState(960);
  const [videoHeight,setVideoHeight] = useState(640);

  const [model,setModel] = useState();

  async function loadModel() {
    try{
      console.log("model loading");
      const model = await cocoSsd.load();
      setModel(model);
      console.log("setloaded model");
    }catch(err){
      console.log(err);
      console.log("failed loading model");
    }

  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    } )
  },[]);

  async function predictionFunction() {
    const predictions = await model.detect(document.getElementById("img"));

    var cnvs = document.getElementById("myCanvas");
    var ctx = cnvs.getContext("2d");
    ctx.clearRect(
      0,
      0,
      webcamRef.current.video.videoWidth,
      webcamRef.current.video.videoHeight
      );
    if(predictions.length > 0) { //predictions.length represent no of objects
      console.log(predictions)
      for (let n = 0; n < predictions.length; n++){
        console.log(n);
        if(predictions[n].score > 0.8) {
          // get the dimension of the box if prdiction> 0.8
          let bboxLeft = predictions[n].bbox[0];
          let bboxTop = predictions[n].bbox[1];
          let bboxWidth = predictions[n].bbox[2];
          let bboxHeight = predictions[n].bbox[3];

          console.log("bboxLeft:"+bboxLeft);
          console.log("bboxTop:"+bboxTop);
          console.log("bboxWidth:"+bboxWidth);
          console.log("bboxHeight:"+bboxHeight);

          // draw
          ctx.beginPath();
          ctx.font = "28px Arial";
          ctx.fillStyle = "red";

          ctx.fillText(
            predictions[n].class +
            ": " +
            Math.round(parseFloat(predictions[n].score)*100)+
            "%",
            bboxLeft,
            bboxTop
            );
          ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
          ctx.strokeStyle = "#FF0000";

          ctx.lineWidth = 3;
          ctx.stroke();

          console.log("detected");
        }
      }
    }
    setTimeout(() =>predictionFunction(), 500);
  }

  const videoConstraints = {
    height: 1080,
    width: 1920,
    maxWidth: "100vw",
    facingMode: "environment",
  };

  return (
    <div className="response">
      <h2>Response page</h2>
          <Button
            variant={"contained"}
            style={{
              color: "white",
              backgroundColor: "blueviolet",
              width: "50%",
              maxWidth: "250px",
            }}
            onClick={() => {
              predictionFunction();
              }}>
              Start Detect
          </Button>
          <div className="imgUpload_show" style={{maxWidth: "700px",}}>
            <div style={{ position: "absolute", top: "30%", left: "30%", zIndex: "9999"}}>
              <canvas
                id="myCanvas"
                width={videoWidth}
                height={videoHeight}
                style={{backgroundColor: "transparent",}}
              />
            </div>
            <div style={{ position: "absolute", top: "30%", left: "30%",}}>
                
                  <Webcam
                audio={false}
                id="img"
                style={{
                  width: "70%",
                }}
                ref={webcamRef}
                screenshotQuality={1}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                />
            </div>
          </div>
    </div>
  );
}

export default Response;

// <img 
//                   src={image}
//                   id="img"
//                   ref={webcamRef}
//                   screenshotQuality={1}
//                   screenshotFormat="image/jpeg"
//                   alt="Response"/>
