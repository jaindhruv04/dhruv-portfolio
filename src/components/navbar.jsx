function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="shrink-0 text-lg font-bold">
          DJ
        </a>

        <div className="hidden items-center gap-6 text-sm text-neutral-400 lg:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#dsa" className="transition hover:text-white">
            DSA
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-sm">
          <a
            href="https://github.com/jaindhruv04"
            target="_blank"
            rel="noreferrer"
            className="hidden text-neutral-400 transition hover:text-white sm:block"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/dhruvjain0412"
            target="_blank"
            rel="noreferrer"
            className="hidden text-neutral-400 transition hover:text-white sm:block"
          >
            LinkedIn
          </a>

          <a
            href="/Dhruv_Jain_Resume.pdf"
            download
            className="rounded-md border border-white/15 px-3 py-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-white/5 lg:hidden">
        <div className="mx-auto flex min-w-max max-w-6xl gap-6 px-6 py-3 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#dsa" className="hover:text-white">
            DSA
          </a>

          <a href="#experience" className="hover:text-white">
            Experience
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
