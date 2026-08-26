import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "CareerOS",
    date: "Jul 2026 - Present",
    description:
      "Built a full-stack placement-preparation platform with React, Express, Prisma, and PostgreSQL. Implemented authentication, DSA tracking, company tracking, interview management, and persistent user data through a REST API.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/jaindhruv04/careeros",
    live: "https://careeros-dwui.onrender.com",
    architecture: ["React", "Express REST API", "Prisma", "PostgreSQL"],
    highlights: [
      "JWT-based authentication and protected application flows",
      "Relational data modeling with Prisma and PostgreSQL",
      "Separate frontend and backend deployments on Render",
    ],
    screenshots: [
      { src: `${import.meta.env.BASE_URL}projects/careeros-dashboard.png`, label: "Dashboard" },
      { src: `${import.meta.env.BASE_URL}projects/careeros-dsa.png`, label: "DSA Tracker" },
      { src: `${import.meta.env.BASE_URL}projects/careeros-login.png`, label: "Authentication" },
    ],
  },
  {
    title: "Solar",
    date: "Aug 2026 - Present",
    description:
      "Built a full-stack e-commerce application using Node.js, Express, MongoDB, Mongoose, and EJS, implementing authentication, product browsing, search and filtering, cart management, pricing calculations, and database-backed product data.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Tailwind CSS"],
    github: "https://github.com/jaindhruv04/solar",
    live: "https://solar-9r6t.onrender.com",
    architecture: ["EJS", "Express / MVC", "Mongoose", "MongoDB"],
    highlights: [
      "Authentication and session-based user flows",
      "MongoDB data modeling with Mongoose",
      "Server-rendered MVC architecture with Express and EJS",
    ],
    screenshots: [
      { src: `${import.meta.env.BASE_URL}projects/solar-shop.png`, label: "Shop" },
      { src: `${import.meta.env.BASE_URL}projects/solar-cart.png`, label: "Cart" },
      { src: `${import.meta.env.BASE_URL}projects/solar-auth.png`, label: "Authentication" },
    ],
  },
];

function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <div className="p-4">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
          <img
            src={project.screenshots[activeImage].src}
            alt={`${project.title} ${project.screenshots[activeImage].label} screenshot`}
            className="aspect-video w-full object-cover object-top"
          />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {project.screenshots.map((screenshot, screenshotIndex) => (
            <button
              key={screenshot.src}
              onClick={() => setActiveImage(screenshotIndex)}
              className={`overflow-hidden rounded-lg border transition ${
                activeImage === screenshotIndex
                  ? "border-white/50"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={screenshot.src}
                alt={`${project.title} ${screenshot.label}`}
                className="aspect-video w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="p-7 pt-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-neutral-500">{project.date}</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-400 transition hover:text-white">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-400 transition hover:text-white">
              Live Demo
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <p className="mt-5 leading-7 text-neutral-400">{project.description}</p>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Engineering highlights</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-400">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Architecture</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.architecture.map((layer, layerIndex) => (
              <div key={layer}>
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">{layer}</span>
                {layerIndex < project.architecture.length - 1 && <span className="mx-2 text-neutral-600">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">02</p>
        <h2 className="mt-2 text-4xl font-bold">Projects</h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Selected full-stack applications built to solve practical problems and strengthen my software engineering skills.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
