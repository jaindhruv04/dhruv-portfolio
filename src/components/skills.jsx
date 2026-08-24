const skills = {
  Languages: ["C++", "JavaScript", "SQL"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
  Fundamentals: ["DSA", "OOP", "DBMS"],
};

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">04</p>

        <h2 className="mt-2 text-4xl font-bold">Skills</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-white/10 p-6"
            >
              <h3 className="font-semibold">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
