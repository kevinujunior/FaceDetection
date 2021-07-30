import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Response() {
  var history = useHistory();

  useEffect(() => {
    history.replace("/response");
  }, [history]);

  return (
    <div className="response">
      <h2>Inside response page(dummy text)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        provident porro saepe error perferendis voluptates, soluta quos omnis
        accusamus sapiente tenetur eius voluptas beatae illum? Ex nisi, fuga
        debitis blanditiis recusandae sint sed quia, mollitia quae amet ipsum.
        Asperiores temporibus et deserunt nostrum laboriosam illum, pariatur
        nisi voluptas, sint voluptatibus voluptate perspiciatis reiciendis
        voluptatum? Quos inventore quasi praesentium animi? Veniam laudantium ab
        velit, incidunt cupiditate, animi dolor numquam placeat magnam eveniet,
        ullam tenetur. Doloremque beatae exercitationem quibusdam mollitia error
        aliquam sapiente modi soluta tenetur! Fugit sequi nam nulla, libero
        facere porro quasi suscipit soluta, incidunt laboriosam reiciendis in
        cumque ut.
      </p>
    </div>
  );
}

export default Response;
