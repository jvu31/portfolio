import { skills } from "./data";

const Skills = () => {
  return (
    <div className="page">
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Technical Skills
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          My technical expertise spans machine learning, full-stack development,
          and various programming languages and tools.
        </p>
      </div>
      {/* Skills Sections */}
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.skillId} className="section">
            <div className="flex space-x-2 border-light_gray border-b-2 items-center">
              <skill.skillIcon className="text-purple" size={40} />
              <h2>{skill.skillName}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4">
              {skill.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center space-y-2 p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <item.icon
                    className="text-purple rounded-full bg-slate-200 p-2"
                    size={48}
                  />
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <h4 className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.years} years
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
