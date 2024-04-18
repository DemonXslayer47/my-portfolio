import React from "react";
import preSVG from '../Assets/pre.svg'; // Adjust the import path to where your SVG is located

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <img src={preSVG} alt="Loading..." className="preloader-svg"/>
    </div>
  );
}

export default Pre;
