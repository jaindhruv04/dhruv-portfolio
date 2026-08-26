const experience = [
  {
    type: "Leadership",
    role: "Co-Founder",
    organization: "VECTOR AI Society · BPIT",
    date: "Present",
    description:
      "Co-founded a student AI society focused on technical workshops, hackathons, and project-building sessions covering Artificial Intelligence, Machine Learning, and Generative AI.",
  },
  {
    type: "Leadership",
    role: "Student Coordinator",
    organization: "Training & Placement Cell · BPIT",
    date: "Present",
    description:
      "Coordinate placement-related communication, recruiter information, and student-facing activities as part of the Training & Placement Cell.",
  },
  {
    type: "Leadership",
    role: "Lead Organizer",
    organization: "NO//CODE: BUILD CHAOS Hackathon",
    date: "2024",
    description:
      "Led planning and execution of a hackathon involving 254 participants across 85 teams, coordinating registrations, scheduling, logistics, and event execution.",
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">06</p>
        <h2 className="mt-2 text-4xl font-bold">Experience & Leadership</h2>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <div key={`${item.role}-${item.organization}`} className="border-l border-white/20 pl-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-neutral-500">{item.date}</p>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-500">{item.type}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
              <p className="text-neutral-300">{item.organization}</p>
              <p className="mt-3 max-w-3xl leading-7 text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
