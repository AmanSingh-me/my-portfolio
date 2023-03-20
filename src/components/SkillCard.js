


export default function Skill_Card({skillIcon, skillName, colorHex}) {

  // Pascalcase for acting it as React component
  let Icon = skillIcon; 
    
  return (
    <div className="w-[150px] bg-blue-500 flex flex-col justify-center items-center m-6 py-6 rounded-lg border border-darkblue ">
    
      <Icon size="3rem" fill={colorHex} />

      <h2 className={`text-xl mt-4 text-center`}>
        {skillName}
      </h2>
    </div>
  );
}
