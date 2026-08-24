function DSA() {
  return (
    <section id="dsa" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">05</p>

        <h2 className="mt-2 text-4xl font-bold">Problem Solving</h2>

        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          I use C++ for Data Structures and Algorithms practice and focus on
          building strong problem-solving and core computer science
          fundamentals.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">
              Data Structures & Algorithms
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Arrays",
                "Strings",
                "Linked Lists",
                "Stacks",
                "Queues",
                "Hashing",
                "Trees",
                "Graphs",
                "Dynamic Programming",
                "Searching",
                "Sorting",
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">
              Computer Science Fundamentals
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {["C++", "OOP", "DBMS", "SQL", "Problem Solving"].map((topic) => (
                <span
                  key={topic}
                  className="rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-300"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-neutral-500">
              Competitive programming and coding-profile statistics will be
              added when they provide meaningful evidence of problem-solving
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DSA;
