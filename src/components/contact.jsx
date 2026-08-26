import { Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-500">07</p>

        <h2 className="mt-2 text-4xl font-bold">Let's Connect</h2>

        <p className="mt-5 max-w-xl leading-7 text-neutral-400">
          I'm currently looking for software engineering internship
          opportunities and opportunities to build useful software.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:dhruvjain0412@gmail.com"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 transition hover:bg-white/10"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://github.com/jaindhruv04"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-5 py-3 transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-jain04/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-5 py-3 transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
