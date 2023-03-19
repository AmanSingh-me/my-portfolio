

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";


export default function SocialLinks() {
  return (
    <div className="bg-blue-500 w-fit flex items-center px-1 py-1.5 rounded-lg" >
        
        <a href="https://github.com/AmanSingh-me" target="_blank" rel="noreferrer" className="mx-2 p-2 hover:bg-darkblue rounded-xl">
            <FaGithub size="1.8rem"/>
        </a>

        <a href="https://amansingh-me.hashnode.dev/" target="_blank" rel="noreferrer" className="mx-2 p-2 hover:bg-darkblue rounded-xl">
            <SiHashnode size="1.8rem"/>
        </a> 

        <a href="https://www.linkedin.com/in/aman-singh-2938b3209/" target="_blank" rel="noreferrer" 
        className="mx-2 p-2 hover:bg-darkblue rounded-xl">
            <FaLinkedin size="1.8rem"/>
        </a>

    </div>
  )
}
