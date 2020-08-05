import React from "react";
import {useLocation} from "react-router-dom";

export default function Names() {
  //   const owner = props.match.url.split("/").reverse()[0];
  const location = useLocation();

  const owner = location.pathname.split("/").slice(-1)[0];

  if (owner === "sina") {
    var SinaSection = (
      <div className="sina">
        <h1 style={{color: "hotpink"}}>You entered SinaSection.</h1>
      </div>
    );
  } else {
    SinaSection = <div className="sina">sina isn't entered</div>;
  }

  return (
    <div>
      <h1>Name</h1>
      {SinaSection}
    </div>
  );
}
