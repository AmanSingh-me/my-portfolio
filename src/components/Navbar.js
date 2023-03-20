
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { useState } from "react";


export default function Navbar() {

  const [ isNavOpen, setIsNavOpen ] = useState(false);


  return (
    <nav className=" flex justify-between items-center" >
        <h1 className="text-4xl text-sky-blue" > A.S </h1>

        <div className="px-1.5 py-1 cursor-pointer rounded-lg
         hover:bg-darkblue" onClick={ () => 
         setIsNavOpen(prev => !Boolean(prev)) } >

          {
            isNavOpen ? <CgClose size="30px" color="white" /> : <FiMenu size="30px"/>
          }

        </div>
    </nav>
  )
}
