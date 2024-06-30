import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Show from "../components/Show";
import Service from "../components/Service";

function Routing() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Show" element={<Show />}/>
    <Route path="/Services" element={<Service />}/>
  </Routes>
  </>
  );
}

export default Routing;
