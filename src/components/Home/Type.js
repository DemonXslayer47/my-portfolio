import React from "react";
import Typewriter from "typewriter-effect";
import '../../style.css';

function Type() {
  return (
    <div className="purple">
      <span className="purple">
      <Typewriter
        options={{
          strings: [
            "Java Developer",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      </span>
    </div>
  );
}

export default Type;
