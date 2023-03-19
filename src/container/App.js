import Aside from "./Aside";
import Main from "./Main";

import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Intro from "../pages/Intro";

function App() {
  return (
    <div className="app h-full flex flex-col justify-around ">
      <Aside />
      <Main />
      
    </div>
  );
}

export default App;
