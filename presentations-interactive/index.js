import React from "react";
import { render } from "react-dom";

//Switch between lectures
import Presentation from "./slides/lecture1-core-concepts"; 
//import Presentation from "./slides/lecture2-prototype-chain";

render(<Presentation/>, document.getElementById("root"));