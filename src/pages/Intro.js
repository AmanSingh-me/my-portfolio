import Profile_svg from "../assets/avatar.svg";
import Typewriter from "typewriter-effect";
import SocialLinks from "../components/SocialLinks";

export default function Intro() {
  return (
    <section className="text-center h-full flex flex-col justify-between items-center">
      <img src={Profile_svg} alt="profile" />

      <div className="my-6" >
        <h1 className="text-3xl mb-4">Hi, I'm &nbsp; 
          <span className=" text-teal text-4xl">
            Aman&nbsp;Singh
          </span>
        </h1>
        <Typewriter
          options={{
            strings: ["A Frontend Developer", "A Tech Enthusiast"],
            autoStart: true,
            loop: true,
          }}/>
      </div>
      
      <SocialLinks />
    </section>
  );
}
