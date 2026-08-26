import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_380px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Software Engineering Internships
          </div>

          <p className="mb-4 text-sm font-medium text-neutral-500">
            B.Tech Information Technology · BPIT · Class of 2028
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Dhruv Jain
          </h1>

          <h2 className="mt-4 text-2xl text-neutral-400 sm:text-3xl">
            Software Engineer · Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            I build full-stack web applications using React, Node.js,
            Express.js, PostgreSQL, MongoDB, and modern JavaScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-200"
            >
              View Projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Dhruv_Jain_Resume.pdf`}
              download
              className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium transition hover:bg-white/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex text-neutral-500 transition hover:text-white"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl" />

            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Dhruv Jain"
              className="relative h-72 w-72 rounded-3xl border border-white/10 object-cover object-[center_35%] shadow-2xl transition duration-500 hover:scale-[1.02] sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
