import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Response() {
  var history = useHistory();

  useEffect(() => {
    history.replace("/response");
  }, [history]);

  return (
    <div className="response">
      <h2>Response page</h2>
    </div>
  );
}

export default Response;
