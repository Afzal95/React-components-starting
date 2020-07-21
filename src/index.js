import React from "react";
import ReactDOM from "react-dom";
// import p, { doublePi, triplePi} from "./math.js";
import * as P from "./math.js";

console.log(P);


ReactDOM.render(
  <ul>
    <li>{P.default}</li>
    <li>{P.doublePi()}</li>
    <li>{P.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
