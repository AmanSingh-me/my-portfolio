import SkillCard from "../components/SkillCard";


import { data } from "../data/data";




export default function Skills() {
  return (
    <section className="">
      <h1 className="text-4xl text-center mt-4 p-2">
        My Skills
      </h1>

      <div className="mt-14 flex flex-wrap justify-around">
      {
          data.map((obj, ind) => 
            <SkillCard key={ind} skillIcon={obj.skillIcon} 
            skillName={obj.skillName} colorHex={obj.colorHex} />
          )
      }
      </div>
    </section>
  );
}
