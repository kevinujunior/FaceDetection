import React, { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import * as automl from "@tensorflow/tfjs-automl"; 
import * as tf from "@tensorflow/tfjs";
import loadingimage from './images/loading.gif'
import { Button } from "@material-ui/core";

function Response(props) {
  var history = useHistory();  
  const image = props.location.state.image;
  const [loadingString, setLoadingString]=useState("");
  const [model,setModel] = useState();

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    } )
  },[]);

  //LOAD MODEL
  async function loadModel() {
    const modelUrl = 'model/model.json'
    try{
      console.log("model loading");
      setLoadingString("model loading");
      overlayOn();
      const modelautoml = await automl.loadImageClassification(modelUrl);
      setModel(modelautoml);
      console.log("setloaded model");
      overlayOff();
    }catch(err){
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

    
    const image = document.getElementById('img');
    console.log("detecting image");
    
    const predictions = await model.classify(image);
    console.log(predictions);
    overlayOff();
    // Traversing for Result
    var result = 0;
    var resultlabel ="";
    for(var key in predictions){
      if(predictions[key].prob>result){
        result = predictions[key].prob;
        resultlabel = predictions[key].label;
      }
    }
    console.log(resultlabel,result);

    // Show the resulting object on the page.
    
    const pre = document.getElementById('graph');
    if(result>0.6)
      pre.innerHTML = "<h2>Result : "+resultlabel+"</h2><span/><h2>Accuracy : "+result+"</h2>";
    else
      pre.innerHTML = "<h2>AI is not able to predict</h2>";
   }

  return (
    <div>
    <div id="overlay">
        <div id="overlay_image">
          <img src={loadingimage}/>
          </div>
          <div id="overlay_text">
            {loadingString}
        </div>
    </div>
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
              setLoadingString("detecting image");
              overlayOn();
              predictionFunction();
              }}>
              Start Detect
          </Button>
          <div className="imgUpload_show">
            <div style={{ position: "absolute", top: "30%", left: "5%", height: "100vh", width: "100vw"}}>
              <img 
                src={image}
                id="img"
                alt="Response"/>
            </div>
          </div>
          <div id="graph" style={{ position: "absolute", top: "40%", left: "45%", height: "100vh", width: "50vw"}}>
          </div>
          
    </div>
    </div>
  );
}

export default Response;