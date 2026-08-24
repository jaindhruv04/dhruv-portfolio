function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">01</p>

        <h2 className="mt-2 text-4xl font-bold">About</h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-neutral-400">
          <p>
            I'm a B.Tech Information Technology student at BPIT, graduating in
            2028, focused on software engineering and full-stack development.
          </p>

          <p>
            I enjoy building practical applications and understanding how
            software systems work from the frontend through the backend,
            database, and APIs.
          </p>

          <p>
            I'm currently strengthening my Data Structures and Algorithms,
            Object-Oriented Programming, DBMS, and software engineering
            fundamentals while building projects with modern web technologies.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            B.Tech IT · BPIT
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Class of 2028
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Full-Stack Development
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Data Structures & Algorithms
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
