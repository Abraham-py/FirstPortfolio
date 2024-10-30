interface Skill {
  name: string;
  level: number;
  svg: string;
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="transition-transform duration-500 transform hover:scale-105 scroll-m-16"
    >
      <h2 className="text-2xl font-bold mb-6 text-center mt-10">
        &lt;Mis Habilidades/&gt;
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-lg transition-all duration-300 ease-in transform hover:shadow-lg hover:shadow-blue-500 hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span
                className="h-8 w-8 mr-2"
                dangerouslySetInnerHTML={{ __html: skill.svg }}
              />
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
