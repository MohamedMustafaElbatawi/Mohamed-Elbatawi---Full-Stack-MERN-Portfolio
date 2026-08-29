import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-slate-900/40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTU5dGVybXo4aHptNTM5NTRjamkwZWdmMmQzZ3Q0cHpjeXgxZmo5NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TFPdmm3rdzeZ0kP3zG/giphy.gif"
                  // src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  className="w-full h-full object-cover"
                  alt="Animated developer at work"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 md:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              I turn ideas into modern, reliable full-stack web applications.
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              I’m a full-stack developer focused on building modern web
              applications that are clean, responsive, and easy to use. I enjoy
              working across both frontend and backend to create complete
              digital experiences that solve real problems and deliver value.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300">
              <p className="mb-3">What I care about most:</p>

              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Clean and maintainable code</li>
                <li>• Smooth user experience across every screen</li>
                <li>• Reliable backend and scalable solutions</li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
