import React, { useState } from "react";
import axios from "axios";
import Nav from "./utils/Nav";
import Routing from "./utils/Routing";

function App() {
 
  return (
    <div
      className="p-10 flex
     flex-col  "
    >
      <Nav />
      <Routing/>
    </div>
  );
}

export default App;
