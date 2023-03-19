
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { useState } from "react";
import NavListItem from "./NavList-Item";


export default function Navbar() {

  const [ isNavOpen, setIsNavOpen ] = useState(false);


  return (
    <nav className=" flex justify-between items-center" >
        <h1 className="text-4xl" > A.S </h1>

        <div className="px-1.5 py-1 cursor-pointer rounded-lg
         hover:bg-darkblue" onClick={ () => 
         setIsNavOpen(prev => !prev) } >

          {
            isNavOpen ? <CgClose size="30px" color="white" /> : <FiMenu size="30px"/>
          }

        </div>
    </nav>
  )
}